# Repository Instructions

- This is a static GitHub Pages site; there is no package manifest, build step, lint config, test runner, or CI workflow in the repo.
- Serve from the repository root for local checks: `python3 -m http.server 8000`. Do not use `file://`; root assets use absolute paths and `/i18n/*.json` is loaded with `fetch()`.
- Deployment publishes files as committed. There is no bundling, hashing, transpilation, or generated asset pipeline here.
- The production custom domain is `erlondnjr.com.br` in `CNAME`; `index.html` also uses that URL for canonical/OG metadata.

## Main Portfolio

- Root page entrypoint is `index.html`; shared styles are in `css/style.css`; images/docs are direct files under `assets/`.
- Translations are ID-based: `i18n/i18n.js` fetches `/i18n/pt.json` or `/i18n/en.json`, then writes each key into the element with the matching `id` (`cvLink` updates `href`). When changing translatable copy, update both JSON files and keep keys aligned with HTML IDs.
- `index.html` currently preloads `/js/main.js` but loads `/js/script.js`; only `js/main.js` exists. Verify or fix that script reference before relying on root-page JS behavior.

## Subprojects

- `projetos/flash-cnh/` is a standalone landing page with its own `index.html`, `styles.css`, `script.js`, and local `assets/`; do not assume root CSS/JS applies there.
- `simulador-cartoes-perfurados/` is an exported Construct 2 app/PWA. Treat `c2runtime.js`, `data.js`, `offline*.js`, and `sw.js` as generated export artifacts; avoid broad formatting or hand edits unless the task explicitly targets the export.

## Verification

- There are no automated checks to run. For content/style/JS changes, serve locally and manually check the affected route, especially `/`, `/projetos/flash-cnh/`, or `/simulador-cartoes-perfurados/` as relevant.
