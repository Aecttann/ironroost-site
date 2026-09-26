# Ironroost privacy website

An English and Ukrainian privacy website for Ironroost, developed by **Aectann**. English is the default; Ukrainian has its own `/uk/` route. Both pages contain the complete policy without JavaScript.

- English: https://aecttann.github.io/ironroost-site/
- Ukrainian: https://aecttann.github.io/ironroost-site/uk/
- Privacy contact: aectann101@gmail.com

## Development

Requires Node.js 22 or newer. No dependencies or installation step are needed.

```sh
npm run dev
```

Open http://127.0.0.1:4173/ironroost-site/. The preview includes the production repository path to catch broken relative links. Stop it with Ctrl+C. Rebuild after source edits; the preview does not watch files.

```sh
npm run check
```

This generates `dist/` and checks both languages, translation section parity, internal links, unique anchors, and metadata. Generated files are ignored by Git.

## Files

- `site/policy.mjs`: shared developer details, dates, and full bilingual policy content.
- `site/template.mjs`: semantic static HTML for both locales.
- `site/styles.css`: responsive layout, keyboard focus, reduced motion, and print styles.
- `site/app.js`: optional section highlighting, language anchor preservation, and printing.
- `site/assets/icon.svg`: the game's original pixel-tank favicon, adapted from its browser shell.
- `scripts/`: dependency-free build, checks, and local preview.
- `.github/workflows/pages.yml`: validates and publishes `dist/` on pushes to `main`.

## Publishing

GitHub Pages must use **GitHub Actions** as its source. The workflow builds and publishes on every push to `main`. No custom domain is required. If the repository or hosting URL changes, update `site.origin` and `site.basePath` in `site/policy.mjs` for canonical URLs, sitemap, and preview.

The Android app and Play/AdMob settings must use the English URL above as their privacy-policy URL. Changing those external settings is separate from deploying this website. This repository does not modify the game.

## Policy maintenance

The initial policy was checked against the game's Android manifest and backup rules, AdMob and UMP integration, audience selection, progress/meta storage, iOS platform storage, and CrazyGames bridge on 27 September 2026. It covers local nicknames and records, rewarded-ad timestamps, OS backups, optional CrazyGames synchronization/leaderboards, and provider-managed data. Campaign reset is deliberately described separately from deletion of all app storage.

Review and update both languages, effective date, and version when actual data practices change. AdMob account configuration, the Play Data safety form, consent messages, and target-audience declarations must also reflect the shipped game. The website does not verify those account-side settings.

Primary references:

- [Google Mobile Ads data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure)
- [Google Privacy Policy](https://policies.google.com/privacy)
- [Google partner app data practices](https://policies.google.com/technologies/partner-sites)
- [Google Play User Data policy](https://support.google.com/googleplay/android-developer/answer/10144311?hl=en)
- [CrazyGames Privacy Policy](https://www.crazygames.com/privacy-policy)
- [GitHub Pages visitor IP logging](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)

The site makes no requests to ad networks, analytics services, external fonts, or embedded services. It sets no cookies and writes no browser storage. GitHub, as the host, processes technical requests under its own policy.
