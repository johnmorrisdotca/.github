# Family embed standard (draft, 2026-10-09)

Researched across all 27 package repos on 2026-10-09; kyuubu is the reference implementation.

## Today
- Custom element + framework wrappers, no iframe page, no builder: bushu, hitotsu, jarajara, jirai, karakuri, kazu, kumimoji, meikyuu, sugoroku, suido, tenka, tobiishi, tsunagi.
- Element + iframe page, no builder: korokoro, toranpu (`embed/`).
- Element + iframe + full builder: kyuubu only.
- Nothing yet: address-plus, chizu, kuni, hata (in progress), hikidashi, kotoba, narabe, gunjin, domino, houseki, tane, rest-in-pieces.
- jsDelivr serves HTML as text/plain: iframe pages live on GitHub Pages. Pages sends no X-Frame-Options/CSP, so iframes work.

## The standard
- **Builder:** `familyEmbedBuilder` in `scripts/family-template.mjs`, lifted from kyuubu's `demo/builder-code.js` + builder UI. A package supplies OPTIONS (kyuubu's CUBE_OPTIONS shape: id, kind, default, choices, names, groups, plus a "left out, with reason" list), MAKERS (tag, iframe page, formats), its npm major and EN/JA words. Options → live preview → tabs with Copy; only non-default choices written; state in the URL hash with Copy link; a test fails when a package option is neither listed nor left out with a reason.
- **Tabs:** custom element; `<img>` where a static file exists; iframe; ES module; React 19; Vue (`isCustomElement`); Svelte; Angular (`CUSTOM_ELEMENTS_SCHEMA`); plain HTML for WordPress Custom HTML / Squarespace Code blocks; iframe URL only (Notion, OBS).
- **Naming:** `<pkg-thing>` kebab-case; `dist/element-define.js` pinned `@<major>` on jsDelivr; also `defineX(tag?)`.
- **Attributes:** `lang` en|ja (fr later) defaulting to `<html lang>`; `theme` light|dark|auto (default auto); `size` always small|medium|large (domain sizes get their own names: grid, sides); `width` px; `label` for screen readers; booleans off with off|false|no|0; every attribute reflected as a property; anything else on `options`.
- **Events:** `<pkg>-<verb>`, bubbles + composed, JSON-safe detail; the iframe posts the same payload via postMessage; no personal data; docs tell hosts to check `event.origin`.
- **Iframe page:** `embed/` on GitHub Pages; `?` parameters with the attribute names and values; every parameter validated, never raw HTML; noindex; `color-scheme: light dark`; transparent background; fills the frame with no inner scroll; builder prints the height per size.
- **Accessibility, motion, privacy:** keyboard-operable, aria-live results, prefers-reduced-motion honoured; static `<img>`/SVG fallback where the content is a finite set; no cookies, no tracking, nothing external but jsDelivr; the iframe stores nothing.
- **Versioning:** attributes and iframe parameters append-only within a major; the builder fills the pin from the package's version.
- **Cost:** static on GitHub Pages and jsDelivr; zero server CPU.

## Inconsistencies to fix when each package adopts it
`?` vs `#` iframe parameters; `embed/` vs `embed.html`; parameter names that differ from attributes (dice/notation, onepip/one-pip); `size` meaning different things; cloth/theme/design for the look; composed vs not; per-package majors.

## Ranked embeds (usefulness × ease)
1. hata `<hata-flag code shape width label lang>` (+ `<img>` fallback, works today)
2. chizu `<chizu-map region highlight labels zoom lang>`, choropleth `data=`, `<chizu-locator place="Q200239|lat,lon">` (lakes/rivers/cities, needs the water branch), `<chizu-quiz region seed>`
3. kuni + hata + chizu `<kuni-card code fields>`
4. daily puzzles: suido, kazu, tsunagi, meikyuu, jirai (`daily`; a shared date-seed helper)
5. kotoba `<kotoba-game words size daily>`
6. korokoro builder (element + iframe exist; OBS source for streamers)
7. toranpu hand `<toranpu-hand cards="AS KH 10D">`, jarajara rack (strategy articles)
8. hikidashi `<hikidashi-furigana>`, `<hikidashi-era>`, `<hikidashi-numerals>`
9. bushu `<bushu-picker>` iframe + builder
10. narabe `<narabe-board game moves step>` (boardSvg exists), sugoroku position
11. address-plus `<address-field country name>` form-associated field (browser only)
12. tane `<tane-picker items seed>` (name picker / group maker)
13. playable games via existing tags: tobiishi, karakuri, kumimoji, hitotsu, tenka
14. rest-in-pieces sample-data table (its API already runs in the browser on Pages)
Later: gunjin, domino, houseki.

## Rollout order
Shared builder (from kyuubu) → hata → korokoro, toranpu, jarajara → chizu (map, locator, quiz + water) → kuni card → daily puzzles → bushu, hikidashi → narabe, sugoroku → tane, playable games → address-plus field → rest-in-pieces table.
