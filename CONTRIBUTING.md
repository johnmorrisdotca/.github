# Contributing

Thank you for wanting to help. Each package's own CONTRIBUTING.md, where it
has one, says what is particular to it; this is what holds for all of them.

## Before you start

Open an issue first for anything bigger than a typo, so we can agree on the
shape before you spend time on it.

## Working on a package

```sh
pnpm install
pnpm check          # lint, types and every test
pnpm test:package   # pack it, install it and import it as a user would
pnpm site           # build the demo page, as GitHub Pages publishes it
```

- Packages have no runtime dependencies, and keep it that way.
- Every function that plays a game is pure: it returns new values and never
  changes what it was given.
- Tests sit beside the code they test. A rule you change has a test that
  would have caught it.
- Words a player reads come in English and Japanese. If you cannot write the
  Japanese, say so in the pull request and someone will.
- Option values and names are kebab case: `crazy-eights`, never `crazyEights`.
- Art and sound are CC0 or public domain only, checked at the source, and
  credited in the README. No GPL or LGPL code.
- Each package needs Node 22 or later.

## Pull requests

Say what changed and how you checked it. Add a line to the changelog under
**Unreleased**. Releases are made by tagging a version; the Release workflow
publishes to npm with provenance.
