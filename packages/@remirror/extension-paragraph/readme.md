# @remirror/extension-paragraph

> Group your words into paragraphs and render each statement a harmonious symphony.

[![Version][version]][npm] [![Weekly Downloads][downloads-badge]][npm]
[![Bundled size][size-badge]][size] [![Typed Codebase][typescript]](./src/index.ts)
![MIT License][license]

[version]: https://flat.badgen.net/npm/v/@remirror/extension-paragraph
[npm]: https://npmjs.com/package/@remirror/extension-paragraph
[license]: https://flat.badgen.net/badge/license/MIT/purple
[size]: https://bundlephobia.com/result?p=@remirror/extension-paragraph
[size-badge]: https://flat.badgen.net/bundlephobia/minzip/@remirror/extension-paragraph
[typescript]: https://flat.badgen.net/badge/icon/TypeScript?icon=typescript&label
[downloads-badge]: https://badgen.net/npm/dw/@remirror/extension-paragraph/red?icon=npm

<br />

## Installation

```bash
yarn add @remirror/extension-paragraph@next @remirror/pm@next # yarn
pnpm add @remirror/extension-paragraph@next @remirror/pm@next # pnpm
npm install @remirror/extension-paragraph@next @remirror/pm@next # npm
```

<br />

## Usage

When added to your editor it will provide the `insertParagraph` which inserts a paragraph into the
editor.

```ts
import { RemirrorManager, ExtensionPriority } from '@remirror/core';
import { ParagraphExtension } from '@remirror/extension-paragraph';
import { DocExtension } from '@remirror/extension-doc';
import { TextExtension } from '@remirror/extension-text';

// Create the extension
const paragraphExtension = new ParagraphExtension();
const docExtension = new DocExtension({ priority: ExtensionPriority.Low });
const textExtension = new TextExtension({ priority: ExtensionPriority.Low });

// Create the Editor Manager with the paragraph extension passed through.
const manager = RemirrorManager.create([paragraphExtension, docExtension, textExtension]);

// Pass the dom element to the editor. If you are using `@remirror/react` this is done for you.
const element = document.createElement('div');
document.body.appendChild(element);

// Add the view to the editor manager.
manager.addView(element);

// Access the commands and insert a paragraph.
manager.commands.insertParagraph();
```

### Alternatives

There are several presets which contain this extension and make the installation process less
verbose. AS a result you probably won't ever need to manage it directly.

- `@remirror/preset-core`

<br />

## Credits

This package was bootstrapped with [monots].

[monots]: https://github.com/monots/monots
