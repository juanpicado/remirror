---
'@remirror/cli': major
'@remirror/core-constants': major
'@remirror/core-helpers': major
'@remirror/core-types': major
'@remirror/core': major
'@remirror/dev': major
'@remirror/extension-bold': major
'@remirror/extension-code-block': major
'@remirror/extension-collaboration': major
'@remirror/extension-doc': major
'@remirror/extension-drop-cursor': major
'@remirror/extension-emoji': major
'@remirror/extension-enhanced-link': major
'@remirror/extension-epic-mode': major
'@remirror/extension-image': major
'@remirror/extension-mention': major
'@remirror/extension-paragraph': major
'@remirror/extension-tables': major
'@remirror/extension-text': major
'@remirror/pm': major
'@remirror/preset-core': major
'@remirror/react-utils': major
'@remirror/react': major
'@remirror/showcase': major
'jest-prosemirror': major
'jest-remirror': major
'multishift': major
'prosemirror-suggest': major
'remirror': major
'test-keyboard': major
---

This is a breaking change to the structure of published npm packages.

- Move build directory from `lib` to `dist`
- Remove option for multiple entry points. It is no longer possible to import module from '@remirror/core/lib/custom'
- Only use one entry file.
- Remove declaration source mapping for declaration files
- Remove the src directory from being published.
