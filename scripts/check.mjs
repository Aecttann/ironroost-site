import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { policies, site } from '../site/policy.mjs';
import { build, output } from './build.mjs';

await build();
for (const [lang, policy] of Object.entries(policies)) {
  const path = lang === 'en' ? '' : 'uk/';
  const html = await readFile(resolve(output, path, 'index.html'), 'utf8');
  assert.match(html, new RegExp(`<html lang="${lang}">`));
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  assert.ok(html.includes(policy.title));
  assert.ok(html.includes(`mailto:${site.email}`));
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate ID in ${lang}`);
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `Missing section ${match[1]}`);
  for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
    if (/^(https:|mailto:)/.test(match[1])) continue;
    let target = resolve(output, path, match[1]);
    if (match[1].endsWith('/')) target = resolve(target, 'index.html');
    await access(target);
  }
  assert.equal(policy.sections.length, 12);
  assert.equal(policy.summary.length, 3);
  assert.ok(!/<script\b[^>]*src="https?:/.test(html));
  console.log(`Checked ${lang}: complete static content, links, anchors, and metadata`);
}
