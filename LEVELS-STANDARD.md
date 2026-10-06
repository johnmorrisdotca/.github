# The levels standard

One rule for every johnmorrisdotca package that ships levels, written once so
that each one states the same thing in its own terms.

> **A level's difficulty counts how much of the map its answer covers.**

John, 2026-10-06, looking at a Huge Meikyuu maze whose answer was 134 cells of
4,736, all of it in the middle and one arm, and which read four dots of five:
"difficulty is how much of the map the answer covers." A score built only from
what a player meets on the way (forks, wrong turns, size) cannot tell a long
answer across the whole map from a short one in a corner, and the second is the
easier to play. [Meikyuu](https://github.com/johnmorrisdotca/meikyuu) is the
model; this file says what to copy and what to translate.

## What "coverage" is

**Coverage is the share of the playing area the answer, or the goal, touches,
counted off the level itself, in whole numbers and plain arithmetic, so that it
is the same in every engine.** "The map" is whatever the package's levels are
played on: the cells of a maze, the pieces of a pipe network, the holes of a
board, the gems of a grid. "The answer" is what the level must do to be solved:
the line drawn, the pieces the water goes through, the jumps of the winning
play, the cells a goal needs cleared.

A package defines it for itself in one sentence, in the Levels section of its
README, and says what is counted (cells, pieces, holes), and what is left out
(cells that are not part of the map: the corners of a cross, the hole of a
ring). It states whether coverage can vary at all in its levels. Where the rules
of a game force it (every Tsunagi answer fills every open cell: 100%), coverage
cannot rank the levels, and the package says so and names the measure that
stands in for it (Tsunagi: the share of cells that start empty).

## How it enters the score

1. **As a factor, never as another term added to the sum.** A term added gives
   every small level a bonus, because any answer covers a small map. A factor
   leaves a level whose answer covers the map where it was and takes away only
   where the answer is small beside the map. Meikyuu tried an additive term at
   weights of 0.25 to 0.40 and it moved 163 of 256 of its smallest tall mazes up
   a dot; the factor moved none up.
2. **A discount, never a promotion.** The factor runs from `0.5` (nothing
   covered) to `1` (all of it), so the hardest levels, which cover the whole
   map, are untouched and no level scores more than it did.
3. **Measured two ways and averaged**, so neither a long thin answer nor a
   short wide one passes for coverage: the box the answer fills over the box of
   the map, and the share of the map's area, in a coarse grid of zones, that the
   answer visits. Meikyuu: `cover = clamp((0.5 * bbox + 0.5 * zones - 0.20) / 0.70, 0, 1)`,
   `factor = 0.5 + 0.5 * cover`. The grid is 2 by 2 under 150 cells, 3 by 3
   under 800, 4 by 4 above; a zone counts as visited at 2 cells of the answer
   and is left out when it holds under a quarter of an average zone; a solid
   (three dimensions) takes its zone share over 0.75, because a shell has no
   inside.
4. **Rounded once.** The score is a whole number from 0 to 100, rounded once
   after the factor; any dots or marks are cut from that whole number, not from
   the unrounded one.

A package whose levels have no geometry (a list of rules, a deal of cards) has no
coverage to measure and says so in a sentence; this standard asks nothing more of
it. **Computer opponents are out of scope:** a strength setting rates an opponent,
not a map.

## What a list is ordered by

Each fixed list is **in the order of the score**, the unrounded score first, then
the effort or cost to play, then the old place, so the same run writes the same
file. A list is only ever added to at the end, except by a release that says so;
re-ordering by a changed score is such a release, and it is a **major version**,
because it changes which board is "level N". The package's changelog says so, its
levels page says what a site must do (solves kept by recipe are unaffected; a
number kept by a site now names a different board), and the legacy map answers
where an old level went.

Whether marks are absolute across sizes (Meikyuu: dots cut at 20, 40, 60 and 80,
so Small never reaches four dots) or within a size (Suido and Tsunagi: each size
reaches five) is the package's choice, stated in its README. It is never left to
a site to guess.

## What each package says today

Measured on 2026-10-06 from the published tarballs. A package updates its own
row, and the sentence in its README, when it adopts the rule.

| Package | Levels | What coverage means there | Status |
| --- | --- | --- | --- |
| meikyuu | 3,776 mazes in lists | the box and the zones of the map the answer crosses, keys' trips included | adopted in 3.0.0; the model |
| suido | 3,856 | the share of the pieces the water goes through; a network is 100% by rule, a drains board 50 to 59% | to adopt: add it to the percentile blend |
| tsunagi | about 2,800 | 100% of the open cells by rule; stand-in: the share of cells that start empty | to state: coverage cannot rank, name the stand-in |
| tobiishi | 81 | the share of the board's holes the winning play touches (20% at 3 jumps, 34% at 6, 45% at 9) | to adopt; marks are 1, 3 and 5 from the jump count today |
| houseki | 450 | the share of the board a goal needs cleared; fixed at 100% for Stone Collapse | to state per campaign |
| karakuri | 39 | the share of the board in play | to state; five levels a game, order only |
| jirai, kazu, jarajara, kumimoji | settings, not lists | mine density, clue density, layout size, tiles in play | to state where levels are settings |

## What each package with levels keeps

- **A sentence defining its coverage** in the README's Levels section, and the
  words "how much of the map the answer covers" or the package's own plain
  equivalent in its score's description.
- **A test that fails when coverage stops counting**: two levels the same in
  everything but coverage, one covering the whole map and one a corner of it,
  and the second must score no more than the first and, at the smallest cover,
  no more than the floor's half of what the first scores. Plus a test that the
  list is in the order of its score.
- **A script that scores every level again and puts the list in order**
  (Meikyuu: `pnpm levels:rescore`, `scripts/meikyuu-rescore.ts`), run after any
  script that makes levels, so the order and the score can never drift apart.
- **The changelog's major entry**, as above, when a score change re-orders a
  list.
