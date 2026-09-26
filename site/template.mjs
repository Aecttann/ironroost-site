import { site } from './policy.mjs';

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

export function renderPolicy(lang, policy) {
  const prefix = lang === 'en' ? './' : '../';
  const pageUrl = `${site.origin}${site.basePath}${lang === 'uk' ? 'uk/' : ''}`;
  const number = index => String(index + 1).padStart(2, '0');
  const icon = (name) => `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${{
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    up: '<path d="M12 19V5m-6 6 6-6 6 6"/>',
    print: '<path d="M7 8V3h10v5M7 16H4V9h16v7h-3M7 13h10v8H7z"/><path d="M16 10h1"/>',
  }[name]}</svg>`;
  return `<!doctype html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="theme-color" content="#171d19">
  <meta name="description" content="${escapeHtml(policy.description)}">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'self'; script-src 'self'; img-src 'self'; font-src 'self'; connect-src 'none'; base-uri 'none'; form-action 'none'">
  <title>${escapeHtml(policy.title)} — Ironroost</title>
  <link rel="canonical" href="${pageUrl}">
  <link rel="alternate" hreflang="en" href="${site.origin}${site.basePath}">
  <link rel="alternate" hreflang="uk" href="${site.origin}${site.basePath}uk/">
  <link rel="alternate" hreflang="x-default" href="${site.origin}${site.basePath}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(policy.title)} — Ironroost">
  <meta property="og:description" content="${escapeHtml(policy.description)}">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:locale" content="${lang === 'en' ? 'en_US' : 'uk_UA'}">
  <meta property="og:site_name" content="Ironroost">
  <link rel="icon" type="image/svg+xml" href="${prefix}assets/icon.svg">
  <link rel="stylesheet" href="${prefix}assets/styles.css">
  <script defer src="${prefix}assets/app.js"></script>
</head>
<body id="top">
  <a class="skip-link" href="#policy">${policy.skip}</a>
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="${prefix}" aria-label="Ironroost"><img src="${prefix}assets/icon.svg" width="34" height="34" alt=""><span>IRONROOST</span></a>
      <nav class="language-switch" aria-label="${policy.language}">
        <a href="${prefix}" lang="en" hreflang="en" data-language="en"${lang === 'en' ? ' aria-current="page"' : ''}>English</a>
        <a href="${prefix}uk/" lang="uk" hreflang="uk" data-language="uk"${lang === 'uk' ? ' aria-current="page"' : ''}>Українська</a>
      </nav>
    </div>
  </header>
  <main>
    <div class="hero">
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-square" aria-hidden="true"></span>${policy.eyebrow}</p>
          <p class="hero-heading">${policy.heading}</p>
          <p class="hero-intro">${policy.intro}</p>
          <div class="hero-actions"><a class="primary-link" href="#policy">${policy.read}${icon('arrow')}</a><a class="quiet-link" href="#contact">${policy.contactLink}</a></div>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="art-label"><span>${policy.illustration}</span><span>01 / 01</span></div>
          <div class="shield-grid">
            <svg class="pixel-shield" viewBox="0 0 240 240" fill="none" shape-rendering="crispEdges">
              <path d="M40 40h32V24h96v16h32v112h-16v24h-24v24h-24v16h-32v-16H80v-24H56v-24H40z" stroke="#b9d982" stroke-width="4"/>
              <path d="M56 56h32V40h64v16h32v88h-16v24h-24v24h-16v8h-16v-8H96v-24H72v-24H56z" fill="#b9d982" fill-opacity=".08"/>
              <path d="M82 88h16v64H82zm60 0h16v64h-16z" fill="#82967c"/>
              <path d="M86 96h8v8h-8zm0 20h8v8h-8zm0 20h8v8h-8zm60-40h8v8h-8zm0 20h8v8h-8zm0 20h8v8h-8z" fill="#cbd4c4"/>
              <path d="M98 92h44v60H98z" fill="#b9d982"/>
              <path d="M108 112h24v24h-24z" fill="#e3efc8"/>
              <path d="M116 72h8v44h-8z" fill="#e3efc8"/>
              <path d="M12 24V12h12m192 0h12v12M12 216v12h12m192 0h12v-12" stroke="#55664f" stroke-width="2"/>
            </svg>
          </div>
          <div class="art-caption"><span class="status-square"></span>${policy.illustrationCaption}</div>
        </div>
      </div>
    </div>
    <div class="summary-band">
      <div class="container summary" aria-label="${policy.summaryLabel}">
        ${policy.summary.map((item, index) => `<div class="summary-item"><span class="summary-number">${number(index)}</span><div><h2>${item.title}</h2><p>${item.text}</p></div></div>`).join('')}
      </div>
    </div>
    <div class="container policy-layout">
      <aside class="sidebar">
        <nav class="contents" aria-label="${policy.contents}"><p class="eyebrow">${policy.contents}</p><ol>${policy.sections.map((section, index) => `<li><a href="#${section.id}" data-section="${section.id}"><span>${number(index)}</span>${section.title}</a></li>`).join('')}</ol></nav>
        <div class="sidebar-contact"><span class="small-cross" aria-hidden="true">+</span><p class="sidebar-question">${policy.question}</p><p>${policy.questionText}</p><a href="mailto:${site.email}">${site.email} ↗</a></div>
      </aside>
      <article id="policy" class="policy" tabindex="-1" aria-labelledby="policy-title">
        <div class="policy-header">
          <p class="eyebrow">IRONROOST / ${policy.version.toUpperCase()} ${site.version}</p>
          <h1 id="policy-title">${policy.title}</h1>
          <div class="policy-meta"><span>${policy.updated}: <time datetime="${site.effectiveDate}">${policy.date}</time></span><button class="print-button" type="button" hidden>${icon('print')}${policy.print}</button></div>
        </div>
        ${policy.sections.map((section, index) => `<section id="${section.id}" class="policy-section" aria-labelledby="heading-${section.id}"><div class="section-heading"><span class="section-number" aria-hidden="true">${number(index)}</span><h2 id="heading-${section.id}">${section.title}</h2></div><div class="section-body">${section.html}</div></section>`).join('')}
        <a class="back-link" href="#top">${policy.back}${icon('up')}</a>
      </article>
    </div>
  </main>
  <footer class="site-footer"><div class="container footer-inner"><div><p class="footer-brand">IRONROOST<span class="footer-square" aria-hidden="true"></span></p><p>${policy.footer}</p></div><div class="footer-right"><p>© 2026 ${site.developer}</p><p>${policy.footerNote}</p></div></div></footer>
</body>
</html>`;
}
