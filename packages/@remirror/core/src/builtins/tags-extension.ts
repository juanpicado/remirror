import { ExtensionPriority, ExtensionTag, MarkGroup, NodeGroup } from '@remirror/core-constants';
import { isUndefined, object } from '@remirror/core-helpers';

import { extensionDecorator } from '../decorators';
import {
  AnyExtension,
  ExtensionTags,
  isMarkExtension,
  isNodeExtension,
  PlainExtension,
} from '../extension';
import type { AnyCombinedUnion, InferCombinedExtensions } from '../preset';
import type { GeneralExtensionTags, MarkExtensionTags, NodeExtensionTags } from '../types';

/**
 * Create the extension tags which are passed into each extensions method to
 * enable dynamically generated rules and commands.
 *
 * @builtin
 */
@extensionDecorator({ defaultPriority: ExtensionPriority.Highest })
export class TagsExtension extends PlainExtension {
  get name() {
    return 'tags' as const;
  }

  #generalTags: GeneralExtensionTags = object();
  #markTags: MarkExtensionTags = object();
  #nodeTags: NodeExtensionTags = object();

  get combinedTags() {
    return {
      general: this.#generalTags,
      mark: this.#markTags,
      node: this.#nodeTags,
    };
  }

  onCreate() {
    this.resetTags();

    for (const extension of this.store.extensions) {
      this.updateTagForExtension(extension);
    }

    this.store.setStoreKey('tags', this.combinedTags);
    this.store.setExtensionStore('tags', this.combinedTags);
  }

  private resetTags() {
    this.#generalTags = {
      [ExtensionTag.FormattingMark]: [],
      [ExtensionTag.FormattingNode]: [],
      [ExtensionTag.LastNodeCompatible]: [],
      [ExtensionTag.NodeCursor]: [],
    };

    this.#markTags = {
      [MarkGroup.Alignment]: [],
      [MarkGroup.Behavior]: [],
      [MarkGroup.Color]: [],
      [MarkGroup.FontStyle]: [],
      [MarkGroup.Indentation]: [],
      [MarkGroup.Link]: [],
      [MarkGroup.Code]: [],
    };

    this.#nodeTags = {
      [NodeGroup.Block]: [],
      [NodeGroup.Inline]: [],
    };
  }

  private updateTagForExtension(extension: AnyExtension) {
    if (isNodeExtension(extension)) {
      const group = extension.spec.group as NodeGroup;
      const name = extension.name;

      this.#nodeTags[group] = isUndefined(this.#nodeTags[group])
        ? [name]
        : [...this.#nodeTags[group], name];
    }

    if (isMarkExtension(extension)) {
      const group = extension.spec.group as MarkGroup;
      const name = extension.name;

      this.#markTags[group] = isUndefined(this.#markTags[group])
        ? [name]
        : [...this.#markTags[group], name];
    }

    if (!extension.tags) {
      return;
    }

    for (const tag of extension.tags) {
      const generalTag = this.#generalTags[tag];
      this.#generalTags[tag] = isUndefined(generalTag)
        ? [extension.name]
        : [...generalTag, extension.name];
    }
  }
}

declare global {
  namespace Remirror {
    interface BaseExtension {
      /**
       * Define the tags for this extension.
       *
       * @remarks
       *
       * Tags are a helpful tool for categorizing the behavior of an extension. This
       * behavior is later grouped in the `Manager` and passed to the
       * `extensionStore`. Tags can be used by
       * commands that need to remove all formatting and use the tag to identify
       * which registered extensions are formatters.
       *
       * There are internally defined tags but it's also possible to define any
       * custom string as a tag. See {@link ExtensionTag}
       */
      tags?: Array<ExtensionTag | string>;
    }

    interface ManagerStore<Combined extends AnyCombinedUnion> {
      /**
       * Store the built in and custom tags for the editor instance.
       */
      tags: Readonly<ExtensionTags<InferCombinedExtensions<Combined>>>;
    }

    export interface ExtensionStore {
      /**
       * The tags provided by the configured extensions.
       */
      tags: ExtensionTags<any>;
    }
  }
}
