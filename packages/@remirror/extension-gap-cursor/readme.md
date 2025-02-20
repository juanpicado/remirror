# @remirror/extension-gap-cursor

> Enable cursors for difficult to reach parts of the document.

[![Version][version]][npm] [![Weekly Downloads][downloads-badge]][npm]
[![Bundled size][size-badge]][size] [![Typed Codebase][typescript]](./src/index.ts)
![MIT License][license]

[version]: https://flat.badgen.net/npm/v/@remirror/extension-gap-cursor
[npm]: https://npmjs.com/package/@remirror/extension-gap-cursor
[license]: https://flat.badgen.net/badge/license/MIT/purple
[size]: https://bundlephobia.com/result?p=@remirror/extension-gap-cursor
[size-badge]: https://flat.badgen.net/bundlephobia/minzip/@remirror/extension-gap-cursor
[typescript]: https://flat.badgen.net/badge/icon/TypeScript?icon=typescript&label
[downloads-badge]: https://badgen.net/npm/dw/@remirror/extension-gap-cursor/red?icon=npm

## Installation

```bash
# yarn
yarn add @remirror/extension-gap-cursor@next @remirror/pm@next

# pnpm
pnpm add @remirror/extension-gap-cursor@next @remirror/pm@next

# npm
npm install @remirror/extension-gap-cursor@next @remirror/pm@next
```

## Usage

The following code creates an instance of this extension.

```ts
import { GapCursorExtension } from '@remirror/extension-gap-cursor';

const extension = new GapCursorExtension();
```

When enabled, this will capture clicks near and arrow-key-motion past places that don't have a
normally selectable position nearby, and create a gap cursor selection for them. The cursor is drawn
as an element with class `ProseMirror-gapcursor`.

Make sure to import the styles as shown below.

```ts
import '@remirror/styles/extension-gap-cursor.css';
```

## Credits

This package was bootstrapped with [monots].

[monots]: https://github.com/monots/monots
