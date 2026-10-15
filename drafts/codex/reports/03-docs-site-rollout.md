# 03 — Documentation-site rollout

Status: done — all 28 packages green and committed. Packages are completed one at a time on `codex/03-docs-site-rollout`, stacked on 12 where that package adopted 12 and otherwise on 02. Completed branches through Hikidashi, plus 02/12, were pushed for release review on 2026-10-12; see reports/push-release-handoff-2026-10-12.md. All final documentation rollout branches were pushed and verified on 2026-10-14; see reports/push-docs-handoff-2026-10-14.md. Nothing tagged, published, deployed, merged or changed in GitHub settings. All 28 packages have adopted the site and the current shared tooling; final SHA-256 and clean-worktree checks passed.

## Package state

| Package | State | Branch / last commit | Evidence |
| --- | --- | --- | --- |
| korokoro | done and green | codex/03-docs-site-rollout / `c6fadaf2e405387e2f1da1863b7ed662355ca9a5` | 248 exports; 10 EN + 10 JA guides; 278 checked examples; 534 generated pages; shared version 2026-10-13-workspaces. |
| kyuubu | done and green | codex/03-docs-site-rollout / `ca5bc55754cb75cfa1c5c40d7700613b8dc26059` | 278 exports; 10 EN + 10 JA guides; 294 checked examples; 604 generated pages; shared version 2026-10-13-workspaces. |
| hitotsu | done and green | codex/03-docs-site-rollout / `230856a5aaf75901e85b391a18c6a3b7970885d7` | 113 exports; 10 EN + 10 JA guides; 127 checked examples; 262 generated pages; shared version 2026-10-13-workspaces. |
| toranpu | done and green | codex/03-docs-site-rollout / `83d69a341a43e63ce685d486b9fd662cf8bd9726` | 616 exports; 10 EN + 10 JA guides; 623 checked examples; 1312 generated pages; shared version 2026-10-13-workspaces. |
| tane | done and green | codex/03-docs-site-rollout / `01be5be9c03c67a625985bbabec5b0a2fc5a95a9` | 74 exports; 10 EN + 10 JA guides; 90 checked examples; 182 generated pages; shared version 2026-10-13-workspaces. |
| narabe | done and green | codex/03-docs-site-rollout / `8bbb40f444699e0ae6553298b31ec355f0019490` | 243 exports; 10 EN + 10 JA guides; 259 checked examples; 524 generated pages; shared version 2026-10-13-workspaces. |
| tenka | done and green | codex/03-docs-site-rollout / `7caf9d8f8aa59e3143c5b98e73d0bfc20894de6b` | 164 exports; 10 EN + 10 JA guides; 180 checked examples; 368 generated pages; shared version 2026-10-13-workspaces. |
| kumimoji | done and green | codex/03-docs-site-rollout / `e167f6425ddddbf210002551a7b2ac7c23392596` | 210 exports; 10 EN + 10 JA guides; 224 checked examples; 458 generated pages; shared version 2026-10-13-workspaces. |
| tsunagi | done and green | codex/03-docs-site-rollout / `b489c0c3880b6e66c0893031d42806f1d4a87ded` | 261 exports; 10 EN + 10 JA guides; 277 checked examples; 598 generated pages; shared version 2026-10-13-workspaces. |
| jarajara | done and green | codex/03-docs-site-rollout / `3661376b5f2041632277a3f3b1c5ae2ac289bb4c` | 232 exports; 10 EN + 10 JA guides; 246 checked examples; 510 generated pages; shared version 2026-10-13-workspaces. |
| suido | done and green | codex/03-docs-site-rollout / `f6e153c415c0bc9a8bbc083ccbbf6e97089e3343` | 243 exports; 10 EN + 10 JA guides; 257 checked examples; 562 generated pages; shared version 2026-10-13-workspaces. |
| domino | done and green | codex/03-docs-site-rollout / `5551384d0d7dc9619ed6d6638e73056977554c57` | 87 exports; 10 EN + 10 JA guides; 101 checked examples; 206 generated pages; shared version 2026-10-13-workspaces. |
| kotoba | done and green | codex/03-docs-site-rollout / `e67d97ecdc2bfe3ffc592bab8e6acc66c3668c36` | 96 exports; 10 EN + 10 JA guides; 110 checked examples; 246 generated pages; shared version 2026-10-13-workspaces. |
| sugoroku | done and green | codex/03-docs-site-rollout / `df6d59c84a5ba90de0ab6798403d126524c735e9` | 179 exports; 10 EN + 10 JA guides; 195 checked examples; 394 generated pages; shared version 2026-10-13-workspaces. |
| kazu | done and green | codex/03-docs-site-rollout / `1577edc8d716cc7c9ee027d337027b751ee90b36` | 558 exports; 10 EN + 10 JA guides; 572 checked examples; 1224 generated pages; shared version 2026-10-13-workspaces. |
| meikyuu | done and green | codex/03-docs-site-rollout / `8bee40123c985a42c60a9a72e32cb9fffa7bf489` | 356 exports; 10 EN + 10 JA guides; 372 checked examples; 770 generated pages; shared version 2026-10-13-workspaces. |
| hikidashi | done and green | codex/03-docs-site-rollout / `7a28caf6b0c64dde25f59366395d93aa48e418e5` | 56 exports; 11 EN + 11 JA guides; 114 checked examples; 158 generated pages. Complete browser gate: 99 passed, six deliberate profile skips. |
| chizu | done and green | codex/03-docs-site-rollout / `96c616b92cb9144321cb622f68f059c341d354e6` | 693 exports; 12 EN + 12 JA guides; 711 checked examples; 2508 generated pages; shared version 2026-10-13-workspaces. |
| bushu | done and green | codex/03-docs-site-rollout / `08fcc2d6b4969305adea7b3dff7a0a8c4e86b4fa` | 41 exports; 10 EN + 10 JA guides; 59 checked examples; 122 generated pages; shared version 2026-10-13-workspaces. |
| tobiishi | done and green | codex/03-docs-site-rollout / `ec58122d66a69101cf9e65422abdcaa80c2f1732` | 55 exports; 11 EN + 11 JA guides; 71 checked examples; 148 generated pages; shared version 2026-10-13-workspaces. |
| jirai | done and green | codex/03-docs-site-rollout / `c0013b80cd952366ec5df435dddbfef4066fbf53` | 85 exports; 11 EN + 11 JA guides; 103 checked examples; 212 generated pages; shared version 2026-10-13-workspaces. |
| gunjin | done and green | codex/03-docs-site-rollout / `3bad00abf3e022f97b41a8e5c5062b8ab7ec229e` | 57 exports; 11 EN + 11 JA guides; 73 checked examples; 162 generated pages; shared version 2026-10-13-workspaces. |
| karakuri | done and green | codex/03-docs-site-rollout / `3744dbf4fdb83ea83556136c4575e872672858b0` | 103 exports; 11 EN + 11 JA guides; 113 checked examples; 246 generated pages; shared version 2026-10-13-workspaces. |
| houseki | done and green | codex/03-docs-site-rollout / `1f4439ab2d0cc091c6283965f2147e9279caa5b4` | 327 exports; 11 EN + 11 JA guides; 351 checked examples; 696 generated pages; shared version 2026-10-13-workspaces. |
| address-plus | done and green | codex/03-docs-site-rollout / `89c5b0c7b151ab4c21e94a44d94f77f11841bb6f` | 259 exports; 12 EN + 12 JA guides; 291 checked examples; 564 generated pages; shared version 2026-10-13-workspaces. |
| kuni | done and green | codex/03-docs-site-rollout / `dc8c039fdd3d2683f3d312dc447868edd393bef6` | 871 exports; 12 EN + 12 JA guides; 889 checked examples; 2592 generated pages; shared version 2026-10-13-workspaces. |
| hata | done and green | codex/03-docs-site-rollout / `31f657c03634606baa117099846379501ae39b76` | 1844 exports; 12 EN + 12 JA guides; 3668 checked examples; 5538 generated pages; shared version 2026-10-13-workspaces. |
| rest-in-pieces | done and green | codex/03-docs-site-rollout / `d02baaddbd03c2d8ee9500374b3cdefc49ef4a08` | 57 exports; 12 EN + 12 JA guides; 83 checked examples; 168 generated pages; shared version 2026-10-13-workspaces. |

## Shared files

The synchronized master is verified on the pilot. Version 2026-10-13 retains large sibling catalogues on the complete entry index and the currently viewed resource beside core sidebar navigation, reducing repeated navigation without removing reference pages. Adopter versions and new gate results are recorded below; updates remain local.
- Generator version: `2026-10-13-workspaces`; `scripts/docs-site.mjs` SHA-256 `5953399a4b239c6f721b733ba007daba8335689dbdbf746135c8d166aa91dead`.
- Browser test SHA-256 `6119efc290d197bb2d90cdd8eaf9dc2364bc485973c4b6f0e6da64c543594564`.
- Static test SHA-256 `6f3269517351bf1c48bab036bc831184b7889a3c58aa67b57012e43fef2b9178`.
- Shared README lint SHA-256 `ff28f44c7dc2630ee878ef8c75222bf92a57d917282e0038746e8c23cf821696`; README test SHA-256 `c9ff84a2605f2d0969715fd18e7672b9ae259026f4b0643467b38c32b254a011`.

Current shared-master verification: All 28 packages have adopted the five current shared files, passed their required gates, and been committed with clean worktrees. Master commit `b10111d26650e7e01dcbb9cc533e6fd340a86a6f`.
## Shared 2026-10-13: catalogue size, valid default imports and exhaustive page-walk budget

Hata exposed quadratic repeated navigation: 904 drawing module entries were repeated on each of 5,538 English/Japanese pages, producing 1.9 GB of docs. GitHub Pages [documents a 1 GB published-site limit](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). The generator now retains every resource and export page, complete entry index, search record and legacy anchor; sibling catalogues of at least 50 entries use the complete entry index from the sidebar, with core entries and the current resource retained. Ordinary smaller entry lists stay complete. The first compact Hata build measured 174,441,216 docs bytes and 204,925,970 full-site bytes, with all 5,538 pages retained. A native Hata budget assertion enforces a 900,000,000-byte full-site ceiling.

The generated default-import hint also needed correction: default resources now use valid `import value from "package/path"`, while definitions retain the native local declaration name. Named/type-only imports keep their actual syntax. A shared TypeScript parsing test covers default/named values and types. Hata's actual HTML default page and retained active-resource navigation are checked in all browser profiles.

The exhaustive page walk retains all layout, language, heading, landmark and skip-link assertions. Its deadline is now max(240,000 ms, page count × 100 ms), retaining the original minimum and allowing large catalogues to finish. The old oversized Hata walk and the first compact walk reached the fixed four-minute deadline; both are recorded failures, not declared green or ignored.

The pilot was verified before each master synchronization. Final pilot gates: pnpm check (431 passed), pnpm docs:check (114 checked examples), pnpm test:demo (99 passed; six intentional skips). The canonical master and all adopter copies receive the exact same files, version 2026-10-13. Individual adopter full gates, commits and log paths are recorded in the shared navigation refresh verification table and work/docs-shared-2026-10-13-results.json. New commits remain local.

The final shared size assertion invokes the existing `measureBundles` function in standalone Node, preserving the recorded sizes and tolerance. Sweep-only failures were traced to the Python runner inheriting NVM Node 24.14.1 (zlib 1.3.1-e00f703) from the task workspace; package commands use Homebrew Node 24.15.0 (zlib 1.2.12). Gzipping identical saved bundles reproduced the exact discrepancies: Tane 9,775 versus 9,666 bytes, and Kumimoji 679,054 versus 689,460. The runner now enters each package through its login-shell environment and checks the runtime before running gates. Earlier failures and diagnostics remain in the audit. Cross-zlib tolerance is a review consideration for CI; no SDK, recorded size or tolerance was changed.

The final unmodified source gates passed for Toranpu (527 tests), Tane (210), and Kumimoji (225). Kumimoji, Tsunagi and Jarajara return to their original native test discovery and setup, removing the temporary ordering arrangements. Per-package commit and validation results below record the remaining refresh.

## Korokoro

The approved job and keywords are in package metadata, README and docs/site.json. The README has its measured size/provenance badges, npm alias recipe and Getting started link. Every public export has its reference documentation and a concrete checked example; runtime SDK output after removing comments was byte-identical to the branch base. The Vue comment was attached to its actual export, and generated audio documentation was changed in its generator and rebuilt.

Ten paired guides cover installation, notation/game readings, exact odds, saved/shared rolls, custom/loaded dice, native embeds, design, engine behavior, troubleshooting and 1.x migration. Existing longer documents remain linked and preserved. Public API source comments remain English under the translated reference headings. The shared build supplies 534 pages, local Pagefind search, Markdown twins, llms.txt/full and api.html with stable anchors.

Published VitePress/TypeDoc guide and reference addresses have 302 redirects from scripts/docs-compat.mjs. The old inline live examples are discoverable as links to the native tray and the two native single-die demos; tests retain roll/static-face behavior checks. The Pages workflow has one additional compatibility build step, with no new job. Browser global setup writes the same redirects after the shared build. The older website source is retained for reference; contributor and architecture docs describe the current generator.

The native demo has Docs/API links, with the documentation link following English/Japanese. README hero desk images were refreshed for those controls. The picture helper now uses a 20-round game for its four-throw Dice War scene, waits for its encoded move record and supplies screenshot-only deterministic random/clock values. The new light/dark Dice War pictures show that scenario; other native images were preserved. The full picture command passed (18 pictures, within budget).

Validation recorded so far:
- pnpm check: 807 passed; /tmp/family-03-korokoro-check-final.log.
- pnpm docs:check: 278 TypeScript examples checked and run; /tmp/family-03-korokoro-doc-check-final.log.
- pnpm test:readme: 13 passed; /tmp/family-03-korokoro-readme-final.log.
- pnpm test:package: installed ESM/CommonJS entries, types and three CLI aliases passed; /tmp/family-03-korokoro-package-final.log.
- Shared documentation + migration browser cases: 24 passed, six deliberate profile skips; /tmp/family-03-korokoro-doc-browser.log.
- Focused documentation-to-single-die flow: three passed; /tmp/family-03-korokoro-single-dice.log.
- Final complete demo/documentation browser gate: 284 passed; seven existing/deliberate profile skips; /tmp/family-03-korokoro-demo.log.

Early migration checks caught hidden mobile sidebar selectors, a replaced inline-example route, an old announcement selector and the previous example’s static five versus the native d20’s twenty. They are corrected without removing the native behavior assertions. The final full suite passed before this package was marked complete.

Viewed documentation screenshots are `outputs/03-korokoro-docs-<390|1280>-<en|ja>-<light|dark>.png`, all eight combinations. Both updated desk hero and Dice War images were viewed.

## Kyuubu

Kyuubu adopts the approved job and keywords, measured 38.0 kB minified+gzip badge, provenance and cube npm alias. Its eleven named entries supply 278 export pages in both language versions, with ten paired guides and 294 checked examples. The complete site has 604 pages, local Pagefind search, Markdown twins, llms files and the old api.html anchors. Existing detailed display, controls, replay, cuboid and download documents remain preserved and linked.

Comments in 39 SDK source files changed without any change in their compiled JavaScript after removing comments. Examples use native state, parsing, solving and replay functions. Node examples execute; browser examples are typechecked with ts no-run. A React ref example handles its nullable initial state. The CLI verification example uses --from for its starting scramble. Cuboid examples put dimensions before moves that use them.

All five native pages have a Docs pill before API reference. Initial language and live language changes choose the matching docs path. The shared family template and all five pilot files stay unchanged. The Pages workflow adds only the existing job’s docs build step. Native light/dark desk hero images were refreshed for the new pills and viewed; other pictures were preserved. Documentation was viewed at 390 and 1280 px, English/Japanese and light/dark, with captures in outputs/03-kyuubu-docs-<width>-<language>-<scheme>.png.

Validation:
- pnpm check: 369 passed; /tmp/family-03-kyuubu-check-final.log.
- pnpm docs:check: 294 checked examples and no documentation problems; /tmp/family-03-kyuubu-docs-check-final.log.
- pnpm docs:site: 604 pages and Pagefind index; /tmp/family-03-kyuubu-docs-site-final.log.
- pnpm test:readme: seven TypeScript blocks and seven running examples passed; /tmp/family-03-kyuubu-readme.log.
- pnpm test:package: all eleven ESM/CommonJS entry imports and installed CLI passed, with no docs or pictures in the npm tarball; /tmp/family-03-kyuubu-package.log.
- pnpm screenshots:readme: 16 pictures, 1851 KB within budget; /tmp/family-03-kyuubu-pictures.log.
- Complete browser gate: 357 passed; one existing millisecond-sensitive flick passed on retry; 14 existing/deliberate skips; /tmp/family-03-kyuubu-demo-final.log.
- Focused docs/navigation browser gate: 30 passed, six deliberate profile skips; /tmp/family-03-kyuubu-doc-browser-final.log.

The early generated-docs check required preserving the already verified framework list in the npm description; that list is retained with the approved job. New Japanese is needs review: all ten guides, docs/site.json pitch/name and entry titles, and Docs navigation wording.


## Hitotsu

The approved job and keywords, 42.2 kB measured badge, provenance badge and card-game npm alias are added. Fourteen SDK TypeScript files have complete native summaries, parameter/return documentation and examples with identical compiled behavior after comments are removed. Ten paired guides cover starting, house rules, computer play, save/restore, local mounting and frames, shared tables, state, cards/sounds, troubleshooting and migration. The previous embed contract is preserved and linked.

The site has 113 public export pages per language and 127 checked examples. The generator emits 264 page records; the physical site and Pagefind index have 262 distinct pages because the two registration entries share a path. Both registration imports remain unchanged. Native main and builder pages have Docs/API links, with initial and live language selection checked in every browser profile. The old API index retains export anchors and a tested path through documentation back to the native table. The shared files remain byte-identical to the pilot.

Light/dark desk hero pictures were updated and viewed; other existing pictures were preserved. Documentation was viewed in all eight width/language/scheme combinations, saved under outputs/03-hitotsu-docs-<width>-<language>-<scheme>.png. README size: 50,164 characters.

Validation:
- pnpm check: 103 passed; /tmp/family-03-hitotsu-check-final.log.
- pnpm docs:check: 127 examples typechecked/run, no documentation problems; /tmp/family-03-hitotsu-docs-check-initial.log.
- pnpm docs:make: 21 passed, generated language reference current; /tmp/family-03-hitotsu-generated-docs.log.
- pnpm test:readme: ten TypeScript examples hold; /tmp/family-03-hitotsu-readme.log.
- pnpm test:package: all six installed ESM/CommonJS entries and seeded CLI passed; no docs or pictures in the tarball; /tmp/family-03-hitotsu-package.log.
- pnpm screenshots:readme: 16 pictures, 549 KB within budget; /tmp/family-03-hitotsu-pictures.log.
- API index to documentation to native table: three browser profiles passed; /tmp/family-03-hitotsu-api-browser.log.
- Complete native/docs browser gate: 78 passed, six deliberate profile skips; /tmp/family-03-hitotsu-demo-final.log.

The initial source gate caught the provenance badge’s exact alt-text contract. The initial browser run collected an outdated API-title assertion; its updated assertion, export anchor and full return flow now pass, followed by the green full suite. New Japanese is needs review: all ten guides, docs/site.json JA pitch/name/entry titles and Docs/API navigation wording.


## Toranpu

The approved job and keywords, 36.0 kB measured badge, provenance badge and playing-cards npm alias are added. The reference contains 616 items across 27 entries: 605 callable/type/constant/class examples are checked, while eleven namespace pages are member indexes under the unchanged pilot. Ten paired guides add eighteen examples, for 623 total. They cover starting, computers, save/export, card designs, solitaires, elements/React, engine architecture, representations, troubleshooting and migration from 1.x. The 2.0 migration uses the actual changelog: kebab-case entry paths changed; saved keys remained unchanged. Existing detailed references are preserved and linked.

The completed site and local search index contain 1,312 pages. It includes Markdown twins, llms files and the existing API anchors. Comments changed in 98 SDK TypeScript files without changing their compiled behavior after comments are removed. Recorded-sound examples were added in scripts/sounds.mjs and regenerated. Native engines supply legal moves, setup transitions, scoring and replay; longer solver examples are typechecked with ts no-run. The defineHand example now uses its published standard-tag type.

Main and builder pages have language-aware Docs links. The new pill reserves the same width in both languages; a real WebKit check caught and corrected its two-pixel change to the table position. The API index checks every entry, export anchors and non-namespace summaries, follows newGame to its typed definition, switches to Japanese and returns to the native demo. The shared generator, static test, browser test and README files remain byte-identical to the pilot. No new workflow job or hosted service is added.

The light/dark desk hero images were refreshed and viewed. Other pictures, including the unchanged phone scenes, are preserved. Documentation was viewed in all eight width/language/scheme settings and captured under outputs/03-toranpu-docs-<width>-<language>-<scheme>.png. README length: 63,800 characters.

Validation:

- pnpm check: 524 passed; /tmp/family-03-toranpu-check-final.log.
- pnpm docs:check: 623 examples checked and no documentation problems; /tmp/family-03-toranpu-docs-check-final.log.
- pnpm docs:make: 58 passed; /tmp/family-03-toranpu-generated-docs.log.
- pnpm test:readme: TypeScript and thirteen running examples passed; /tmp/family-03-toranpu-readme.log.
- pnpm test:package: all 27 installed ESM/CommonJS entries and the seeded CLI passed; no docs or pictures in the tarball; /tmp/family-03-toranpu-package.log.
- pnpm screenshots:readme: 26 pictures, 1,126 KB within budget; /tmp/family-03-toranpu-pictures-final.log.
- Focused API return flow and stable language layout: six passed; /tmp/family-03-toranpu-api-layout-browser-final.log.
- Complete browser gate: 297 passed, six deliberate profile skips; /tmp/family-03-toranpu-demo-final.log.

Early checks caught SVG quoting in examples, the actual one-argument Hearts view signature, an incorrect branding-document link, the translated function badge and a rendered-link selector. All were corrected while retaining native behavior assertions. Newly written Japanese is **needs review**: all ten guides, docs/site.json pitch/name and entry titles, including the short English-face label, and Docs/API navigation wording.

## Tane

Tane adopts the approved seeded-random-number job and keywords, measured 9.7 kB badge, provenance badge and random npm alias. Its four entries supply 74 exports, 90 checked examples, ten paired English/Japanese guides and 182 pages, with local search, Markdown twins, llms files and stable API anchors. Nine SDK TypeScript files have fuller comments and examples with identical compiled runtime behavior after comments are removed.

Guides cover installation, shuffling/picking, sub-streams, daily seeds, saved positions, native embeds/hooks, engine design, seed ranges, troubleshooting and migration. The picker guide distinguishes its local selection getter from index-only callback and frame messages. The README now describes the already shipped picker. Native gallery and builder Docs links follow initial/live language; the pill reserves a stable width. Both updated desk hero pictures were viewed; other pictures were preserved. All eight documentation width/language/colour combinations were viewed in outputs/03-tane-docs-<width>-<language>-<scheme>.png. README: 54,646 characters.

Validation:
- pnpm check: 207 passed; /tmp/family-03-tane-check-final.log.
- pnpm docs:check: 90 examples checked, no documentation problems; /tmp/family-03-tane-docs-check-final.log.
- pnpm docs:make: generated reference current; /tmp/family-03-tane-generated-docs.log.
- pnpm test:readme: 18 examples passed; /tmp/family-03-tane-readme.log.
- pnpm test:package: four installed ESM/CommonJS entries and seeded CLI passed; /tmp/family-03-tane-package.log.
- pnpm screenshots:readme: 16 pictures, 422 KB within budget; /tmp/family-03-tane-pictures.log.
- Complete native/documentation browser gate: 90 passed, six deliberate profile skips; /tmp/family-03-tane-demo.log.
- All five pilot-file hashes match unchanged copies.

API commit: 34a07f2. Final commit: 84943971bd2f89bd0dd021b60b60d366d05f8e92. Worktree clean. New Japanese **needs review**: all ten guides, configuration pitch/name/entry titles and navigation wording. Nothing pushed, tagged or published.

## Narabe

The approved board-game job and keywords, measured 20.8 kB badge, provenance badge and board-games npm alias are added. Six named entries expose 243 public exports with 259 checked examples, ten paired guides and 524 searchable pages. The documented rules/go path now has an explicit entry pointing to its existing files; wildcard imports remain available. All five shared pilot files remain byte-identical. Comments in 35 SDK TypeScript files changed with identical emitted behavior after comments are removed.

Guides cover starting, legal moves/phases, Go scoring and lower-level preconditions, saved records/clock facts/opening choices, SVG/React, native embeds, state/variant design, bounded game length, troubleshooting and migration. Existing detailed README and embed material remains preserved. Native main and builder Docs links track initial/live language. The API index retains entry-prefixed anchors and links through a reference page and Japanese back to the native board. Only the two desk hero pictures were retained from the refresh and both were viewed; other pictures were preserved. All eight docs width/language/scheme captures were viewed at outputs/03-narabe-docs-<width>-<language>-<scheme>.png. README: 57,836 characters.

Validation:
- pnpm check: 669 passed; /tmp/family-03-narabe-check-final.log.
- pnpm docs:check: 259 examples typechecked/run, no documentation problems; /tmp/family-03-narabe-docs-check-final.log.
- pnpm docs:make: 25 passed, language reference current; /tmp/family-03-narabe-generated-docs.log.
- pnpm test:readme: eleven running examples passed; /tmp/family-03-narabe-readme.log.
- pnpm test:package: six named installed ESM/CommonJS entries, existing wildcard Go/version imports and seeded CLI passed; /tmp/family-03-narabe-package.log.
- pnpm screenshots:readme: 22 pictures, 531 KB within budget; /tmp/family-03-narabe-pictures.log.
- Focused API/docs/native navigation: nine passed across three profiles; /tmp/family-03-narabe-navigation-final.log.
- Full native/docs browser gate: 69 passed, six deliberate profile skips; /tmp/family-03-narabe-demo-final.log.

Initial API navigation assertions used an unprefixed anchor; corrected to the existing main-createGame anchor and the reference page link, then the focused and full gates passed. API commit: 384e0f7. Final commit: be7000aad877c0f6638c92869a12ac07138fa9cc. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Tenka

The approved conquest job/keywords, 14.9 kB measured badge, provenance badge and strategy-game npm alias are added. Seven entries supply 164 public exports, 180 checked examples, ten paired guides and 368 searchable pages. All five pilot files remain unchanged. Comments in 26 SDK TypeScript files preserve identical emitted behavior after comments are removed, including regenerated world/Europe shapes. The shape examples are in scripts/map.mjs and scripts/map-europe.mjs, both rebuilt successfully; map data did not change.

Guides cover setup, complete turns, battles/cards, save/replay/export, daily deals, DOM/React/native embeddings, state/random design, maps/dressing, troubleshooting and 1.x-to-2.x migration. Architecture detail was preserved verbatim in the explanation guide with corrected relative links; the README keeps its architecture heading and links and is 63,356 characters. An outdated one-map sentence now names both existing maps. Native Docs links track initial/live language on main and builder pages. The native table test alias invokes the full docs/demo gate; the existing table suite and unchanged shared e2e test are discovered together. The API index preserves anchors and a tested path into a reference, through Japanese, and back to the playable table.

Both updated desk hero pictures were retained and viewed; other scenes were preserved. All eight documentation width/language/scheme screenshots were viewed under outputs/03-tenka-docs-<width>-<language>-<scheme>.png. React changes are comments/examples only; existing component lifecycle and hook logic are unchanged.

Validation:
- pnpm check: 230 passed; /tmp/family-03-tenka-check-final.log.
- pnpm docs:check: 180 TypeScript examples checked/run, no documentation problems; /tmp/family-03-tenka-docs-check-final.log.
- pnpm docs:make: 22 passed, generated language reference current; /tmp/family-03-tenka-generated-docs.log.
- pnpm test:readme: 22 running examples passed; /tmp/family-03-tenka-readme.log.
- pnpm test:package: all seven installed ESM/CommonJS entries, optional dressing-peer behavior and package contents passed; /tmp/family-03-tenka-package.log.
- pnpm test:frameworks: Vue, Svelte, Angular, React and plain projects built; this command's default is build-only, without its optional browser flag; /tmp/family-03-tenka-frameworks.log.
- pnpm map and pnpm map europe: rebuilt geometry/reference files, runtime comparison unchanged; /tmp/family-03-tenka-map.log and /tmp/family-03-tenka-map-europe.log.
- pnpm screenshots:readme: 16 pictures, 598 KB within budget; /tmp/family-03-tenka-pictures.log.
- Focused navigation: nine passed across three profiles; /tmp/family-03-tenka-navigation.log.
- Full native/docs browser gate: 135 passed, six deliberate profile skips; /tmp/family-03-tenka-demo-final.log.

The initial API example check caught an incorrect shape constant name and treating Korokoro's RandomSource as callable; corrected to TENKA_SHAPES and .next(). A code-fence literal in the map generator was corrected before successful regeneration. API commit: 4b7aa2b. Final commit: f1de33556ccb87fd7ea9675b5fc6873ac6dc6797. Worktree clean. New Japanese **needs review**: all ten guides, the added source-layout explanation, docs/site.json pitch/name/entry titles and Docs navigation labels. Nothing pushed, tagged or published.

## Kumimoji

The approved crossword job and keywords, measured 689.5 kB badge, provenance badge and word-game alias are added. Six entries supply 210 exports, 224 checked examples, ten paired guides and 458 searchable pages. The shared size tool bundles everything imported, including dynamically reachable dictionaries; this number is not a claim that the browser loads both lists eagerly. All five pilot copies remain unchanged. Comments in 33 SDK TypeScript files have identical emitted behavior after comments are removed. Dictionary data and licence notices are unchanged.

Guides cover loading words, solo tile play, kana/wild identities, shared-bag tables, save/restore and native embeddings, grid/view design, seeded generation, troubleshooting and migration. The existing word-list licence/attribution table and NOTICE remain linked and preserved; no new licence interpretation is introduced. keep is documented as manual file controls, never automatic persistence. The README is 63,288 characters. Native main/builder Docs links follow initial/live language. Existing table browser tests remain included alongside the unchanged shared docs test, with test:table invoking the full demo/docs gate. React changes are comments/examples only, with lifecycle and hook behavior preserved.

Both refreshed desk hero pictures were retained and viewed; other scenes were preserved. All eight docs width/language/scheme screenshots were viewed at outputs/03-kumimoji-docs-<width>-<language>-<scheme>.png.

Validation:
- pnpm check: 222 passed; /tmp/family-03-kumimoji-check-final.log.
- pnpm docs:check: 224 examples checked/run, no documentation problems; /tmp/family-03-kumimoji-docs-check-final.log.
- pnpm docs:make: 23 passed, generated language reference current; /tmp/family-03-kumimoji-generated-docs.log.
- pnpm test:readme: twenty running examples passed; /tmp/family-03-kumimoji-readme.log.
- pnpm test:package: six installed ESM/CommonJS entries, both dictionary loading and package licence notices passed; /tmp/family-03-kumimoji-package.log.
- pnpm test:frameworks: Vue, Svelte, Angular, React and plain projects built; default build-only command, optional framework browser mode not requested; /tmp/family-03-kumimoji-frameworks.log.
- pnpm screenshots:readme: fourteen pictures, 264 KB within budget; /tmp/family-03-kumimoji-pictures.log.
- Focused navigation: nine passed across three profiles; /tmp/family-03-kumimoji-navigation.log.
- Full native/docs browser gate: 111 passed, six deliberate profile skips; /tmp/family-03-kumimoji-demo-final.log.

Initial checks caught an unsupported total in a wildcard-count example, missing word loading before decoding progress, two uppercase Null return descriptions the shared checker could not read, and a stale bundle-size measurement. Examples, return wording and measured badge were corrected; the final gates passed. API commit: 2b04784. Final commit: 2ac43aa4ac64ab81577c8ae2d88bfa8db7298a48. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Tsunagi

The approved connect-the-pairs job and keywords, 22.2 kB measured badge, provenance badge and puzzle npm alias are added. Twenty-five entries supply 261 public exports, 277 checked examples, ten paired guides and 598 searchable pages. Fifty SDK TypeScript files, including nineteen generated data files, have fuller comments/examples with identical emitted behavior after comments are removed. No level, answer, order or SDK behavior changed.

The existing level writers share scripts/tsunagi-level-docs.ts. Full generation uses its reference comments, and --refresh applies only those comments to existing data. The refresh is repeatable; size, layout-only, portal, marks and historical renumbering exports all have checked examples and appropriate summaries. Full puzzle regeneration was unnecessary and was not run. Existing shipped-level proofs ran in the source gate.

Guides cover starting, level collections/membership, immutable strokes/resume, SVG/native embeddings, bounded solving/generation, UTC daily progression/assistance, codes/twists, data/proof design, troubleshooting and migration. Solver gaveUp is explicit; exhaustion is not uniqueness proof. Native main/builder Docs links follow initial/live language. The API index preserves anchors and a tested path through an export page and Japanese back to the native SVG board. README and search metadata use the approved 繋ぎ spelling. README: 61,809 characters. The final shared version is 2026-10-12, with byte-identical copies from the synchronized master.

Only the two refreshed desk hero pictures were retained and both were viewed; other scenes were preserved. Documentation was viewed in all eight width/language/scheme combinations at outputs/03-tsunagi-docs-<width>-<language>-<scheme>.png.

Validation:
- pnpm check: 481 passed, including shipped level/answer proofs; /tmp/family-03-shared-tsunagi-check.log.
- pnpm docs:check: 277 examples checked/run, no documentation problems; /tmp/family-03-shared-tsunagi-docs-check.log.
- pnpm docs:make: sixteen passed, generated language reference current; /tmp/family-03-tsunagi-generated-docs.log.
- pnpm test:readme: eighteen running examples passed; /tmp/family-03-tsunagi-readme.log.
- pnpm test:package: all twenty-five installed ESM/CommonJS entries and data/package contents passed; /tmp/family-03-tsunagi-package.log.
- pnpm test:frameworks: five framework projects built and ten native solve flows passed across Chromium/WebKit; /tmp/family-03-tsunagi-frameworks.log.
- pnpm screenshots:readme: twenty-four pictures, 702 KB within budget; /tmp/family-03-tsunagi-pictures.log.
- Focused API/docs/native navigation: nine passed; /tmp/family-03-tsunagi-navigation.log.
- Final metadata/static checks: twenty-four passed; /tmp/family-03-tsunagi-metadata-final.log.
- Final full native/docs browser gate: 236 passed, seven deliberate/existing profile skips; /tmp/family-03-shared-tsunagi-test-demo.log.

The initial source gate caught the description's existing level-count promise and a stale size measurement; both were corrected. The initial shared search check selected CELL_EMPTY when asking for CELL. The documented family-wide shared-version protocol was followed to fix its exact-result selector, with all ten participating package gates rerun successfully. The temporary content-ranking experiment was removed. See the shared correction section and patch.

API commit: 78963b6. Shared revision commit: 7d0920e. Final commit: 17356dd91ce06d44cfa1b48f0f10c895795658dd. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Jarajara

The approved mahjong-tile/solitaire job and keywords, measured 7.8 kB badge, provenance badge and mahjong npm alias are added. Ten entries supply 232 public exports, 246 checked examples, ten paired guides and 510 searchable pages. The five shared copies match the updated 2026-10-12 pilot byte for byte. Comments in 38 SDK TypeScript files preserve identical emitted behavior after comments are removed, including audio/design metadata; recordings and SVG payloads are unchanged.

Audio examples live in scripts/sounds.mjs and the generated audio module was rebuilt successfully. The riichi writer shares scripts/design-docs.mjs, whose repeatable --refresh updates only comments in the existing generated designs; full artwork optimization from an external checkout was unnecessary and was not run. Examples print recording keys rather than base64 assets.

Guides cover starting, names/notation/racks, SVG/designs, solo challenges and explicit clocks, scoring tables, elements/sounds, half-tile geometry, seeded deals/replay, troubleshooting and migration. They distinguish matching solitaire from a complete riichi round engine. The existing architecture paragraph moved verbatim into the explanation guide with its relative link corrected, and the README keeps a summary/link. Its hero alt text names the new Docs control. README: 63,647 characters. The existing ELEMENTS.md#embed-a-rack contract and credits remain linked and preserved.

Native main/builder Docs links follow initial/live language. The API index preserves anchors and a tested route through a reference, Japanese and back to the native board. Both refreshed desk hero pictures were retained and viewed; other scenes were preserved. All eight docs width/language/scheme captures were viewed under outputs/03-jarajara-docs-<width>-<language>-<scheme>.png.

Validation:
- pnpm check: 247 passed; /tmp/family-03-jarajara-check-final.log.
- pnpm docs:check: 246 examples checked/run, no documentation problems; /tmp/family-03-jarajara-docs-check-final.log.
- pnpm docs:make: generated language reference current; /tmp/family-03-jarajara-generated-docs.log.
- pnpm test:readme: thirteen running examples passed; /tmp/family-03-jarajara-readme.log.
- pnpm test:package: ten installed ESM/CommonJS entries, package contents and installed seeded CLI clear passed; /tmp/family-03-jarajara-package.log.
- pnpm test:cli: native commands, errors, locale precedence and seeded behavior passed; /tmp/family-03-jarajara-cli.log.
- pnpm test:frameworks: five projects built and ten native flows passed in Chromium/WebKit; /tmp/family-03-jarajara-frameworks.log.
- pnpm sounds: regenerated metadata from sixteen local recordings; /tmp/family-03-jarajara-sounds.log.
- pnpm screenshots:readme: twenty pictures, 1268 KB within budget; /tmp/family-03-jarajara-pictures.log.
- Focused navigation: nine passed; /tmp/family-03-jarajara-navigation.log.
- Full native/docs browser gate: 210 passed, six deliberate profile skips; /tmp/family-03-jarajara-demo-final.log.

The first guide check caught links using another package's embeds.md name; corrected to Jarajara's existing ELEMENTS.md contract before the final green checks. API commit: 94224b6. Final commit: 3d453ca8f333057b4d9eb8fbc99876003a45ab58. Worktree clean. New Japanese **needs review**: ten guides, source-layout explanation, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Suido

The approved pipe-puzzle title, keywords, 46.3 kB measured badge, provenance badge and pipe-puzzle npm alias are added. Twenty-five entry points supply 243 public exports, 257 checked examples, ten paired guides and 562 searchable pages. All five shared copies match the 2026-10-12 pilot byte for byte. Comments in 53 SDK TypeScript files preserve identical emitted behavior after comments are removed; puzzle arrays and difficulty-reference data are unchanged.

Generated comments come from scripts/suido-level-docs.ts, shared by the classic, marks, big-piece and difficulty-reference writers. Its --refresh path updates comments without regenerating puzzles, scores, reference quantiles or ordering. The root module has an overview separated from declarations.

Guides cover starting, size/daily loaders, native saved progress, SVG, seeded generation and bounded proof, native elements/frames, pipe masks and water rules, architecture/difficulty, troubleshooting and version-1 migration. They distinguish side indices from opening bits, masks from quarter-turn digits, classic from big-piece collections, and count-only search from a complete uniqueness proof. The architecture material moved verbatim to the explanation guide, preserving existing file-by-file documentation. README: 63,630 characters.

Native main/builder Docs links follow initial and live language. API anchors lead through a reference, Japanese and back to a native board in all three profiles. The two refreshed desktop hero pictures were retained and viewed; other scenes were preserved. All eight documentation width/language/scheme captures were viewed: outputs/03-suido-docs-<width>-<language>-<scheme>.png.

Validation:
- pnpm check: 496 tests passed; /tmp/family-03-suido-check.log.
- pnpm docs:check: 257 examples typechecked/run, no documentation problems; /tmp/family-03-suido-docs-check.log.
- pnpm docs:make: nineteen checks passed, generated language reference current; /tmp/family-03-suido-generated-docs.log.
- pnpm test:readme: eleven running examples passed, including rerun after the picture-text correction; /tmp/family-03-suido-readme-final.log.
- pnpm test:package: all twenty-five installed ESM/CommonJS entries passed; package contents exclude documentation/images; /tmp/family-03-suido-package.log.
- pnpm test:frameworks: five projects built and ten native solve flows passed in Chromium/WebKit; /tmp/family-03-suido-frameworks.log.
- pnpm screenshots:readme: twenty-eight pictures, 943 KB within budget; /tmp/family-03-suido-pictures.log.
- Focused navigation: nine passed; /tmp/family-03-suido-navigation.log.
- Full native/docs browser gate: 219 passed, fifteen existing/deliberate profile skips; /tmp/family-03-suido-demo.log.
- Comment-only runtime comparison: fifty-three TypeScript files, zero emitted runtime changes.

API commit: e4060ac. Final commit: a7016c602501378b3fd6530a3924629827051ce6. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Domino

The approved domino/Mexican Train title and keywords, 9.8 kB measured root badge, provenance badge and dominoes npm alias are added. Three entry points supply 87 public exports, 101 checked examples, ten paired guides and 206 searchable pages. All five shared copies match the 2026-10-12 pilot byte for byte. Fourteen SDK TypeScript files have complete comments with identical emitted runtime behavior after comments are removed, including the audio module. The nine recordings and base64 payloads are unchanged; checked audio examples live in scripts/sounds.mjs, which regenerated the module successfully.

Guides cover starting, tile/oriented-tile numbers and legal moves, deterministic computers, native save/replay, CLI, seat/status words, lazy audio, architecture, troubleshooting and version-1 migration. The complete previous architecture material moved verbatim into the explanation guide. The existing completeness test now checks that guide against every source file. The README keeps a summary/link and every other required section. README: 48,908 characters.

Native Docs links follow initial and live language. The old API index preserves every export anchor; tests follow its docs breadcrumb and reference links back to the native table, retaining the native 44-pixel touch-target checks. Both refreshed desktop hero pictures were retained and viewed; other scenes were preserved. All eight documentation width/language/scheme captures were viewed: outputs/03-domino-docs-<width>-<language>-<scheme>.png. Native mounting, iframe and a framework SDK remain outside this package's API; documentation describes its actual pure-rule integrations.

Validation:
- pnpm check: 127 tests passed; /tmp/family-03-domino-check-final.log.
- pnpm docs:check: 101 examples typechecked/run, no documentation problems; /tmp/family-03-domino-docs-check.log.
- pnpm docs:api: legacy Markdown reference regenerated/current; /tmp/family-03-domino-generated-api.log.
- pnpm docs:make: eighteen checks passed, generated Japanese reference current; /tmp/family-03-domino-generated-docs.log.
- pnpm test:readme: eleven running examples passed, including rerun after final picture text; /tmp/family-03-domino-readme-final.log.
- pnpm test:package: all three installed ESM/CommonJS entries, contents and installed CLI passed; /tmp/family-03-domino-package.log.
- pnpm test:cli: seeded deal/play/replay, stdin, locale and error exits passed; /tmp/family-03-domino-cli.log.
- pnpm sounds: nine recordings regenerated, 23,775 bytes of audio; /tmp/family-03-domino-sounds.log.
- pnpm screenshots:readme: fourteen pictures, 854 KB within budget; /tmp/family-03-domino-pictures.log.
- Focused navigation: six passed; /tmp/family-03-domino-navigation.log.
- Full native/docs browser gate: 60 passed, six deliberate documentation profile skips; /tmp/family-03-domino-demo-final.log.
- Comment-only runtime comparison: fourteen TypeScript files, zero emitted runtime changes.

The first source gate caught the source-tree test's old README location; it now checks the relocated detail. Initial browser checks caught a copied export-count threshold and old family-header expectations on the API index; the corrected tests verify the actual index and full return flow. API commit: 279e2ec. Final commit: 7ce339e6be1ecb485becebde895c72447633fff5. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Kotoba

The approved word-list/game title and keywords, 8.1 kB measured root badge, provenance badge and word-list npm alias are added. Fourteen entry points supply 96 public exports, 110 checked examples, ten paired guides and 246 searchable pages. All five shared files match the 2026-10-12 pilot byte for byte. Comments in twenty-three SDK TypeScript files preserve identical emitted behavior after comments are removed; dictionary values, ordering, release information and notices are unchanged.

The four corpus writers share scripts/word-list-docs.mjs. Its --refresh path updates only documentation comments in eight generated public data files, without fetching source corpora or refreshing dictionaries. The helper uses Node built-ins only: the existing monthly JMdict workflow runs without dependency installation, and continues to do so unchanged. Writer executable headers remain first. The notices and NOTICE.md terms are preserved and linked rather than replaced with the code's MIT licence.

Guides cover starting/submitting, direct and lazy dictionaries, pinned ordered pools and daily dates, duplicate-letter marking/scoring, incremental romaji and kana marks, native elements/frames, async CLI/trusted-host boundaries, architecture, troubleshooting and version-1 migration. They distinguish answer pools from allowed guesses, wrong-size/voicing matches from a win, pure SDK document-wide keys from the element's focused host, and nullable mounted state from refused guesses. Existing architecture detail moved verbatim to the explanation guide; its completeness test now checks the guide against every source file. README: 51,693 characters.

Native main/builder Docs links follow initial/live language. API anchors and the docs breadcrumb lead through the reference and back to the native word game. Both refreshed desktop hero pictures were retained and viewed; other scenes were preserved. All eight final documentation width/language/scheme captures were viewed: outputs/03-kotoba-docs-<width>-<language>-<scheme>.png. Dictionary sidebar titles name the actual English/French/German/pop-culture/kana lists in both languages.

Validation:
- pnpm check: 144 tests passed; /tmp/family-03-kotoba-check-final.log.
- pnpm docs:check: 110 examples typechecked/run, no documentation problems; /tmp/family-03-kotoba-docs-check.log.
- pnpm docs:api: legacy Markdown reference regenerated/current; /tmp/family-03-kotoba-generated-api.log.
- pnpm docs:make: twenty-one checks passed, generated Japanese reference current; /tmp/family-03-kotoba-generated-docs.log.
- pnpm test:readme: seventeen running examples passed, including rerun after final picture text; /tmp/family-03-kotoba-readme-final.log.
- pnpm test:package: all fourteen installed ESM/CommonJS entries, contents, preserved notices and installed CLI passed; /tmp/family-03-kotoba-package.log.
- pnpm test:cli: word/check/mark/score/daily commands, locale and error exits passed; /tmp/family-03-kotoba-cli.log.
- Generated comments: refreshed twice from the dependency-free shared writer; /tmp/family-03-kotoba-refresh.log.
- pnpm screenshots:readme: sixteen pictures, 916 KB within budget; /tmp/family-03-kotoba-pictures.log.
- Focused navigation: nine passed; /tmp/family-03-kotoba-navigation.log.
- Full native/docs browser gate: 96 passed, six deliberate documentation profile skips; /tmp/family-03-kotoba-demo.log.
- Comment-only runtime comparison: twenty-three TypeScript files, zero emitted runtime changes.

The initial source gate caught helper imports preceding executable headers; restored the headers. The initial navigation test matched a word-size group's language data attribute as well as the language button; it now targets buttons. The existing API browser assertion follows the new index's real breadcrumb, preserving native accessibility checks after the return. API commit: 22c2c28. Final commit: ba6ed4c75678049bf824d437b374936aaf7bfd81. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Sugoroku

The approved backgammon/variants title and keywords, 11.5 kB measured root badge, provenance badge and backgammon npm alias are added. Five entry points supply 179 public exports, 195 checked examples, ten paired guides and 394 searchable pages. All five shared copies match the 2026-10-12 pilot byte for byte. Comments in twenty-five SDK TypeScript files preserve identical emitted behavior after comments are removed; rules, sounds and native game behavior are unchanged.

Guides cover starting, individual moves versus complete turns, variants and preset resolution, cube/match scoring, notation and validated records, SVG/static positions/playable embeds, deterministic dice versus fractional randomness, bounded computer lookahead, architecture, troubleshooting and version-1 migration. They distinguish playTurn (which already ends the turn) from manual playMove followed by endTurn, records with exact seeded dice from externally supplied dice, GNU IDs from reserve-containing positions, and complete-match scoring from host display. The existing architecture detail moved verbatim into the explanation guide; its completeness test now checks the guide against every source file. README: 61,943 characters.

Native main/builder Docs links follow initial and live language. API anchors lead through a reference, Japanese and back to the playable native board. The two refreshed desktop hero pictures were retained and viewed; other scenes were preserved. All eight documentation width/language/scheme captures were viewed: outputs/03-sugoroku-docs-<width>-<language>-<scheme>.png. Existing variants/source notes and native embed contract remain linked and preserved.

Validation:
- pnpm check: 218 tests passed, including the existing full-game simulations; /tmp/family-03-sugoroku-check.log.
- pnpm docs:check: 195 examples typechecked/run, no documentation problems; /tmp/family-03-sugoroku-docs-check-final.log.
- pnpm docs:make: eighteen checks passed, generated Japanese reference current; /tmp/family-03-sugoroku-generated-docs.log.
- pnpm test:readme: thirteen running examples passed; /tmp/family-03-sugoroku-readme.log.
- pnpm test:package: all five installed ESM/CommonJS entries and published contents passed; /tmp/family-03-sugoroku-package.log.
- pnpm screenshots:readme: sixteen pictures, 477 KB within budget; /tmp/family-03-sugoroku-pictures.log.
- Focused navigation: nine passed; /tmp/family-03-sugoroku-navigation.log.
- Full native/docs browser gate: 135 passed, six deliberate documentation profile skips; /tmp/family-03-sugoroku-demo.log.
- Comment-only runtime comparison: twenty-five TypeScript files, zero emitted runtime changes.

Executed examples caught a redundant endTurn after playTurn; examples now show the correct phase transitions, including the separate manual endTurn workflow. The docs checker also required constructor argument documentation for BoardLayout and GameRecorder, now supplied. API commit: 6e92cca. Final commit: 432b18be76f9801251dcb130e7b36ba9a63106f3. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Kazu

The approved Sudoku/grid-number title and keywords, 64.5 kB measured root badge, provenance badge and sudoku npm alias are added. Forty-one entry points supply 558 public exports, 572 checked examples, ten paired guides and 1,224 searchable pages. All five shared copies match the 2026-10-12 pilot byte for byte. Comments in 166 SDK TypeScript files preserve identical emitted behavior after comments are removed; puzzle rules, generators, encodings and constants are unchanged.

Examples use real supported native boards/codes, with one generated sample per dedicated family and per core kind prepared outside the repository. This avoids generating a large puzzle repeatedly in small rule examples. Generation and DOM examples are no-run but typechecked; bounded solver/check/game examples execute. Juosan uses supported 3×2 dimensions, Ripple 9×9 and Masyu/Yajilin 5×5. The CrossSums drawing example uses its actual material option rather than another family's language option.

Guides cover starting, six number-grid kinds and complete clue suffixes, all twelve dedicated families, answer checking versus completed proof, hints/assistance, entries/notes/progress, native elements/frames, cell/edge formats, architecture and major-2 migration. Existing docs/PUZZLES.md, ARCHITECTURE.md, REGIONS.md, HEYAWAKE.md, LEVELS.md and PLAYING.md remain preserved and linked. The README's moved-section markers still reconstruct its full existing reference; no section or detail was trimmed. README: 63,902 characters.

Docs links are present on the main page, builder and all twelve dedicated native pages, following initial and live language. A small package-local demo helper synchronizes the link; family.css and the family template are unchanged. Stable width lives only in each native stylesheet. Dedicated page titles include the approved job and their puzzle names. The Nurikabe page previously never initialized its family language header; it now supplies English/Japanese header words and applies language changes to the existing player without replacing the game. API anchors lead through a reference, Japanese and back to the native number grid.

The two refreshed desktop hero pictures were retained and viewed; all other scenes are cropped board/panel pictures and were preserved. All eight documentation width/language/scheme captures were viewed: outputs/03-kazu-docs-<width>-<language>-<scheme>.png.

Validation:
- pnpm check: 332 tests passed, including rerun after the Nurikabe language initialization; /tmp/family-03-kazu-check-final.log.
- pnpm docs:check: 572 examples typechecked/run, no documentation problems; /tmp/family-03-kazu-docs-check-final.log.
- pnpm docs:make: fourteen checks passed, generated Japanese reference current; /tmp/family-03-kazu-generated-docs.log.
- pnpm test:readme: nine running examples passed; /tmp/family-03-kazu-readme.log.
- pnpm test:package: all forty-one installed ESM/CommonJS entries and published contents passed; /tmp/family-03-kazu-package.log.
- pnpm screenshots:readme: forty pictures, 1557 KB within budget; /tmp/family-03-kazu-pictures.log.
- Focused navigation: 45 passed, all fourteen pages across three profiles plus the API return flow; /tmp/family-03-kazu-navigation-final.log.
- Full native/docs browser gate: 235 passed, fourteen existing/deliberate profile skips; /tmp/family-03-kazu-demo.log.
- Comment-only runtime comparison: 166 TypeScript files, zero emitted runtime changes.

The initial API typecheck caught CrossSumsDrawOptions lacking a language field. The initial guide check caught a README-relative architecture link, corrected for its guide location. Native navigation exposed Nurikabe's uninitialized header; it now passes all three profiles. API commit: eaa909e. Final commit: 9dd8bf24e18932bc2b511f94042fecc64dafeea6. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles, native Docs wording and Nurikabe's new family header words. Nothing pushed, tagged or published.

## Meikyuu

The approved maze-generator/game title and keywords, 12.6 kB measured root badge, provenance badge and maze npm alias are added. Sixteen entry points supply 356 public exports, 372 checked examples, ten paired guides and 770 searchable pages. All five shared copies match the 2026-10-12 pilot byte for byte. The API examples use native recipes, small flat/surface graphs and bounded view calculations; browser mounts and synthesized sound handles are no-run but typechecked.

Forty-nine SDK TypeScript files changed. Forty-five are comments only. Four surface-level modules replace an undocumented destructured export with three independently documented aliases to the same factory result, evaluated once. TypeScript did not expose documentation on the original binding pattern. All public signatures are byte-identical in the before/after model, and normalizing only those equivalent bindings makes emitted JavaScript identical across all forty-nine files. No lookup function body, recipe array, level ordering, generator or game behavior changed.

Guides cover starting, complete recipes and geometry/modes, numbered/tall/colossal/surface collection scopes, arrows/mixed state, native run/stones, SVG/mounts/frames, projection and quaternion units, architecture/difficulty, troubleshooting and migration across majors 2 and 3. They distinguish tall size indices from widths and surface subdivisions, goal-mode mazes without boundary doors, unlimited stones from a missing result, and recipe identity from reordered level numbers. Old module overviews now reflect version-3 score order and renumbering. Existing architecture detail moved verbatim to the explanation guide; the complete source tree and existing LEVELS/SOLIDS/SOLID-MAZES/MORE-MAZES/PLAYING reference pages remain preserved and linked. README: 63,581 characters.

Native main/builder Docs links follow initial and live language. The API index preserves anchors and a route through a reference, Japanese and back to the native maze. Both refreshed desktop hero pictures were retained and viewed; other cropped board/view scenes were preserved. All eight documentation width/language/scheme captures were viewed: outputs/03-meikyuu-docs-<width>-<language>-<scheme>.png.

Validation:
- pnpm check: 982 tests passed; /tmp/family-03-meikyuu-check.log.
- pnpm docs:check: 372 examples typechecked/run, no documentation problems; /tmp/family-03-meikyuu-docs-check-final.log.
- pnpm docs:make: sixteen checks passed, generated Japanese reference current; /tmp/family-03-meikyuu-generated-docs.log.
- pnpm test:readme: twelve running examples passed; /tmp/family-03-meikyuu-readme.log.
- pnpm test:package: all sixteen installed ESM/CommonJS entries and published contents passed; /tmp/family-03-meikyuu-package.log.
- pnpm screenshots:readme: twenty-six pictures, 704 KB within budget; /tmp/family-03-meikyuu-pictures.log.
- Focused navigation: twelve passed across the four native profiles; /tmp/family-03-meikyuu-navigation.log.
- Full native/docs browser gate: 603 passed, twenty-nine existing/deliberate profile skips; /tmp/family-03-meikyuu-demo.log.
- Public signature comparison: identical before/after; /tmp/family-03-meikyuu-types-before.json.
- Runtime comparison: forty-five comment-only modules, four exactly equivalent alias bindings; no other emitted changes.

Executed examples caught the native sound key step, a nonexistent goal-mode entrance door, and the boundary helper import; corrected to real supported calls. Documentation checks caught TypeScript's undocumented destructuring; separate aliases now supply their own params, returns and examples. The description keeps the existing required phrase made by seven algorithms. API commit: 7cb21c7. Final commit: d0495fdee6612b6bd453c99fa76aceb50afc377e. Worktree clean. New Japanese **needs review**: ten guides, docs/site.json pitch/name/entry titles and Docs navigation wording. Nothing pushed, tagged or published.

## Hikidashi

The existing pilot is now fully audited on its 03 branch, which includes the finished 02 embeds. Its 56 public exports, nine entries, eleven paired guides and 114 checked examples remain intact. The generated site contains 158 pages. All five shared files remain identical to version 2026-10-12.

The builder now has Docs and API links. Docs follows initial and live English/Japanese selection, while the existing native text-tool page retains the same behavior. New browser checks cover both pages and the API anchor → reference → Japanese reference → native text-tool return flow. No SDK source or shared family template changed. README length remains 48,600 characters, with its existing measured 6.4 kB badge.

Validation:
- pnpm check: 428 passed; /tmp/family-03-hikidashi-check-final.log.
- pnpm docs:check: 114 examples checked/run with no documentation problems; /tmp/family-03-hikidashi-docs-check-final.log.
- pnpm test:readme: 15 examples passed; /tmp/family-03-hikidashi-readme.log.
- pnpm test:package: nine installed ESM/CommonJS entries passed; /tmp/family-03-hikidashi-package.log.
- pnpm docs:make: 18 passed; /tmp/family-03-hikidashi-generated-docs.log.
- pnpm screenshots:readme: 16 pictures, 532 KB, within budget; /tmp/family-03-hikidashi-pictures.log. Existing picture bytes were unchanged.
- pnpm docs:site: 158 generated pages; /tmp/family-03-hikidashi-docs-site.log.
- Focused documentation navigation: nine passed; /tmp/family-03-hikidashi-navigation.log.
- Complete browser gate: 99 passed, six deliberate profile skips; /tmp/family-03-hikidashi-test-demo-final.log.

Viewed all eight documentation captures: outputs/03-hikidashi-docs-<390|1280>-<en|ja>-<light|dark>.png. The first navigation test used the wrong native panel ID; its corrected data-testid selector preserves the actual return-flow assertion and all nine checks pass.

New Japanese is **needs review**: builder Docs/API wording and the added embed-guide navigation sentence. Existing eleven Japanese guides remain preserved. Nothing pushed, tagged, published or merged.

## Chizu

The docs branch is stacked on the completed 12 branch. It documents 693 public exports across 546 named entries, including all 538 existing country, subdivision and feature resources. The existing wildcard exports remain; explicit resource names point to the same files and change no data. Twelve paired guides include a generated full resource catalogue. The site supplies 2,508 pages, local search, Markdown twins, llms files and the API index’s preserved anchors.

The existing native API examples were preserved. Missing parameter/return descriptions and summaries were completed, with explicit null/undefined meanings. Generated map/feature comments and their printed outputs now come from scripts/data-docs.mjs through scripts/build-data.mjs. The comment-only refresh is idempotent (zero changes on repeat); no upstream data was downloaded or regenerated. Compiled JavaScript with comments removed is identical in all 564 changed SDK files relative to 12, including every generated map. Geometry, identifiers, names, ordering and native behavior are unchanged.

The complete architecture paragraph and source tree were moved verbatim into the architecture guide. Their completeness/count tests now read that actual guide. README entry completeness now follows the linked generated resource catalogue as well as the README, avoiding a 538-row README expansion. The existing output-comment check stays intact. The README is 61,981 characters after adding the developer docs commands; its measured badge is 13.0 kB. Both native demo and builder have Docs/API links; initial and live language selection and API reference → Japanese → native map return navigation are checked.

Validation:
- pnpm check: 345 passed; /tmp/family-03-chizu-check-final.log.
- pnpm docs:check: 711 examples typechecked/run, no documentation problems; /tmp/family-03-chizu-docs-check-final.log.
- pnpm docs:site: 2,508 generated/indexed pages; /tmp/family-03-chizu-docs-site.log.
- pnpm docs:make: 22 passed, generated language reference/resource catalogue current; /tmp/family-03-chizu-generated-docs-final.log.
- pnpm test:readme: all 719 README/API examples hold; /tmp/family-03-chizu-readme.log.
- pnpm test:package: all named ESM/CommonJS imports and the existing wildcard samples pass; every pointed file is in the tarball, with no docs/pictures shipped; /tmp/family-03-chizu-package.log.
- pnpm screenshots:readme: 16 pictures, 803 KB within budget; /tmp/family-03-chizu-pictures.log. The two updated desk hero images were viewed; the unchanged cropped map views were preserved.
- pnpm test:demo: 249 passed, six deliberate profile skips; /tmp/family-03-chizu-test-demo.log. This includes the nine new language/API return flows.
- Runtime comparison: 564 changed SDK files, zero compiled behavior differences; /tmp/family-03-chizu-runtime.log.
- git diff --check passed. All five shared docs/README files retain the exact 2026-10-12 hashes.

The full-resource bundle measurement takes longer than the shared test’s default five-second budget. A separate Vitest documentation project grants that unchanged shared test file 15 seconds; native tests retain their original deadlines. No assertions or tests were removed. The final full check passes. Initial guide checking also caught the calloutFaults geometry/radius adapter; its corrected native example and both language copies pass. Generated-data examples retain actual printed output comments as required by the existing source gate.

Viewed all eight docs captures: outputs/03-chizu-docs-<390|1280>-<en|ja>-<light|dark>.png, plus both desk hero images. New Japanese is **needs review**: the twelve JA guides, docs/site.json pitch/name/entry titles and Docs/API labels. Upstream map names/readings were preserved. These two new 03 commits remain local after the 2026-10-12 push handoff; no new tag, release, publication, deployment or merge occurred.

## Bushu

The completed 03 branch is stacked on 02. It supplies 41 documented exports across seven entries, ten paired guides, 59 checked examples and 122 generated pages with local search, Markdown twins, llms files and the preserved API anchors. The README has the approved job/keywords, 0.9 kB measured badge, provenance and kanji npm alias; its length is 46,623 characters.

Native examples distinguish RADKFILE keys from display forms, retain the two separate 阝 keys, apply the two radical stroke corrections without changing raw data, and explain unnamed metadata/empty matches. Picker examples use native callbacks, cleanup, result limits and the actual parts attribute. Generated examples were added to the existing RADKFILE/KANJIDIC2 and names writers; copyright, licences, source hashes, names and data were retained. No upstream data was fetched or regenerated. Compiled behavior after removing comments is identical in all 14 changed SDK files. The original architecture description/tree was moved verbatim into its guide; the completeness check reads the preserved tree there.

Both native demo and builder have Docs/API links, with initial/live language selection checked. The API reference → Japanese reference → native picker return flow passes in all three browser profiles. The two desk hero pictures were refreshed and viewed; other existing pictures were unchanged. All five shared files are byte-identical to the 2026-10-12 pilot.

Validation:
- pnpm docs:check: 59 checked examples, no documentation problems; /tmp/family-03-bushu-docs-check.log. The final test:demo documentation build rechecked the corrected guide examples.
- pnpm docs:make: 18 passed; /tmp/family-03-bushu-generated-docs-final.log.
- pnpm check: 137 passed; /tmp/family-03-bushu-check-final.log.
- pnpm test:readme: 12 native README examples passed; /tmp/family-03-bushu-readme.log.
- pnpm test:package: all seven installed ESM/CommonJS entry imports, pointed files, packing and no docs/pictures in the tarball passed; /tmp/family-03-bushu-package.log.
- pnpm screenshots:readme: 16 pictures, 392 KB within budget; /tmp/family-03-bushu-pictures.log.
- pnpm test:demo: 72 passed, six deliberate profile skips; /tmp/family-03-bushu-test-demo.log. Includes all nine new Docs-language/API return flows.
- Runtime comparison: 14 changed SDK files, zero compiled behavior differences.
- git diff --check and exact shared-file comparisons passed. No assertions were disabled or deadlines changed.

The initial source check required preserving the exact existing npm-description count promise, “253 radicals and their 6,355 kanji”; it is retained with the new job. The guide uses parts rather than a nonexistent chosen attribute, and the native two-argument mount signature.

Viewed eight documentation captures: outputs/03-bushu-docs-<390|1280>-<en|ja>-<light|dark>.png and both updated desk hero images. New Japanese is **needs review**: all ten guides, site pitch/name/entry titles and Docs/API labels. Existing source names/readings and notices remain unchanged. These new 03 commits are local after the earlier push handoff; no new tag, release, publication, deployment or merge occurred.

## Tobiishi

The completed 03 branch is stacked on 02. It supplies 55 documented exports across five entries, eleven paired guides, 71 checked examples and 148 generated/indexed pages. Local search, Markdown twins, llms files and existing API anchors are retained. The README has the approved job/keywords, 3.7 kB badge, provenance and peg-solitaire npm alias; it is 53,127 characters.

Examples use a bounded native three-hole game or short seeded challenges. Documentation explains immutable move/undo behavior, nullable target versus nullable replay failure, the assistance marker, reverse-growth witnesses and shorter general-generator results, exact-length named packs, and solver solved/impossible/limit outcomes. The original architecture tree and paragraph were moved verbatim into their guide. Nine changed SDK files compile identically after comments are removed.

Both native demo and builder have Docs/API links following initial/live language selection. The development server now serves the built docs and both llms files. Browser commands build before starting that server; the browser config includes existing native spec files and the unchanged shared docs checks. The existing explicit Vitest include list now includes both unchanged shared docs/README test files alongside its original tests. No test assertions or deadlines were disabled or relaxed.

The previous API-index browser test retains its per-entry coverage, phone width, real reference signature, npm link and Japanese transition assertions through the new export reference page. Added tests cover initial/live Docs on demo/builder, API → JA reference → native game, and the real server’s Docs/llms endpoints.

Validation:
- pnpm docs:check: 71 examples checked/run, no documentation problems; /tmp/family-03-tobiishi-docs-check-final.log.
- pnpm check: 14 Node tests plus 42 Vitest tests passed, along with lint/types and the five-entry presentation contract; /tmp/family-03-tobiishi-check-final.log.
- pnpm lint after final browser-test changes passed; /tmp/family-03-tobiishi-lint-final.log.
- pnpm test:readme: 19 native examples passed; /tmp/family-03-tobiishi-readme.log.
- pnpm test:package: all five DOM-safe ESM/CommonJS entries, safe server registration, installed classic witness and no docs/pictures shipped passed; /tmp/family-03-tobiishi-package.log.
- pnpm screenshots:readme: 30 pictures, 1016 KB within budget; /tmp/family-03-tobiishi-pictures.log. Updated desk heroes were viewed; cropped phone images were preserved.
- pnpm test:demo: 63 passed, six deliberate documentation profile skips; /tmp/family-03-tobiishi-test-demo-final.log. The documentation build rechecks all 71 examples and emits 148 pages.
- Runtime comparison: nine changed SDK files, zero compiled behavior differences. Exact shared-file comparison and git diff --check passed.

Initial example checking caught a rectangle smaller than the native accepted dimensions; the example now uses a valid 3×3 rectangle. The real-server test initially expected an individual export in the overview llms.txt; the corrected assertions check the overview’s job and legalJumps in llms-full.txt, and the complete suite passes. Port 6901 was checked before the native server run.

Viewed all eight docs captures: outputs/03-tobiishi-docs-<390|1280>-<en|ja>-<light|dark>.png, plus native desk/phone hero views. All five shared files are byte-identical to version 2026-10-12. New Japanese is **needs review**: eleven JA guides, site pitch/name/entry titles and Docs/API navigation. Existing game labels, challenge goals and geometry remain unchanged. These new commits are local after the earlier push handoff; no new tag, release, publication, deployment or merge occurred.

## Jirai

The completed 03 branch is stacked on 02. It supplies 85 documented exports across seven entries, eleven paired guides, 103 checked examples and 212 generated/indexed pages. The README carries the approved job/keywords, 7.8 kB measured badge, provenance and minesweeper npm alias; it is 48,836 characters. The original architecture tree is preserved verbatim in its guide. Local search, Markdown twins, llms files and existing API anchors are provided.

Examples use small bounded native fields, answer-free visible deductions and real optional React imports. Guides explain topology/active cells, protected openings, generation/repair budgets and explicit failures, flags versus proved mines, replay validation, orthogonal version-2 records, UTC daily seeds, models and native/React mounting. Nineteen changed SDK files, including the comment-only React wrapper change, compile identically after comments are removed. No generation, deduction, drawing or React lifecycle implementation changed.

Main and builder Docs/API navigation follows initial and live language selection. The prior API-index browser test retains every-entry coverage, phone fit, real signatures, npm link and Japanese transition through the actual reference page. All six new navigation/return cases pass across this package’s two configured browser profiles. Native preview defaults now consistently use 6902 in the server, browser config and README, within the mandated package port range; the port was checked before use. The browser config includes the unchanged shared docs tests without excluding native tests.

The published source archive already excluded .test.ts files; it now also excludes .test.js development files, keeping the added shared checks and their development-tool imports out of npm. Public source and runtime entries remain shipped. No new workflow job was added, and all five shared files match version 2026-10-12 exactly.

Validation:
- API-only example inventory: 85 checked/run; /tmp/family-03-jirai-api-examples.log.
- pnpm docs:check: 103 examples checked/run, no documentation problems; /tmp/family-03-jirai-docs-check.log.
- pnpm check: 163 passed, including lint/types and the seven-entry presentation contract; /tmp/family-03-jirai-check.log.
- pnpm lint after final navigation test passed; /tmp/family-03-jirai-lint-final.log.
- pnpm test:readme: 15 native examples passed; /tmp/family-03-jirai-readme.log.
- pnpm test:package: installed package runs in Node, DOM/optional entries import safely, existing archive checks pass; /tmp/family-03-jirai-package.log.
- pnpm screenshots:readme: 20 pictures, 1066 KB within budget; /tmp/family-03-jirai-pictures.log. The updated desk heroes were viewed; unchanged cropped phone views were preserved.
- pnpm test:demo: 43 passed, five deliberate profile skips; /tmp/family-03-jirai-test-demo.log. Documentation rebuild rechecks the examples and emits 212 pages.
- Runtime comparison: 19 changed SDK files, zero compiled behavior differences. git diff --check and exact shared-file comparison passed.

Viewed eight documentation captures: outputs/03-jirai-docs-<390|1280>-<en|ja>-<light|dark>.png and both desk heroes. New Japanese is **needs review**: eleven guides, site pitch/name/entry titles and Docs/API wording. Existing game strings, shapes and proof rules remain unchanged. These commits are local after the earlier push handoff; no new tag, release, publication, deployment or merge occurred.

## Gunjin

The completed 03 branch is stacked on 02. It documents 57 public exports across ten entries, with eleven paired guides, 73 checked examples and 162 indexed pages. The approved job/keywords, 12.8 kB measured badge, provenance and stratego-like npm alias are present; README length is 49,763 characters. The full architecture tree/description was moved verbatim into its guide; existing RULES.md and API.md remain preserved and linked.

Native examples perform valid Hasami, Luzhanqi Mini and Salpakan setups/moves, exact pass acknowledgement and ending actions. Guides distinguish authoritative host state, authenticated player views, observer positions, mode-published combat ranks, redacted public replay and structurally checked trusted storage. Public replay comments now precisely allow only ranks the mode publishes; no private setups/IDs are added. All 15 changed SDK files compile identically after comments are removed. Rules, rosters, combat and redaction implementation are unchanged.

The native header retains Rules and places Docs before API. Initial/live language and API reference → Japanese → native-player return checks run under the actual /gunjin/ Pages prefix. The existing reference test retains per-entry coverage, phone fit, real signatures, npm and Japanese navigation assertions through a reference page. Native embed adoption remains deferred; no builder or replacement engine was added.

Validation:
- API inventory: 57 native examples checked/run; /tmp/family-03-gunjin-api-examples.log.
- pnpm docs:check: 73 examples checked/run, no documentation problems; /tmp/family-03-gunjin-docs-check.log.
- pnpm check: 69 passed, lint/types and ten-entry presentation contract green; /tmp/family-03-gunjin-check.log.
- pnpm lint after final navigation tests passed; /tmp/family-03-gunjin-lint-final.log.
- pnpm test:readme: 16 native examples hold; /tmp/family-03-gunjin-readme.log.
- pnpm test:package: all ten installed ESM/CommonJS entries, pointed files and no docs/pictures shipped passed; /tmp/family-03-gunjin-package.log.
- pnpm screenshots:readme: 20 pictures, 1023 KB within budget; /tmp/family-03-gunjin-pictures.log. Updated desk heroes were viewed; unchanged cropped game views were preserved.
- pnpm test:demo: 45 passed, six deliberate profile skips; /tmp/family-03-gunjin-test-demo.log. Rebuild checks all 73 examples and emits 162 pages.
- Runtime comparison: 15 changed SDK files, zero compiled behavior differences. git diff --check and exact comparisons of the five shared 2026-10-12 files passed.

Viewed eight documentation captures: outputs/03-gunjin-docs-<390|1280>-<en|ja>-<light|dark>.png and both updated desk heroes. New Japanese is **needs review**: eleven guides, site pitch/name/entry titles and Docs wording. Existing private/public boundaries and native game labels remain unchanged. These new commits are local after the earlier push handoff; no new tag, release, publication, deployment or merge occurred.

## Karakuri

The completed 03 branch is stacked on 02. It documents 103 public export records across the unchanged six entries, including eight main-entry rule namespaces. The shared generator intentionally exempts namespace groups from per-export examples; 95 direct API examples plus 18 guide examples give 113 checked examples. Eleven paired guides cover all eight games, native bounded search, deterministic physics, controllers, canvas mounting and embeds. Existing detailed per-game/physics/embed documents remain preserved and linked. The site has 246 indexed pages, local search, Markdown twins, llms files and preserved API anchors.

Public physics/level/player comments gain native parameters, returns and concrete small-state examples. All 18 changed SDK files compile identically after comments are removed. No direct game entry aliases, level changes, solver changes or simulation implementation changes were introduced. The original source tree moved verbatim to the architecture guide; the completeness test now reads it there. Level discovery scripts print candidate data for the fixed collections; they were not run, and no levels were regenerated.

The initial inventory caught a pre-existing KARAKURI_STRINGS example importing from /play instead of the actual main export; it now imports the real entry and passes. The localized say example uses the actual game_tube_sort key. Guide checking caught language instead of the native lang option; both corrected language copies pass. The README has the approved job/keywords, 18.8 kB badge, provenance, puzzle-games npm alias and developer docs commands; length is 42,457 characters.

Both native demo and builder have Docs/API links following initial/live language. The physics API reference → Japanese → native canvas return flow passes in all four configured profiles. The shared family template and all five shared docs/README files remain byte-identical to version 2026-10-12. Native physics, pointer/keyboard and all recorded game win/loss tests are retained.

Validation:
- API-only examples: 95 checked/run; /tmp/family-03-karakuri-api-examples-final.log.
- pnpm docs:check: 113 checked examples, no documentation problems; /tmp/family-03-karakuri-docs-check-final.log.
- pnpm docs:make: 20 passed, generated language reference current; /tmp/family-03-karakuri-generated-docs.log.
- pnpm check: 175 passed; /tmp/family-03-karakuri-check.log.
- pnpm lint after final navigation test passed; /tmp/family-03-karakuri-lint-final.log.
- pnpm test:readme: nine native examples passed; /tmp/family-03-karakuri-readme.log.
- pnpm test:package: all six installed ESM/CommonJS entries, pointed files and no docs/pictures shipped passed; /tmp/family-03-karakuri-package.log.
- pnpm screenshots:readme: 20 pictures, 702 KB within budget; /tmp/family-03-karakuri-pictures.log. Updated desk heroes were viewed; cropped phone views were preserved.
- pnpm test:demo: 415 passed, nine deliberate profile skips; /tmp/family-03-karakuri-test-demo.log. Documentation rebuild rechecks the examples and emits 246 pages.
- Runtime comparison: 18 changed SDK files, zero compiled behavior differences. git diff --check and exact shared-file comparisons passed.

Viewed eight docs captures: outputs/03-karakuri-docs-<390|1280>-<en|ja>-<light|dark>.png and both updated desk heroes. New Japanese is **needs review**: eleven JA guides, site pitch/name/entry titles and Docs/API wording. Existing game strings, geometry and input rules remain unchanged. These new commits remain local after the earlier push handoff; no new tag, release, publication, deployment or merge occurred.

## Houseki

The 03 branch is stacked on 02. It documents 327 public records across the unchanged seven entries, including six main-entry native namespaces. The shared generator exempts namespaces from per-export examples. All 321 direct examples and 30 guide examples typecheck and run: 351 checked examples in total. Eleven paired guides cover all five games, fixed-tick input, full-board choices/tools, magnetic floors, nature/weather, stable campaign ids and lessons, replay saves, host UI, troubleshooting, migration and architecture. The complete original architecture material is retained in its linked guide, with relative links adjusted and the completeness test reading the guide. The documentation build emits 696 pages with local search, Markdown twins, llms files and preserved API anchors.

Native API comments supply summaries, parameters, return/absence meanings and real examples. All 39 changed SDK files have equivalent compiled output after comments are removed, normalizing only the separation of the pre-existing MARK_TICKS/REMOVE_TICKS/GRAVITY_TICKS constant declaration. The constant values, public types, namespace imports, content and rules remain intact. Gem Swap's authoritative writer now applies its declaration comments from scripts/gem-swap-content-docs.mjs; applying that comment-only refresh to the existing campaign source exactly reproduces the checked-in source. No campaign data was changed for documentation.

Example validation caught incomplete authored challenges: Falling Triplets needs 2–12 queued triplets; Colour Chains takes the visible cells and requires a complete witness; Stone Collapse dimensions must match its board and it also requires its witness. The final examples use small valid input or the stored proven setup with explicitly supported options, not spreads carrying metadata into strict validators. The guides retain separate engine proof and human-review status. The 684-challenge count and original detailed design/coverage documents are preserved.

All four native pages have Docs before API, following both initial and live English/Japanese selection. Tools initializes this link on first render. The native Docs/API pills have fixed widths so language changes retain board position, verified by witnessed Shizen/Arashi campaign tests and the existing five-player geometry review at 360/390/828/1024/1280 widths. Existing API coverage still checks entry inventory/anchors and follows an individual reference; its title assertion targets the heading after the accessible skip link. No builder or public mount API was added; native embedding remains deferred.

The README has the approved job/keywords, alias recipe, documentation links, provenance and 179.1 kB bundle badge. Its developer commands describe the shared generator; final README length is 47,399 characters. The original picture recipe opened Falling Triplets despite the README describing Gem Swap; it now reproduces the promised English desk and Japanese phone Gem Swap views. All four hero pictures were refreshed and viewed; unchanged component crops were retained. Shared family files and all five shared docs/README files remain unchanged at version 2026-10-12. The Pages workflow gains one docs build step and no job.

Validation:
- pnpm docs:check: 351 examples typecheck and run, no documentation problems; /tmp/family-03-houseki-docs-check.log.
- pnpm docs:site: 696 pages/search index; /tmp/family-03-houseki-docs-site.log.
- pnpm check: 270 passed across 32 files, including deterministic campaign regeneration; /tmp/family-03-houseki-check-final.log.
- Final presentation/architecture/docs/README checks: 35 passed; /tmp/family-03-houseki-presentation.log.
- Final pnpm lint and git diff --check passed; /tmp/family-03-houseki-lint-final.log.
- pnpm test:readme: all 12 TypeScript blocks typecheck and native runnable examples passed; /tmp/family-03-houseki-readme.log.
- pnpm test:package: packed package installs, all seven ESM entries work, all pointed files included and no docs/pictures shipped; /tmp/family-03-houseki-package.log.
- pnpm screenshots:readme: 20 pictures, 1302 KB within budget; /tmp/family-03-houseki-pictures.log. The four new hero views were inspected; component crops restored to their original bytes.
- pnpm test:demo: 121 passed, three intentional documentation profile skips, plus all six review scripts passed; /tmp/family-03-houseki-demo-final.log.
- Runtime comparison: 39 SDK files, zero behavior differences after the equivalent timing-constant declaration normalization. Authoritative Gem Swap comment refresh exact-match check passed. Five shared file comparisons and git diff --check passed.

Viewed eight docs captures: outputs/03-houseki-docs-<390|1280>-<en|ja>-<light|dark>.png, plus four refreshed README heroes. Added Japanese is **needs review**: eleven guides, docs site metadata and native Docs wording. Existing game strings and content stay intact. The new branch commits remain local after the earlier push handoff; no new push, tag, release, publication, deployment or merge occurred.

## address-plus

The 03 branch is stacked on the completed 12 builder/download branch. It documents 259 unique public records across the unchanged eight entry points; the native checker still covers all 347 entry-point export occurrences, including aliases. Twelve paired guides cover parsing and dynamic keys, optional countries, postal regions, validation findings, postal formatting, comparison/cleaning, batches and downloads, native form fields/embeds, architecture, troubleshooting and parse-address migration. The shared check has 291 checked examples and the build emits 564 pages with local search, Markdown twins, llms files and preserved API anchors. Browser-dependent field recipes are typechecked no-run examples.

Existing TSDoc summaries, parameter/return meanings and every expected-answer comment were preserved. Examples now import actual package entries and log their results. Fifty-five nested parse uses gained explicit null guards before formatting/comparison/validation rather than non-null casts. The existing snake-case option changes runtime field names while the static interface stays camel-case; its example uses explicit reflected access and the guides describe that boundary. The native expected-answer evaluator now recognizes real import bindings and the final logged value, preserving both answer checking and published-declaration checking under docs:legacy-check. The complete pnpm check retains both this native check and the shared strict check.

All 92 changed SDK source files have identical compiled JavaScript after comments are removed. No parser, formatter, validator, data values, country isolation, field behavior or public entry changed. The JP/country writers own generated table documentation too: a table-docs helper supplies import-aware examples and their --docs-only paths refresh comments offline. Nine stored table files were refreshed without changing dates, ordering or source data. Both writer refreshes were rerun and reported zero changes. Normal upstream generation remains unchanged in scope; no table sources were downloaded.

The README retains its original country recipes, component tables, postal reference, batch details, family block, contributing/release instructions and migration material in the required section order. It is 62,263 characters, has its approved job/keywords, 104.9 kB root size and provenance badges, address-parser npm alias, documentation links and native element framework recipes. Country/field size claims now use measured bundles; the all-country field is distinct from isolated country modules. Four feature subjects were added to the picture recipe/README alongside refreshed heroes, meeting the shared README standard. The phone hero now shows the described Japanese parse panel and full native result rather than cropping off its input below a long header. All twelve final pictures were viewed.

Native tools and builder have Docs/API links following initial and live language. The old browser reference test preserves the full function/example inventory using the native source model, checks real Japanese input/output and root signatures on individual pages, switches to Japanese and returns to the native parse panel. It does not add a new product endpoint. Builder/iframe entered-value privacy remains distinct from the main tools’ intentional Copy link of panel input; the guides explain both accurately. Existing corpus, country, field privacy/form, bulk Markdown and SQL/SQLite checks remain intact.

The shared files remain byte-identical to version 2026-10-12. Prettier ignores only those shared masters so their hash-checked text is not reformatted; changed native files still pass the full existing formatter. The Pages workflow adds one docs build step and no job. Contributor commands now describe shared docs checks, retained answer/declaration checks, the complete Markdown API and offline comment refresh.

Validation:
- API-only imported examples: 259 typechecked/run; /tmp/family-03-address-plus-api-examples.log.
- pnpm docs:check: 291 examples typechecked/run, no docs problems; /tmp/family-03-address-plus-docs-check.log.
- pnpm docs:make: full original docs/api.md regenerated; /tmp/family-03-address-plus-docs-make.log.
- pnpm check: green, 4,751 tests passed; one existing skip and 22 existing todos. Includes lint/Prettier, types, shared docs, all 347 native expected-answer/declaration occurrences, tsd, all 114 JSON schemas and package checks; /tmp/family-03-address-plus-check-final.log.
- pnpm test:package inside check: 29 installed-package checks, all eight ESM/CommonJS entries, node16/bundler types and JP/AU/GB/FR/DE table isolation passed.
- Final pnpm lint/Prettier: passed; /tmp/family-03-address-plus-lint-final.log.
- Native reference integration on phone/desk: two passed; /tmp/family-03-address-plus-reference-browser.log.
- pnpm test:demo: 123 passed, three intentional documentation profile skips; /tmp/family-03-address-plus-demo-final.log.
- pnpm screenshots:readme: twelve pictures, 680 KB within budget; /tmp/family-03-address-plus-pictures.log. Every final hero/feature picture viewed.
- Runtime comparison: 92 SDK files, zero compiled behavior changes. Authoritative refreshes idempotent; shared five-file comparisons and git diff --check passed.

The first broad verification overlapped two tsup builds and its docs check saw a cleaned dist; that invalid run was replaced by the green sequential full source gate. The browser test was adapted to the new anchor index, including checking the signature on its reference page and using the native source model for the original full example inventory. No assertion was removed from the intended coverage and no product API was added to support the test.

Viewed eight documentation captures: outputs/03-address-plus-docs-<390|1280>-<en|ja>-<light|dark>.png. Added Japanese is **needs review**: twelve guides, docs metadata and native Docs wording. New commits remain local after the earlier push handoff; no new push, tag, release, publication, deployment or merge occurred.

## Kuni

The 03 branch is stacked on the completed 12 card-colour/capital branch. The complete site documents 871 public records across 410 entries: the original ten core/card entries plus all 400 existing country-specific subdivision/fact modules. Explicit names point to the same files as the retained wildcard paths. The original ordered import/require conditions and their distinct ESM/CommonJS declaration files stay intact; a trailing default fallback points to the existing ESM target so the unchanged generator can index nested export conditions. Installed-package checks verify every named ESM/CommonJS path and NodeNext types.

Twelve paired guides include an authoritative 400-path resource catalogue, current code/name distinctions, full subdivision codes/levels/ambiguity, static/on-demand loading, dated country/subdivision facts, groupings/historical codes, card/asset composition, local downloads, architecture, troubleshooting and migration. The original architecture tree and generation explanation moved intact to the linked guide, with its completeness check reading it there. The entry-completeness check follows the catalogue without dropping any public entry. Existing source/licence, Japanese gaps, disagreements, facts, groupings and withdrawn-code references remain linked. The shared check reports 889 checked examples; browser-only card recipes remain typed no-run examples. The build emits 2,592 pages, local search, Markdown twins, llms files and preserved API anchors.

All 413 changed SDK source files have identical compiled JavaScript after comments are removed. Source values, source dates, data ordering and current/historical code behavior are unchanged. The authoritative data writer supplies logged generated examples through scripts/data-docs.ts and has an offline --docs-only path; it refreshed 402 generated files and a repeat reported zero changes. Normal generation continues to apply the same documentation transform when writing its data/entry files. No snapshots were fetched or regenerated for this documentation work. Existing inline expected values were retained; the native tsdoc test evaluator now checks the value passed to console.log and erases type-only imports before executing examples. All original value assertions remain, extended to all named resources.

The README has the approved title/description, countries npm alias, 21.4 kB root/provenance badges, documentation links and measured entry sizes. Its original API tables, component details, language/data/licence explanations and family block remain. The two previously short element rows now have matching table cells, the element helper readCardColors is named and two real recipes complete the Examples section. Final length is 48,046 characters. Four feature picture subjects (find/list/code/search) were added beside refreshed heroes, so the shared README standard is met. Every final picture and all eight docs views were inspected. Picture descriptions match native code search and the visible phone view.

Native demo and builder link Docs before API and follow initial/live English/Japanese. The preserved API test verifies entries/anchors, actual Holland/Punjab examples, dated Japan population, null return meaning, Grouping.asOf, the family footer and the installation command on its proper documentation page. The new WebKit builder navigation initially waited for a real asset; it now uses the same existing offline Hata/Chizu fixture as the native embed suite. That fixture was extracted without changing its behavior and all six initial/live navigation cases pass. Original card composition, colours/capital controls, native views, local downloads and SQLite checks remain intact. The Pages workflow adds one docs build step and no job; all five shared docs/README files remain identical to version 2026-10-12.

Validation:
- pnpm docs:check: 889 checked examples, no documentation problems; /tmp/family-03-kuni-docs-check.log.
- pnpm docs:make: catalogue of 400 fixed paths and all 12 native document/string checks passed; /tmp/family-03-kuni-docs-make.log.
- pnpm check: all 674 checks passed in 16 files, including native original expected-value tests and shared docs/README checks; /tmp/family-03-kuni-check-final.log.
- Installed package inside check: 1,649 packed files, 935 KB; every pointed file, all core/card/country ESM/CommonJS imports and NodeNext ESM/CommonJS types passed. No docs/pictures/data-sources or runtime dependencies shipped.
- Final pnpm lint and git diff --check passed; /tmp/family-03-kuni-lint-final.log.
- Native Docs navigation: six passed, including WebKit builder; /tmp/family-03-kuni-navigation.log.
- pnpm screenshots:readme: twelve pictures, 461 KB within budget; /tmp/family-03-kuni-pictures.log. All final pictures viewed.
- pnpm test:demo: 141 passed, six intentional documentation profile skips; /tmp/family-03-kuni-demo-final.log.
- Runtime comparison: 413 SDK files, zero compiled behavior differences. Authoritative comment refresh idempotent and five shared file comparisons passed.

Viewed eight docs captures: outputs/03-kuni-docs-<390|1280>-<en|ja>-<light|dark>.png. Added Japanese is **needs review**: twelve guides (including the generated resource catalogue), site pitch/name/resource titles and Docs/API wording. New branch commits remain local after the earlier push handoff; no new push, tag, release, publication, deployment or merge occurred.

## Hata

The approved title and keywords, measured 3.5 kB root/provenance badges, flags npm alias, Docs/Getting started links and API documentation are present. There are 910 explicit entries: six core entries and 904 existing drawing modules (primary flags, adapted frames and variants). These names point to the same existing ESM modules; wildcard flag/raw SVG paths and manifest.json remain available. The primary place-code count remains distinct from drawing-module count.

Twelve paired guides cover starting, codes/names, dynamic loading, whole/cropped framing, source/licence provenance, explicit variants, element attributes/events, gallery/builder/downloads, complete architecture, troubleshooting, migration and a generated full drawing catalogue. Original architecture text and HTML image recipes are preserved in linked guides. Native README completeness checks follow those documents without dropping any export or source-tree assertion. The original data/provenance/licence/decision/framing/variant references remain complete. README is under 64,000 characters with six recipes in Examples and twelve native pictures (545 KB); all pictures inspected.

The data writer owns generated examples through scripts/data-docs.ts. Its offline --docs-only refresh changes comments only and normal generation uses the same transform; 905 generated files were refreshed, a repeat reported zero changes. All 912 changed SDK source files compile to identical JavaScript with comments removed. No SVG drawing, framing metadata, licence decision, upstream snapshot or source value changed. Native check-docs still examines all 910 entry declarations and type-checks its original 37 representative examples. The shared check type-checks 3,668 examples, retaining DOM recipes as no-run and running applicable examples. The new nullable framing recipe guards the native null result explicitly in both languages.

Native gallery/builder Docs links follow initial and live English/Japanese. Original API browser coverage follows preserved anchors to actual reference examples and provenance; installation text is checked on the docs overview. Original gallery, quiz, download, frame, variant, embed and builder suites remain. One docs build step added to Pages, no new job. All five shared files remain byte-identical to version 2026-10-12. The size gate measures all 910 entries in a separate 15-second documentation test project; native deadlines remain unchanged.

Validation so far:
- pnpm docs:make: all 14 native documentation/string checks passed, full catalogue generated; /tmp/family-03-hata-docs-make.log.
- pnpm check: 111 tests in 13 files passed, native docs and full package gate green; /tmp/family-03-hata-check.log.
- Package: 2,735 files, 7.82 MB packed, every 2,287 pointed file present; all entries, assets, manifest.json, Node 24 require and NodeNext types passed. No docs/pictures/source inputs shipped.
- Shared docs check: 3,668 TypeScript examples checked, applicable examples run, no documentation problem; /tmp/family-03-hata-docs-check-final.log. An earlier framing recipe failed typing and was corrected, retaining native nullable behavior.
- pnpm screenshots:readme: 12 pictures, 545 KB, within budgets; /tmp/family-03-hata-pictures.log. All light/dark pictures viewed, descriptions match crops.
- Runtime comparison: 912 SDK files, no compiled behavior changes. Comment refresh idempotent: /tmp/family-03-hata-generated-docs.log.
- git diff --check and shared README lint passed. Initial generator typing and default size-test deadline failures were resolved and the full source gate rerun green.

Final browser gate: 158 passed; ten intentional skips. All eight overview captures and four default-reference captures inspected. Japanese is **needs review**: twelve guides including catalogue, site pitch/name/resource titles and gallery/builder Docs/API words. API source prose remains English under translated reference headings. New commits remain local; no new push, tag, merge, publication, release or deployment.

### Shared navigation correction before completion

The first full build had 1.9 GB of documentation because every page repeated 904 drawing entries in its sidebar. That exceeds GitHub Pages' documented 1 GB published-site limit (https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits); the exhaustive phone walk also hit the original four-minute deadline, with 154 other browser cases passing and ten deliberate skips. No oversized build is marked complete or published.

The fix belongs to the shared generator, version 2026-10-13, verified first on Hikidashi (430 source tests, 114 examples, 99 browser cases and six skips). Sibling groups of at least 50 resources stay complete on the entry index; core navigation and the currently viewed resource remain in the sidebar. Every entry/export page, search record and legacy anchor is retained. Two focused shared checks cover multiple large groups, selected resource and ordinary entry lists. Master and adopter copies are synchronized from the pilot, not patched independently. Hata adds a native full-site byte-budget assertion below 900 MB to retain headroom under the Pages ceiling. Updated full Hata source gate: 113 passed, package gate green; all 3,668 examples pass again. Compact build/browser verification is pending, then prior adopters will receive the same verified files and their full gates one at a time.

The final shared revision also fixes default-import syntax in HTML/Markdown and the native local name in default definitions, covered by a TypeScript syntax test and Hata’s actual browser reference page. The final full source/package gate passes 114 checks. The exhaustive page walk now budgets by page count while retaining every page and assertion; final browser gate is green.

The complete 5,538-page phone walk passes under the page-count deadline (4.8 minutes), and every internal link passes (2.5 seconds versus the oversized build's 1.7 minutes). The default-import/active-navigation browser checks initially used a hidden mobile link; their fixture now opens the Contents control's direct summary, and all three focused profiles pass. The entire browser gate is rerunning to record one green final run after that test-only correction. The implementation is committed and clean: 721848fcb260368344d5b0b769de962f48df2232 (API) and 7534c7ff4e7e62448019a4bcb3b8a702805f7886 (site).

Final pnpm test:demo is green: 158 passed, ten intentional skips, exhaustive 5,538-page walk passed in 4.8 minutes; /tmp/family-03-hata-demo-green.log. Final README 52,990 characters, full published site 204,883,352 bytes. All final overview and default-reference views were inspected. Worktree clean; Japanese remains needs review.

## REST-in-Pieces

The final package supplies 57 documented exports across 12 entry points, 12 English and 12 Japanese guides, 83 checked TypeScript examples and 168 generated pages. The workspace configuration reads the repository README and guides while retaining the API package's native source/build layout. Generated OpenAPI types link to their tracked writer; the build adds their documentation without changing declaration tokens. All SDK edits preserve compiled JavaScript after comments are removed.

The native playground and embed builder link to the matching language's docs. The Pages build retains fixtures, static API files, API reference, collections and native browser behavior, then copies the generated documentation into the published tree. Native TypeScript 7 remains the compiler; a separate development-only TypeScript API reader supports documentation parsing. Pagefind's platform binaries are installed through its existing optional dependencies.

The README retains its original material, moving the longer architecture section to docs/architecture.md. Existing artwork is preserved under docs/art. Twelve refreshed light/dark desktop and phone pictures total 537,728 bytes and meet all picture budgets; all twelve and the eight docs width/language/theme captures were viewed. The repository has a reproducible picture command and contributor instructions.

Validation so far:
- pnpm check: green; 814 API tests and 142 web tests, native lint/type checking/build and installed-package smoke. /tmp/family-03-rest-check-final.log.
- pnpm docs:check: green, 83 TypeScript examples checked, including explicit no-run browser/framework examples. /tmp/family-03-rest-docs-check-second.log.
- pnpm docs:site: green, 168 pages and local search. /tmp/family-03-rest-docs-site-final.log.
- pnpm test:readme: green, nine TypeScript blocks checked and seven examples run. /tmp/family-03-rest-readme-final.log.
- Complete browser gate: green, 68 native browser cases and 15 shared docs cases, with six deliberate shared profile skips. /tmp/family-03-rest-test-demo-complete.log. The final source/package gate also passed after the compact-navigation accessibility fix: /tmp/family-03-rest-check-complete.log. Initial discovery, title/type badge and translated return-label assertion failures are retained in the initial, second and focused browser logs. The unchanged session case passed on its focused rerun and the full final suite.

The final proof checks all twelve changed SDK files against the branch base with the same compiler options: compiled JavaScript is identical. All five shared-file SHA-256 hashes match the verified master. The README is 61,951 characters. The complete Pages artifact contains 68,676 files and 281,903,315 bytes, below the 900 MiB guard.

Early checks caught an invalid Person.id example, a non-native RestTable constructor example and the exact provenance badge contract. These were fixed before the green source/docs/README checks. Japanese is **needs review**: all twelve guides, site configuration, native Docs labels and builder wording. No version, published package, release, deployment or remote setting changed.

## Review before release

New Japanese is **needs review**: each adopted package’s docs/site.json JA values, every new docs/guides/ja page, navigation labels and any compatibility fallback wording. For Korokoro this includes all ten translated guides, the entry titles and pitch, Docs/API reference labels and the single-die link. French is ticket 06 and has not begun. GitHub descriptions/topics and social-preview uploads remain outside this local rollout, requiring the owner’s go; no external settings have been changed.

Documentation rollout complete. Tickets 14 and 06 remain unclaimed.


## Shared navigation refresh verification

| Package | State | Latest commit | Checks |
| --- | --- | --- | --- |
| hikidashi | done and green | `91576bceb26c5a0d59d6d1b9fe68867f08f314ce` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm check (standalone Node measurement) green; pnpm docs:check (standalone Node measurement) green; pnpm test:demo (standalone Node measurement) green; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| hata | done and green | `f3e4434991699ba16a5fa53faeb0198fe2cd9452` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm check (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| korokoro | done and green | `4880132a5f189ef48066ab3a5d279319a259ebd6` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) green;  Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| kyuubu | done and green | `8ffaf7d3f2171aebc46e4b688f5bba9111b98122` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) green;  Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| hitotsu | done and green | `bc4e8f3beca44ac0477a822e21c14b6085c97be0` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) green;  Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| toranpu | done and green | `e7e2de1ee65a4c2459887cf67c35b9da8db31319` | pnpm check FAILED; pnpm size --write green; pnpm check (retry) green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) FAILED; pnpm check (diagnostics removed; final standalone Node measurement) green; Final canonical full source gate: 527 passed using repository Node 24.15.0 / zlib 1.2.12. Earlier sweep failures were caused by inherited workspace Node 24.14.1 / zlib 1.3.1-e00f703; gzipping identical saved bundles confirmed both measured values. SDK, recorded sizes and tolerance unchanged; failed and diagnostic logs retained.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| tane | done and green | `fed670e6bd0412fb1df31243707437b7cbb6e97f` | pnpm check FAILED; isolated shared size test green; pnpm check (retry) green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) FAILED; pnpm check (diagnostics removed; final standalone Node measurement) green; Final canonical full source gate: 210 passed using repository Node 24.15.0 / zlib 1.2.12. Earlier sweep failures were caused by inherited workspace Node 24.14.1 / zlib 1.3.1-e00f703; gzipping identical saved bundles confirmed both measured values. SDK, recorded sizes and tolerance unchanged; failed and diagnostic logs retained.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| narabe | done and green | `84f482bd16c6f4ff427dd3cf4c97020ded73805b` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) green;  Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| tenka | done and green | `0f185e620a81d01a56f0d756ef4410c9ebab8461` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) green;  Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| kumimoji | done and green | `c24c16af38de2ffa221e1c9531cfe4809d5acf48` | pnpm check FAILED; pnpm check (one size-measurement retry) FAILED; complete serial diagnostic suite green; pnpm check (ordered projects) green; pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) FAILED; pnpm check (one unchanged full-source retry) FAILED; pnpm test (temporary bundle-output diagnostic; subsequently removed) green; pnpm check (original native setup restored; canonical shared test) green; Final canonical full source gate: 225 passed using repository Node 24.15.0 / zlib 1.2.12. Earlier sweep failures were caused by inherited workspace Node 24.14.1 / zlib 1.3.1-e00f703; gzipping identical saved bundles confirmed both measured values. SDK, recorded sizes and tolerance unchanged; failed and diagnostic logs retained. Original native setup restored; temporary test ordering removed.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| tsunagi | done and green | `f9cd6f5b75b5fff88c2b0b25968239aae37dbee6` | pnpm check FAILED; pnpm check (one size-measurement retry) FAILED; pnpm check (ordered projects) green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (canonical test; repository runtime; original native setup) green; pnpm check (workspace runtime run stopped after Node/zlib mismatch confirmed) FAILED; Final canonical full source gate: 484 passed using repository Node 24.15.0 / zlib 1.2.12. Earlier sweep failures were caused by inherited workspace Node 24.14.1 / zlib 1.3.1-e00f703; gzipping identical saved bundles confirmed both measured values. SDK, recorded sizes and tolerance unchanged; failed and diagnostic logs retained. Original native setup restored; temporary test ordering removed.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| jarajara | done and green | `32d2143bbbf5bb6c92b12a73da7b4ff3752c2151` | pnpm check FAILED; pnpm check (one size-measurement retry) FAILED; pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; pnpm check (standalone Node size measurement) green; Concurrent size assertion failed twice. Native discovery/deadlines remain unchanged, followed by unchanged documentation assertions in an ordered project; all 250 source checks and remaining gates pass. No SDK, size metadata or tolerance change. Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| suido | done and green | `f0ca9ecb2a02bc5f2656c3afa37abc719ecb5f4b` | pnpm check FAILED; pnpm check (one size-measurement retry) FAILED; pnpm check (native then documentation projects) FAILED; pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green; Earlier transformed-runner measurements failed, including the ordered-project diagnostic. Final canonical test uses the unchanged production measurement function in standalone Node, and all source and remaining gates pass. Temporary config removed; no SDK, metadata or tolerance change.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| domino | done and green | `4cfb2a55901887aa8b212e3444d78e29a1307b7e` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| kotoba | done and green | `5d177c6e797ab7f9bb7fe230fad8e446098927c5` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| sugoroku | done and green | `eccf790642d583d8058d382460837bde7ea3783c` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| kazu | done and green | `b61570606df95da532fddc40d7f245bc63550dab` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| meikyuu | done and green | `20ef9fee3d6404a66833cc4ed955f489b75913bd` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| chizu | done and green | `d1e696174f23b3ca5d675fca5b1badfba41d91b6` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| bushu | done and green | `2a7251429795381795318089d05f20826e225a18` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| tobiishi | done and green | `d0a12a5b3e033e7934a9e06f89e1242dd784cea3` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| jirai | done and green | `c1abfda430709b56ab3b70d587437e6d39e0dd9d` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| gunjin | done and green | `5a9e5434379a29ce1eb528e789a3aea90b877459` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| karakuri | done and green | `0f09a3eb5f1531da3b7bfbfc6fd9def2422fece4` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| houseki | done and green | `4dc37c2a4b56d1646163ec251367e76728359978` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:readme (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| address-plus | done and green | `0a472cdc349d449c2cb617d42fca1744ff0fc302` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |
| kuni | done and green | `3d5cf81120036d0d76aea92da402dd1dc58d5dfc` | pnpm check (standalone Node size measurement) green; pnpm docs:check (standalone Node size measurement) green; pnpm test:demo (standalone Node size measurement) green; pnpm test:package (standalone Node size measurement) green;  Sweep commands use the repository login-shell environment (Node 24.15.0, zlib 1.2.12), matching existing size metadata. Final shared test calls the unchanged measurement function in standalone Node, matching the size CLI. SDK, recorded sizes and tolerance are unchanged.; static SHA-256 `e1fc99757c7e5585d5f2e7ac9c965163e608fc5bc1b52db7c2c618682b944d09` |

Detailed log paths: work/docs-shared-2026-10-13-results.json in the task workspace. Previous package notes retain the original validation counts; this table records new gates after the shared navigation fix.

## Workspace-support verification

| Package | State | Latest commit | Checks |
| --- | --- | --- | --- |
| hikidashi | done and green | `7a28caf6b0c64dde25f59366395d93aa48e418e5` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; 435 source tests, 114 checked examples, 99 browser cases with six intended skips; real workspace/type-only/Node-target fixtures and README owner/URL regressions passed. TypeScript 7 uses a separate docs-only JS API reader; native compiler and example checking are preserved. All pilot gates rerun green. |
| rest-in-pieces | done and green | `d02baaddbd03c2d8ee9500374b3cdefc49ef4a08` | pnpm check green; pnpm test:demo green; pnpm docs:check green; pnpm docs:site green; pnpm test:readme green; 814 API and 142 web tests; installed-package gate included in pnpm check; 83 checked examples; 168 docs pages; 68 native and 15 shared browser cases passed, six deliberate shared profile skips. Twelve SDK files preserve compiled behavior. Five shared hashes match master. Complete Pages artifact 281,903,315 bytes. Japanese needs review. |
| korokoro | done and green | `c6fadaf2e405387e2f1da1863b7ed662355ca9a5` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| kyuubu | done and green | `ca5bc55754cb75cfa1c5c40d7700613b8dc26059` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| hitotsu | done and green | `230856a5aaf75901e85b391a18c6a3b7970885d7` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| toranpu | done and green | `83d69a341a43e63ce685d486b9fd662cf8bd9726` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| tane | done and green | `01be5be9c03c67a625985bbabec5b0a2fc5a95a9` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| narabe | done and green | `8bbb40f444699e0ae6553298b31ec355f0019490` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| tenka | done and green | `7caf9d8f8aa59e3143c5b98e73d0bfc20894de6b` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| kumimoji | done and green | `e167f6425ddddbf210002551a7b2ac7c23392596` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| tsunagi | done and green | `b489c0c3880b6e66c0893031d42806f1d4a87ded` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| jarajara | done and green | `3661376b5f2041632277a3f3b1c5ae2ac289bb4c` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| suido | done and green | `f6e153c415c0bc9a8bbc083ccbbf6e97089e3343` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| domino | done and green | `5551384d0d7dc9619ed6d6638e73056977554c57` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| kotoba | done and green | `e67d97ecdc2bfe3ffc592bab8e6acc66c3668c36` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| sugoroku | done and green | `df6d59c84a5ba90de0ab6798403d126524c735e9` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| kazu | done and green | `1577edc8d716cc7c9ee027d337027b751ee90b36` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| meikyuu | done and green | `8bee40123c985a42c60a9a72e32cb9fffa7bf489` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| chizu | done and green | `96c616b92cb9144321cb622f68f059c341d354e6` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| bushu | done and green | `08fcc2d6b4969305adea7b3dff7a0a8c4e86b4fa` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| tobiishi | done and green | `ec58122d66a69101cf9e65422abdcaa80c2f1732` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| jirai | done and green | `c0013b80cd952366ec5df435dddbfef4066fbf53` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| gunjin | done and green | `3bad00abf3e022f97b41a8e5c5062b8ab7ec229e` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| karakuri | done and green | `3744dbf4fdb83ea83556136c4575e872672858b0` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| houseki | done and green | `1f4439ab2d0cc091c6283965f2147e9279caa5b4` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:readme green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| address-plus | done and green | `89c5b0c7b151ab4c21e94a44d94f77f11841bb6f` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| kuni | done and green | `dc8c039fdd3d2683f3d312dc447868edd393bef6` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |
| hata | done and green | `31f657c03634606baa117099846379501ae39b76` | pnpm check green; pnpm docs:check green; pnpm test:demo green; pnpm test:package green; All required gates passed after copying the five shared files; SDK behavior and recorded bundle sizes are unchanged. |

The earlier navigation audit above records the verified 2026-10-13 baseline. This table records the subsequent shared workspace support. Each package table row names the version actually adopted.