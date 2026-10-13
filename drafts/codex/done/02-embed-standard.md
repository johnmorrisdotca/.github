> **Added 2026-10-09 evening: before you mark 02 done, apply tickets `01b-family-text-fixes.md` and `02b-embed-builder-japanese.md` in the same branches.**

> **Also: main moved under your 02 branches in hata (1.2.0, 1.3.0, 1.4.0), kuni (1.2.0), chizu (1.3.0, 1.4.0), address-plus (1.6.0, France and Germany: add them wherever the builder lists countries), REST in Pieces (2.15.0–2.19.0) and hikidashi (1.0.3, the docs-site pilot merged). Rebase those 02 branches onto main and rerun their gates before marking 02 done; keep main's changes (square crops, variants, compare colours, demo/downloads.js).**

# Task: the family embed standard (HIGH, ready: John said yes)

Read `../EMBED-STANDARD.md` (in this repo) in full: it is the spec, the inventory and the rollout order.

Step 1 (one task): lift kyuubu's builder (github.com/johnmorrisdotca/kyuubu: `demo/builder-code.js` + its builder UI, CUBE_OPTIONS) into a package-agnostic `familyEmbedBuilder` in `scripts/family-template.mjs`, with kyuubu migrated onto it and its tests still green. Clone kyuubu to `~/Projects/kyuubu` (add the push guard hook: `printf '#!/bin/sh\nexec "$HOME/.local/bin/git-push-guard" "$@"\n' > .git/hooks/pre-push && chmod +x .git/hooks/pre-push`).
Step 2+ (one task per package, in the rollout order): adopt the builder; add the iframe page `embed/` and missing elements per the ranked list. hata already has an element and a builder in `demo/embed-builder.js` (branch `more-regions`): reuse it, don't duplicate.
