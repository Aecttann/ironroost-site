import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { policies, site } from '../site/policy.mjs';
import { renderPolicy } from '../site/template.mjs';

export const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const output = resolve(root, 'dist');

export async function build() {
  const referenceIds = policies.en.sections.map(section => section.id);
  for (const [lang, policy] of Object.entries(policies)) {
    if (JSON.stringify(policy.sections.map(section => section.id)) !== JSON.stringify(referenceIds)) {
      throw new Error(`Section order differs in ${lang}`);
    }
    const directory = resolve(output, lang === 'en' ? '.' : lang);
    await mkdir(directory, { recursive: true });
    await writeFile(resolve(directory, 'index.html'), renderPolicy(lang, policy));
  }
  await mkdir(resolve(output, 'assets'), { recursive: true });
  for (const name of ['styles.css', 'app.js']) {
    await copyFile(resolve(root, 'site', name), resolve(output, 'assets', name));
  }
  await copyFile(resolve(root, 'site/assets/icon.svg'), resolve(output, 'assets/icon.svg'));
  await writeFile(resolve(output, '.nojekyll'), '');
  await writeFile(resolve(output, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.origin}${site.basePath}sitemap.xml\n`);
  await writeFile(resolve(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', 'uk/'].map(path => `<url><loc>${site.origin}${site.basePath}${path}</loc><lastmod>${site.effectiveDate}</lastmod></url>`).join('')}</urlset>\n`);
  console.log(`Built English and Ukrainian policies in ${output}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
