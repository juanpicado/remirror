# @remirror/dev

## 1.0.0-next.17

> 2020-08-02

### Patch Changes

- @remirror/react@1.0.0-next.17

## 1.0.0-next.16

> 2020-08-01

### Patch Changes

- a7037832: Use exact versions for `@remirror` package `dependencies` and `peerDepedencies`.

  Closes #435

- dcccc5fc: Add browser entrypoint to packages and shrink bundle size.
- 231f664b: Upgrade dependencies.
- 6c6d524e: Remove use of `export *` for better tree shaking.

  Closes #406

- Updated dependencies [6528323e]
- Updated dependencies [a7037832]
- Updated dependencies [dcccc5fc]
- Updated dependencies [231f664b]
- Updated dependencies [6c6d524e]
- Updated dependencies [e518ef1d]
  - @remirror/react@1.0.0-next.16
  - @remirror/pm@1.0.0-next.16

## 1.0.0-next.4

> 2020-07-16

### Patch Changes

- 5d5970ae: Update repository and website field to point to HEAD rather than a specific branch.
- Updated dependencies [e1a1b6ec]
- Updated dependencies [9f495078]
- Updated dependencies [5d5970ae]
- Updated dependencies [64edeec2]
  - @remirror/react@1.0.0-next.4
  - @remirror/pm@1.0.0-next.4

## 1.0.0-next.1

> 2020-07-05

### Patch Changes

- Fix missing dist files from previous publish.
- Updated dependencies [undefined]
  - @remirror/pm@1.0.0-next.1
  - @remirror/react@1.0.0-next.1

## 1.0.0-next.0

> 2020-07-05

### Major Changes

- The whole API for remirror has completely changed. These pre-release versions are a breaking
  change across all packages. The best way to know what's changed is to read the documentaion on the
  new documentation site `https://remirror.io`.
- 28bd8bea: This is a breaking change to the structure of published npm packages.

  - Move build directory from `lib` to `dist`
  - Remove option for multiple entry points. It is no longer possible to import module from
    '@remirror/core/lib/custom'
  - Only use one entry file.
  - Remove declaration source mapping for declaration files
  - Remove the src directory from being published.

- 7b817ac2: Rename all types and interfaces postfixed with `Params` to use the postfix `Parameter`.
  If your code was importing any matching interface you will need to update the name.

### Patch Changes

- Updated dependencies [undefined]
- Updated dependencies [28bd8bea]
- Updated dependencies [7b817ac2]
- Updated dependencies [09e990cb]
  - @remirror/pm@1.0.0-next.0
  - @remirror/react@1.0.0-next.0

## 0.13.2

### Patch Changes

- 89392ff7: Upgrade prosemirror-dev-tools to 3.0.0

## 0.13.1

### Patch Changes

- @remirror/react@0.13.1

## 0.11.0

### Patch Changes

- Updated dependencies [026d4238]
- Updated dependencies [69d00c62]
  - @remirror/react@0.11.0

## 0.7.4

### Patch Changes

- 7380e18f: Update repository url from ifiokjr/remirror to remirror/remirror to reflect new GitHub
  organisation.
- Updated dependencies [7380e18f]
  - @remirror/react@0.7.5

## 0.7.3

### Patch Changes

- 5f85c0de: Bump a new version to test out the changeset API.
- Updated dependencies [5f85c0de]
  - @remirror/react@0.7.3
