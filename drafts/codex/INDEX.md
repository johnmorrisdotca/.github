# Tickets (2026-10-09)

Owners: **Codex** does most of the work (John, 2026-10-09: "go slower and let the GPT agent do most of the work"). Codex's order, one at a time: 02 (with 01b and 02b inside it), then 12's builder options, 03, 14, 06. **Claude (Sonnet)**: one agent takes 07 then 08; a second takes 09 (items 1–5, one minor release each) (John, 2026-10-09: "keep the agent going"), never touching the embed builders or the family template while Codex has 02 open. Take only rows with your name, so no two agents edit the same repo at once. Read `HOW-TO-WORK.md` (how to claim, finish and mark a ticket done) and `00-RULES.md` first.

| # | Ticket | Priority | Owner | Status |
|---|---|---|---|---|
| 01 | Group and order the family list | LOW | Codex | done — branch codex/01-family-list-order — report reports/01-family-list-order.md |
| 01b | Family template text fixes from the Japanese review of 01 (apply in the 02 branches) | HIGH | Codex | done inside 02 — reviewed text applied — report reports/02-embed-standard.md |
| 02 | Family embed standard (shared builder, then each package) | HIGH | Codex | done — branch codex/02-embed-standard — report reports/02-embed-standard.md |
| 02b | Embed builder Japanese fixes and shared builder words (from the review of 02's first 8 packages) | HIGH | Codex | done inside 02 — reviewed terms/shared words applied — report reports/02-embed-standard.md |
| 03 | Docs site rollout per package | MED | Codex | in progress — codex — 2026-10-11 15:50 — branch codex/03-docs-site-rollout — korokoro, kyuubu, hitotsu, toranpu, tane, narabe, tenka, kumimoji, tsunagi, jarajara, suido, domino, kotoba, sugoroku, kazu, meikyuu and hikidashi done and green; active package chizu; shared version 2026-10-12 synchronized and verified |
| 04 | hata curated square crops (whole + cropped) | MED | Claude (Sonnet) | done, released as hata 1.2.0 — branch claude/04-hata-square-crops — report reports/04-hata-square-crops.md |
| 05 | hata flag decisions + disputed-flag variants | MED | Claude (Sonnet) | done, released as hata 1.3.0 — branch claude/05-hata-flag-decisions — report reports/05-hata-flag-decisions.md |
| 06 | French for the packages | MED | Codex | ready (Canadian French) |
| 07 | chizu small follow-ups | LOW | Claude (Sonnet) | done, released as chizu 1.4.0 — branch claude/07-chizu-followups — report reports/07-chizu-followups.md |
| 08 | address-plus France then Germany | MED | Claude (Sonnet) | done, released as address-plus 1.6.0 (France and Germany) — branch claude/08-address-plus-fr-de — report reports/08-address-plus-fr-de.md |
| 09 | REST in Pieces after 2.14.0 | MED | Claude (Sonnet) | done through item 5, on npm as REST in Pieces 2.19.2 (2.14.0–2.19.1 stopped in the release check on slow tests, fixed in 2.19.2); GraphQL (item 6) only if asked — report reports/09-rip-next.md |
| 12 | Colour per item and capital toggle (kuni Compare, chizu drawing), Markdown and SQL downloads family-wide | MED | Sonnet part done; Codex adds the builder options after 02 | done — Sonnet part released; builder/download continuation on codex/12-colours-capitals-downloads — report reports/12-compare-colours-capitals-downloads.md |
| 13 | REST in Pieces adoption: public read-only API on Pages, mock your own OpenAPI, live streams, one-click starters | HIGH | Claude (Sonnet) | done, released as REST in Pieces 2.21.0 (static API), 2.22.0 (mock your OpenAPI), 2.23.0 (streams), 2.24.1 (starters and collections; 2.24.0 stopped on a timing test) — report reports/13-rip-adoption.md |
| 14 | Docs upkeep checks in every package (changelog check, generated docs current, README size, DOCS_UPKEEP map) | MED | Codex | ready — after 03 |
| 15 | REST in Pieces serves the family's data: countries from kuni, regions, groupings, flags (hata), maps (chizu), 7-country addresses | HIGH | Claude (Sonnet) | done, released: kuni 1.3.0 (IOC + withdrawn codes per ISO 3166-3) and REST in Pieces 3.0.0 (countries from kuni, regions, groupings, flags, maps, 7-country addresses, static API in CSV/NDJSON/SQL, safe by default; upgrade guide) — item 5 /geo/features is done in 16; left: React starter picker — report reports/15-rip-family-data.md |
| 16 | hata: Brittany (Gwenn-ha-du, public-domain drawing, status local); REST in Pieces: `/geo/features` from Chizu (ticket 15 item 5) | MED | Claude (Sonnet) | done, released: hata 1.5.0 (Brittany) and REST in Pieces 3.1.0 (/geo/features) |
| 10 | kuni 2.0 / one API style | LATER | — | not now |
| 11 | UmaKuma reads chizu and kuni | LOW | UmaKuma's own session | for UmaKuma's board, not here |
