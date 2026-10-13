# 03 — Documentation-site rollout

Status: in progress. Packages are completed one at a time on `codex/03-docs-site-rollout`, stacked on 12 where that package adopted 12 and otherwise on 02. Nothing pushed, tagged, published, merged or changed in GitHub settings. Ticket 03 remains open until the whole family has adopted the site.

## Package state

| Package | State | Branch / last commit | Evidence |
| --- | --- | --- | --- |
| korokoro | done and green | codex/03-docs-site-rollout / `2797ff2dacb71c399136eb963ba14d42ec606017` | 248 exports; 10 EN + 10 JA guides; 278 checked examples; 534 generated pages. |
| kyuubu | done and green | codex/03-docs-site-rollout / `617c12809edb27e37d0fc0193a0eee2a24685064` | 278 exports; 10 EN + 10 JA guides; 294 checked examples; 604 generated pages. |
| hitotsu | done and green | codex/03-docs-site-rollout / `eb2d0d1a110aa49057cd39d3fb9d2ba204a95bbb` | 113 exports; 10 EN + 10 JA guides; 127 checked examples; 262 generated pages. |
| toranpu | done and green | codex/03-docs-site-rollout / `25abc21aa53c572fda921aac396bcbc5c096b946` | 616 exports; 10 EN + 10 JA guides; 623 checked examples; 1312 generated pages. |
| tane | done and green | codex/03-docs-site-rollout / `56d9f747c9dca19ef15d0fec205df6c2fee6ce41` | 74 exports; 10 EN + 10 JA guides; 90 checked examples; 182 generated pages. |
| narabe | done and green | codex/03-docs-site-rollout / `bbb302db05b9873ef71f62ff40d43b54c10b11e7` | 243 exports; 10 EN + 10 JA guides; 259 checked examples; 524 generated pages. |
| tenka | done and green | codex/03-docs-site-rollout / `6bb81fc8395cd298eb4cdea612ed44e9847d449f` | 164 exports; 10 EN + 10 JA guides; 180 checked examples; 368 generated pages. |
| kumimoji | done and green | codex/03-docs-site-rollout / `bc300b06f772b229fec020a13b937aebd17d0e38` | 210 exports; 10 EN + 10 JA guides; 224 checked examples; 458 generated pages. |
| tsunagi | done and green | codex/03-docs-site-rollout / `17356dd91ce06d44cfa1b48f0f10c895795658dd` | 261 exports; 10 EN + 10 JA guides; 277 checked examples; 598 generated pages. |
| jarajara | done and green | codex/03-docs-site-rollout / `3d453ca8f333057b4d9eb8fbc99876003a45ab58` | 232 exports; 10 EN + 10 JA guides; 246 checked examples; 510 generated pages. |
| suido | done and green | codex/03-docs-site-rollout / `a7016c602501378b3fd6530a3924629827051ce6` | 243 exports; 10 EN + 10 JA guides; 257 checked examples; 562 generated pages. |
| domino | done and green | codex/03-docs-site-rollout / `7ce339e6be1ecb485becebde895c72447633fff5` | 87 exports; 10 EN + 10 JA guides; 101 checked examples; 206 generated pages. |
| kotoba | done and green | codex/03-docs-site-rollout / `ba6ed4c75678049bf824d437b374936aaf7bfd81` | 96 exports; 10 EN + 10 JA guides; 110 checked examples; 246 generated pages. |
| sugoroku | done and green | codex/03-docs-site-rollout / `432b18be76f9801251dcb130e7b36ba9a63106f3` | 179 exports; 10 EN + 10 JA guides; 195 checked examples; 394 generated pages. |
| kazu | done and green | codex/03-docs-site-rollout / `9dd8bf24e18932bc2b511f94042fecc64dafeea6` | 558 exports; 10 EN + 10 JA guides; 572 checked examples; 1224 generated pages. |
| meikyuu | done and green | codex/03-docs-site-rollout / `d0495fdee6612b6bd453c99fa76aceb50afc377e` | 356 exports; 10 EN + 10 JA guides; 372 checked examples; 770 generated pages. |
| hikidashi | done and green | codex/03-docs-site-rollout / `71bc8e02cfdaa8bd98ee8ad66d236895a641b876` | 56 exports; 11 EN + 11 JA guides; 114 checked examples; 158 generated pages. Complete browser gate: 99 passed, six deliberate profile skips. |
| chizu | not started | — / `—` | Queued in approved rollout-table order. |
| bushu | not started | — / `—` | Queued in approved rollout-table order. |
| tobiishi | not started | — / `—` | Queued in approved rollout-table order. |
| jirai | not started | — / `—` | Queued in approved rollout-table order. |
| gunjin | not started | — / `—` | Queued in approved rollout-table order. |
| karakuri | not started | — / `—` | Queued in approved rollout-table order. |
| houseki | not started | — / `—` | Queued in approved rollout-table order. |
| address-plus | not started | — / `—` | Queued in approved rollout-table order. |
| kuni | not started | — / `—` | Queued in approved rollout-table order. |
| hata | not started | — / `—` | Queued in approved rollout-table order. |
| rest-in-pieces | not started | — / `—` | Queued in approved rollout-table order. |

## Shared files

All participating 03 worktrees use byte-identical copies of the synchronized master. The 2026-10-12 shared revision changes the search check to select the exact export path; the generator changes only its version marker.
- Generator version: `2026-10-12`; `scripts/docs-site.mjs` SHA-256 `b77b24e1b3ea74e1ca7d3d86a84ac7100401658b4101ceb5dfb8324d9d94fed8`.
- Browser test SHA-256 `ac9b9cc9708f720c91a7cf3faa302fede6fbde5468d1cf5255078b46ba665060`.
- Static test SHA-256 `f7919a19f214ad147317d0a518db05c9da024910e7950f549e0f529e8f2c1b67`.
- Shared README lint SHA-256 `1fc9a6aa5e898c698cfb0c7a64f8898f68286a22b44376f77282358950cf0a6f`; README test SHA-256 `ec249db46c0a0a2f89a934f66dbadc87a1002bbbfd29f0491aa76ec29d85530c`.

## Shared search-test correction

The shared browser test found the right search index but clicked the first title containing an export name. Searching CELL could select CELL_EMPTY and fail the expected CELL page address. The fix selects the result whose href ends in the exact export filename, preserving the same visibility, click and language assertions. A temporary candidate passed English/Japanese in all three profiles before application.

The shared static check documents the change protocol: update every participating repository together with a new DOCS_SITE_VERSION and hashes. Version 2026-10-12 is copied byte for byte from the isolated master to all participating 03 branches and the isolated Hikidashi pilot. The generator changes only its version marker; search behavior and SDK runtime do not change. Earlier 02 branches and primary checkouts remain their original reviewed baselines. Future rollout packages copy from hikidashi-worktrees/codex-03.

Source, docs and full native/browser gates are rerun for every participant, with per-package records in work/docs-shared-check-results.json and logs /tmp/family-03-shared-<package>-<gate>.log. The report table uses each latest local commit. The master branch is codex/03-docs-site-rollout in johnmorrisdotca-github-worktrees/codex-03. The reviewable patch is outputs/03-shared-search-test-fix.patch. Nothing pushed, tagged or published.

All ten participants passed their source, documentation and complete native/browser gates; latest shared commits and logs are recorded in outputs/03-shared-check-results.json. Master commit: a031dfea3abe0c73fd9c90f09cffa0bcb430e10d. The updated Hikidashi pilot is commit 8ab6cebe3c315ddc4870cbcedcb69526125372fb; it stays queued for its separate rollout audit.

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

## Review before release

New Japanese is **needs review**: each adopted package’s docs/site.json JA values, every new docs/guides/ja page, navigation labels and any compatibility fallback wording. For Korokoro this includes all ten translated guides, the entry titles and pitch, Docs/API reference labels and the single-die link. French is ticket 06 and has not begun. GitHub descriptions/topics and social-preview uploads remain outside this local rollout, requiring the owner’s go; no external settings have been changed.

Current package: chizu. Tickets 14 and 06 remain unclaimed.
