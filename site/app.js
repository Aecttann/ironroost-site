const printButton = document.querySelector('.print-button');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

// Both locales use the same section IDs, so a language change can retain the reading position.
function updateLanguageLinks() {
  for (const link of document.querySelectorAll('[data-language]')) {
    const url = new URL(link.href);
    url.hash = window.location.hash;
    link.href = url.href;
  }
}
updateLanguageLinks();
window.addEventListener('hashchange', updateLanguageLinks);

const sections = [...document.querySelectorAll('.policy-section')];
const contentsLinks = [...document.querySelectorAll('[data-section]')];
let scheduled = false;

function updateCurrentSection() {
  scheduled = false;
  const header = document.querySelector('.site-header');
  const boundary = (header?.getBoundingClientRect().bottom ?? 0) + 50;
  let current = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= boundary) current = section.id;
    else break;
  }
  for (const link of contentsLinks) {
    if (link.dataset.section === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

function scheduleUpdate() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateCurrentSection);
}
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('pageshow', scheduleUpdate);
updateCurrentSection();
