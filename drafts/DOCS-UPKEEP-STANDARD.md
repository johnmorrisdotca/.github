# The docs upkeep standard

John, 2026-10-09: "we need to have rules that re-do or update docs when new features come in."

A package's documentation is part of the change, not a follow-up to it. A feature is not done, and is not released,
until every page a user would read about it says what the code now does. This holds for every johnmorrisdotca
package and for REST in Pieces, and for every person or agent working on them.

## The rule

Every change that a user could notice updates, **in the same branch, before it is merged**:

1. **CHANGELOG.md**, under Unreleased: what changed, in words a user understands, with the new names in code.
2. **README.md**: the section where a reader would look for it. Long reference goes to `docs/`, with a link left
   behind; the README stays under 64,000 characters and is never trimmed by deleting what is still true.
3. **The reference**: TSDoc with `@param`, `@returns` and a runnable `@example` on every new or changed export; the
   OpenAPI document and generated types for an API; `docs/api.md` or the docs site regenerated.
4. **Guides in `docs/`**: the guide for the feature's job (a new page if it is a new job), and the troubleshooting or
   upgrading page if behaviour changed.
5. **The demo or playground**: its help text, tabs, examples and downloads, where the feature shows there.
6. **Every language the package ships**: English, Japanese (`docs/strings-ja.md` regenerated), and French once the
   package has it; new text is read by the japanese-reviewer (and french-reviewer) before release.
7. **Pictures**: README screenshots and animations re-taken when what they show changed.
8. **Anything the change made false.** Grep `README.md`, `docs/` and the demo for the old name, value or behaviour,
   and fix every sentence that no longer holds. A rename or removal always needs this grep.

A doc that is still true is left alone: an edit made only to show it was read is noise.

## The checks that hold it

What a machine can check, the gate checks, so the rule does not depend on remembering it. Each package's `pnpm check`:

- fails when an export has no TSDoc or no `@example` (in place);
- runs every README and doc example (in place where `test:readme` exists);
- **fails when the code differs from the last release tag but CHANGELOG has nothing under Unreleased** (new);
- **regenerates every generated doc (`docs/strings-ja.md`, `docs/api.md`, the docs site, OpenAPI types) into a
  temporary folder and fails if it differs from the committed copy** (new);
- **fails when README.md is over 64,000 characters** (in place in most packages).

The new checks go into the shared family template, so every package gets them at once (ticket 14).

## The review before release

Whoever releases reads `git diff --name-only <last tag>..HEAD`, opens the docs that cover those files, and checks
that each still describes the code. For a package with a `docs/DOCS_UPKEEP.md` map (which doc covers which part of
the code), that map says where to look; a new doc gets a row in the map in the same change.
