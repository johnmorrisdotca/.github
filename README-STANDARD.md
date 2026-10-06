# The README standard

Every johnmorrisdotca package has the same README, in the same order, with the
same kinds of things in each section. A reader who has met one has met them
all, and knows where to look for the rest.

npm shows the README as the package's page, and GitHub shows it as the
repository's front door, so it is the one document most people read. It is
meant to be full and complete, informational and not short, and nice to read:
plenty of examples that run, and pictures of what the package draws.

This file is the standard. The checks that hold a README to it are described at
the end, and their master copies are in [`readme-standard/`](readme-standard/)
in this repository.

**Status (2026-10-06).** The standard was written from the 24 READMEs as they
stood, and applied first to two pilots, [Tsunagi](https://github.com/johnmorrisdotca/tsunagi)
(already rich) and [Gunjin](https://github.com/johnmorrisdotca/gunjin) (sparse).
The other twenty-two follow once the pilots have been read.

## What the standard keeps, and what it adds

It keeps the house order that 17 to 23 of the 24 READMEs already follow (In 30
seconds, Who it is for, Features, Use it in your project, API, Theming, Limits,
Browser support, Languages, Roadmap, Architecture, The name, Where it comes
from, Development, Contributing, Changes, Licence), so that no heading is
renamed for the sake of it.

It adds what was missing from most of them:

- a **hero picture** under the title,
- a **picture for every game or feature**, in the Features section,
- an **Examples** section with many examples, every one run by a test,
- an **Accessibility** section,
- one place for the **API summary**, with a link to the full reference, and
- **tests** that fail when any of this goes missing.

Nothing is shortened to meet the standard. A section that is longer than the
standard asks for stays as long as it is; the standard sets what must be there,
never how much may be. The one limit is not the standard's: see
[How long a README may be](#how-long-a-readme-may-be), which moves material to
`docs/` and never removes it.

## The section order

Every README has these `##` sections in this order. The text is the heading
exactly, except where a pattern is given. A package may add sections of its own
(its own subject: "The puzzle", "Drawing a board", "The games") anywhere
between **Examples** and **API**, or after **Roadmap**, and may add `###`
subsections anywhere. A section may not be left out, and none may be empty: if
a section has nothing to say, it says so in a sentence (for example, "Nothing
here uses a network").

Above the first `##`: the **title**, the **summary**, the **badges**, the
**links** and the **hero picture**, in that order.

| # | Heading | What it holds |
| --- | --- | --- |
| – | the title (`<h1>`) | The name, with its Japanese name small beside it. One `h1` per README, the first thing in it. |
| – | the summary | One bold sentence of what it is, then a short paragraph of what it holds. No more than a screen. |
| – | the badges | CI, npm version, licence, dependencies (0), TypeScript, in that order, colour `2f5d4a` (the data-licence badge follows where the package ships data). |
| – | the links | `Play the demo →`, `API reference`, and any other first stop (the rules, the docs). |
| – | **the hero picture** | The demo as it looks on a desk and on a phone, light and dark. See [Pictures](#pictures). Directly under the links, before any `##`. |
| 1 | `In 30 seconds` (or `<Verb> in 30 seconds`: "Play in 30 seconds", "Roll in 30 seconds") | The install line, then the smallest code that does something: a few lines that run as written. The same thing as one tag in a page, if the package has one. |
| 2 | `Who it is for` | Three or four kinds of reader, each a bold lead and one sentence. |
| 3 | `Features` | A bullet for each thing the package does, in plain words, each linking to its section. Then `### What's in it`: **a picture for every game, mode, board or feature**, in a table, each with a caption. |
| 4 | `Use it in your project` | `### Install` first (npm, pnpm and yarn; the CDN line for a page with no bundler). Then one `###` for each way to use it: on a server with the API alone, as one tag with no bundler, in a bundler and each framework the package supports, on the command line. |
| 5 | `Examples` | Many examples, each a `###` with a sentence of what it shows and a code block that runs. See [Examples](#examples). |
| – | the package's own sections | What it is, how it is drawn, how it is played, its data. As long as they need to be. Each with a picture where there is something to see. |
| 6 | `API` | A table of the entry points (`import` path, what it holds), a table of the calls to learn first, and the link to the full reference (`api.html`, made from the source). Not a copy of the reference. |
| 7 | `Theming` | Every custom property and option that changes the look, with its default in light and dark. |
| 8 | `Limits` | What it does not do, and the numbers it stops at, stated plainly. |
| 9 | `Accessibility` | What a screen reader hears, what the keyboard does, what reduced motion changes, colour and contrast, touch target sizes, and what is known to fall short. |
| 10 | `Browser support` (or `Browser and runtime support`) | The browsers and Node versions it is tested in. |
| 11 | `Languages` | The languages its words come in, how one is chosen, how to add one. |
| 12 | `Roadmap` | What is planned, and what is deliberately not. |
| 13 | `Architecture` | How the source is laid out, and why. |
| 14 | `The name` | What the name means, with the Japanese and its reading. |
| 15 | `Where it comes from, and where it is used` | Its origin and sources, `### Used by`, and `### The family` (the list made by `pnpm family:readme`; never typed). |
| 16 | `Development` | The commands to build, test and retake the pictures. |
| 17 | `Contributing` | Where to report and what to read first. |
| 18 | `Changes` | A link to the changelog, and the latest release in a sentence. |
| 19 | `Licence` | The licence of the code, and of anything else that ships (data, art, sound). |

Within a section, `###` is the only level used, and a level is never skipped
(`##` to `####` is a fault).

## How long a README may be

**64,000 characters.** npm keeps only the first 65,536 characters of a README
(measured 2026-10-06: the registry's copy of every README over that length ends
mid-sentence at exactly 65,536), and shows that. A README past the limit loses
its end on npm: its Development, Contributing, Changes and Licence sections, and
the family list. The budget is 64,000, which leaves room for an edit, and the
lint fails a README over it.

A README that would be longer keeps the sections the standard requires and
moves **reference material** to files under `docs/`, linking each by a relative
link from the section it came out of, with a summary left behind:

- what moves: a source tree with a line on each file, the steps for making the
  package's data, the long tail of a table of calls (the README keeps the ones to
  learn first), the list of an SVG's classes and attributes, and prose that is
  about how something works inside rather than how it is used;
- what stays: every required section, every picture, every example (the examples
  are run by the test, and the test reads the README), the install line, the
  tables a test holds to the code, and the family list (it is generated);
- a moved section keeps its heading and a paragraph that says what is in the
  file, so that nobody looking for it in the README finds nothing.

`docs/` is on GitHub and is not in the tarball, so a moved page is read on
GitHub, through the link. The files are plain Markdown, each starting with a
`#` title and a line that links back to the README.

## Rules for the text

### Headings

- Sentence case: "Use it in your project", not "Use It In Your Project".
- No full stop, no emoji, no link in a heading.
- Unique within the README, so that every `#anchor` is stable.
- The same words as the table above, so a reader who has used one README finds
  the same heading in the next.

### Tables

- A header row, and every row with the same number of cells as the header.
- Used for things that have columns: options, entry points, limits, levels.
  Not for prose, and not for layout (except the picture gallery, below).
- Options and values in code font; a value that is a choice is written out
  (`"en"`, `"ja"`), never summarised.
- A table the code can state is held to the code by a test (the list of
  entry points, colours, counts). A number typed in a README is a number a test
  reads from the source, or it is not typed.

### Code blocks

- **Every fenced block names its language**: `ts`, `js`, `html`, `sh`, `json`,
  `css`, `jsx`, `tsx`, `vue`, `svelte`, `yaml`, `diff`, or `text` for output
  and layouts. A bare fence is a fault.
- **A block runs as written.** TypeScript and JavaScript blocks are checked by
  the examples check: TypeScript is type-checked against the built package and
  then run, JavaScript is run. A block that cannot stand alone (it needs a
  browser, a server, a variable from the lines above) says so in its fence:
  - ```` ```ts no-run ```` is type-checked and not run (it uses `document`,
    a server, or the network).
  - ```` ```ts no-check ```` is an excerpt: neither checked nor run. It is rare,
    and a section made only of these is not an example.
- Imports name the package as a reader would: `@johnmorrisdotca/<name>` and its
  subpaths, never a relative path.
- A comment after a line says what it returns or does. Output is shown in a
  `text` block, or as a trailing `// →` comment.
- Shell blocks (`sh`) show the command and not the prompt (no `$`).
- Long output is trimmed with `…`, and says it is trimmed.
- Version pins in CDN URLs name the major only (`@2`), and a test holds that to
  `package.json`.

### Tone

- Plain English, in the present tense, for someone who has not met the package.
  Say what a thing does and give the number. "It checks an answer in O(cells)",
  not "a blazing-fast, robust checker".
- No marketing words. The check refuses: powerful, blazing, blazingly,
  seamless, seamlessly, robust, leverage, cutting-edge, state-of-the-art,
  best-in-class, world-class, revolutionary, game-changing, effortless,
  effortlessly, magic, magical, supercharge, next-generation, delightful,
  awesome, amazing, and any exclamation mark in prose.
- Measured claims carry their date and the way they were measured ("measured
  2026-10-05 on one core"). Rules that belong to a traditional game are named
  as adaptations where they differ.
- Japanese is written beside the English, never instead of it. A Japanese
  word is followed by its reading the first time (軍人, *gunjin*).
- Small words a reader needs stay: the README is meant to be long where the
  subject is, and to be read from top to bottom.

## Examples

The `Examples` section is where a reader copies from. It is meant to have many,
each short, each runnable, each with a sentence before it saying what it shows
and, where there is something to see, a picture after it. At least six code
blocks are required there; most packages will have fifteen or more.

An Examples section has, as `###` subsections, whichever of these the package
has (a package leaves out only what it genuinely does not offer):

1. **Plain HTML**: a page with one `<script type="module">` from the CDN and
   one tag, that works when saved as a file.
2. **An ES module**: the API in a Node script, with its output.
3. **The custom element**: its attributes, its events, and how a page listens.
4. **Each framework the package supports**: React, Vue, Svelte and Angular, one
   block each, when it exports an element or a mount function. Frameworks need
   their own compilers, so these blocks sit under `Use it in your project`
   (`jsx`, `vue`, `svelte`, and `ts no-check` for Angular), where
   `pnpm test:frameworks` builds them from the packed tarball where a package has
   that check; the Examples section points to them. A package that exports an
   element must have a `jsx` (or `tsx`), a `vue` and a `svelte` block somewhere
   in its README, and the lint checks that it does.
5. **The command line**, if there is a `bin`: each command with its output.
6. **Common recipes**: the five or six things people actually do with it (the
   level of the day, a server-side check, a saved game, a custom look, a replay,
   export and import), each as a complete block.
7. **What it looks like**: a picture beside any example that draws.

`Use it in your project` is the short route to a first success, in the order a
reader would try things; `Examples` is the cookbook. A recipe is not repeated
in both: the first points to the second.

## Pictures

A picture says more than a paragraph about what a package draws, and the READMEs
are for people deciding whether to install it.

### What is shown

- **The hero**, directly under the links: the demo as a person sees it, on a
  desk (1280 wide) and on a phone (390 wide), in light and dark. The desk is
  the large picture; the phone sits beside it.
- **A picture for every game, mode, board, shape or feature** in `### What's
  in it`, so that a package with five games shows five boards. Each is the real
  thing, drawn by the package, never a drawing of it.
- **A picture beside an example** that draws something, where it helps.
- A page's own look (the header, the language chooser) is shown only in the
  hero. The other pictures are of the board or the part itself, cropped to it.

### How they are made

- **By a script in the repository, from the built demo**: `pnpm
  screenshots:readme` builds the demo (`pnpm site`) and runs
  `scripts/readme-pictures.mjs`, which uses Playwright. Nothing is taken by hand
  and nothing is fetched from the live site; the page is served to the browser
  from `site/`, so a picture is of the code in the checkout.
- **Deterministic**: a fixed level, seed and language; `reducedMotion:
  "reduce"`; waiting on the page's own markers and never on a clock. Two runs
  on one commit give the same pictures.
- **The script uses `scripts/readme-pictures-lib.mjs`**, which is the same file
  in every package. It serves the site, opens each shot at each size and in each
  colour scheme, crops to the element where a shot names one, converts to WebP,
  checks the size budget, and removes any picture the script no longer makes.
  The package's own file lists the shots and how each is set up.
- **Taken on one machine.** The pictures are taken on the maintainer's Mac: fonts differ between operating systems, so a retake elsewhere changes every pixel. The tests do not compare pixels, only the files' names, sizes and use.
- **Retake only when the look changes.** Every retake adds a new file to the
  git history: a retake that changes nothing a reader would notice is not
  committed.

### The files

- **Where**: `docs/images/` in the repository, one flat folder.
- **Names**: `<subject>-<desk|phone>-<light|dark>.webp` in kebab case, for
  example `hero-desk-light.webp`, `portals-desk-dark.webp`. `<subject>` is what
  it shows. Every picture has both a light and a dark file.
- **Format**: WebP (lossy, quality 82) for screenshots; PNG only for a picture
  that must be lossless (flat diagrams with text), which is rare. No JPEG, no
  GIF.
- **Size**: a screenshot is taken at the size it is shown, or up to twice that
  (`deviceScaleFactor` 1 for a desk, 2 for a phone and for a cropped part), so
  that it is sharp and no larger than it needs to be.
- **Budget**: no `-desk-` file over **200 KB**, no other file over **120 KB**,
  and no README's pictures over **2 MB** together. The check refuses a
  picture over its budget; the script prints each size.
- **Not in the tarball**: `package.json`'s `files` lists `dist`, `README.md`,
  `LICENSE` and `CHANGELOG.md` and never `docs`, so the pictures add nothing to
  what is installed. `scripts/check-package.mjs` fails if a file under `docs/`
  is in the packed tarball.

### How the README refers to them

- **By absolute URL**, so that they show on both GitHub and npm (npm shows the
  README from the tarball, where `docs/` is not):
  `https://raw.githubusercontent.com/johnmorrisdotca/<name>/main/docs/images/<file>`.
  Never a relative path.
- **Light and dark with `<picture>`**, one `<source>` for dark and the light
  file as the `<img>`:

  ```html
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/johnmorrisdotca/<name>/main/docs/images/hero-desk-dark.webp">
    <img src="https://raw.githubusercontent.com/johnmorrisdotca/<name>/main/docs/images/hero-desk-light.webp" alt="…" width="720">
  </picture>
  ```
- **Alt text** that describes what is on the picture: what is drawn, what state
  it is in, and what the controls around it are, in a sentence or two. Not "a
  screenshot", and not the file name. Every `alt` in a README is different.
- **A caption under each picture**: one line saying what to look at, in
  `<em>` (or `<sub>` inside a table). The alt text is for a reader who cannot
  see it; the caption is for everyone.
- **A width on every `<img>`**, in pixels: hero desk 720, phone 220, gallery
  pictures 300 to 400 depending on the shape.
- **The gallery is a table** of `<td align="center">`, two or three across,
  each cell a picture and its caption. It is the only table that is used for
  layout.

## The tests a package carries

Each package carries the same four files, copied from
[`readme-standard/`](readme-standard/) and not edited:

| File | What it does |
| --- | --- |
| `scripts/readme-lint.mjs` | The rules above, as a function from the README, `package.json` and the picture folder to a list of faults. |
| `src/readme.test.js` | Runs it in `pnpm check` (vitest), and tests the lint itself on small READMEs that break each rule. Fails when: a required section is missing, out of order or empty, or a required `###` is missing; a fenced block has no language, or has a flag the standard does not list; an image URL is not this repository's `docs/images/` file, or the file is missing, or has no alt text, width or caption, or sits outside a `<picture>` with its twin; a file in `docs/images/` is badly named, unused or over budget; the hero is missing; fewer than four subjects besides the hero are pictured; a table row has the wrong number of cells; a marketing word or an exclamation mark is in the prose; the install line or the API link is missing; a package that defines an element has no `jsx`, `vue` or `svelte` example; a package with a command has no `sh` example that runs it; `files` contains `docs`; a CDN version pin is not the package's major. |
| `scripts/check-readme-examples.mjs` | `pnpm test:readme` (`pnpm build` first). Writes every `ts` and `js` block to its own file, imports the package by its own name, type-checks the TypeScript with `tsc` (strict, with the DOM library) and runs each block with Node, which reads TypeScript by stripping its types: a TypeScript example that imports a type writes `import type`. Run in CI as a job of its own, on Node 24, so that it does not slow `pnpm check` and does not run on every operating system. |
| `scripts/readme-pictures-lib.mjs` | The shared part of `pnpm screenshots:readme`. |

And in the package's own files:

- `package.json` has `screenshots:readme` (`pnpm site && node scripts/readme-pictures.mjs`) and `test:readme`
  (`pnpm build && node scripts/check-readme-examples.mjs`).
- `scripts/readme-pictures.mjs` lists the shots.
- `.gitignore` has `.readme-examples/` and `eslint.config.js` ignores it.
- `scripts/check-package.mjs` fails if the packed tarball holds anything under `docs/` or any image.
- `ci.yml` has a `readme` job after the family's jobs, which runs `pnpm test:readme`.

A package's own checks (its tables held to its code, its counts) stay in its
own test files, and are not replaced by these.

## Making or updating a README

1. Read the package's current README and demo. Keep everything in it.
2. Put the sections in the order above. Add the missing ones. Move nothing out.
3. Write the shots in `scripts/readme-pictures.mjs` and run
   `pnpm screenshots:readme`. Look at every picture.
4. Write the examples. Run `pnpm test:readme`.
5. Run `pnpm check`.
6. Add the changelog entry. npm shows the README from the tarball, so a change
   to it is a patch release: bump the patch version, date the entry, push, and
   publish with the Release workflow.
7. Open the npm page after the release, and the repository's front page, and
   read both, in light and in dark.

## Open points

These are for the owner to settle before the standard is applied to the other
twenty-two packages. They are written here, and moved up into the standard once
decided.

- **The master `CONTRIBUTING.md` does not mention this standard yet.** A change to
  it must reach every package's `scripts/community/CONTRIBUTING.md` and its hash
  in `family.test.js` first (see the README here), or the Copies workflow goes
  red; so the line that points contributors at this file goes in with the
  rollout, in the same pass.
- **Five packages' READMEs are already past npm's limit** and are cut off on npm
  today, before this standard touches them: Toranpu (66,936 bytes), Korokoro
  (66,056), Kyuubu (65,979), Kazu (67,109); Tsunagi's was 53,230 before the
  pilot added pictures and examples. They need the move to `docs/` described
  above, and which of their sections go is for the owner to approve.
- **`Features` keeps its name** (twenty READMEs have it); the picture gallery is
  its `### What's in it` subsection. The alternative is renaming the section.
- **Pictures are WebP**, made with the browser's own encoder, so no tool is
  needed beyond Playwright. PNG is allowed for the rare lossless picture.
