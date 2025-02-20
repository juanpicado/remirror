import {
  ApplySchemaAttributes,
  extensionDecorator,
  FromToParameter,
  InputRule,
  KeyBindings,
  MarkExtension,
  MarkExtensionSpec,
  MarkGroup,
  markInputRule,
  markPasteRule,
  Plugin,
  toggleMark,
} from '@remirror/core';

@extensionDecorator({})
export class ItalicExtension extends MarkExtension {
  get name() {
    return 'italic' as const;
  }

  createMarkSpec(extra: ApplySchemaAttributes): MarkExtensionSpec {
    return {
      attrs: extra.defaults(),

      group: MarkGroup.FontStyle,
      parseDOM: [
        { tag: 'i', getAttrs: extra.parse },
        { tag: 'em', getAttrs: extra.parse },
        { style: 'font-style=italic' },
      ],
      toDOM: (mark) => ['em', extra.dom(mark), 0],
    };
  }

  createKeymap(): KeyBindings {
    return {
      'Mod-i': toggleMark({ type: this.type }),
    };
  }

  createCommands() {
    return {
      /**
       * Toggle the italic formatting on the selected text.
       */
      toggleItalic: (range?: FromToParameter) => toggleMark({ type: this.type, range }),
    };
  }

  createInputRules(): InputRule[] {
    return [markInputRule({ regexp: /(?:^|[^*_])[*_]([^*_]+)[*_]$/, type: this.type })];
  }

  createPasteRules(): Plugin[] {
    return [markPasteRule({ regexp: /(?:^|[^*_])[*_]([^*_]+)[*_]/g, type: this.type })];
  }
}
