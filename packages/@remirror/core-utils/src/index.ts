export {
  emptyCommandFunction,
  lift,
  removeMark,
  replaceText,
  setBlockType,
  toggleBlockItem,
  toggleList,
  toggleWrap,
  updateMark,
  wrapIn,
} from './command-utils';

export type {
  CreateDocumentErrorHandler,
  CreateDocumentNodeParameter,
  Fallback,
  StringHandlerParameter,
} from './core-utils';
export {
  areSchemaCompatible,
  atDocEnd,
  atDocStart,
  canInsertNode,
  closestElement,
  createDocumentNode,
  endPositionOfParent,
  fromHtml,
  getCursor,
  getDocument,
  getLineHeight,
  getMarkAttributes,
  getMarkRange,
  getMatchString,
  getNearestNonTextNode,
  getPluginMeta,
  getPluginState,
  getRemirrorJSON,
  getSelectedGroup,
  getSelectedWord,
  getTextContentFromSlice,
  getTextSelection,
  isDocNode,
  isDocNodeEmpty,
  isDomNode,
  isEditorSchema,
  isEditorState,
  isElementDomNode,
  isMarkActive,
  isMarkType,
  isNodeSelection,
  isNodeType,
  isProsemirrorMark,
  isProsemirrorNode,
  isRemirrorJSON,
  isResolvedPos,
  isSelection,
  isStateEqual,
  isTextDomNode,
  isTextSelection,
  isTransaction,
  nodeNameMatchesList,
  setPluginMeta,
  shouldUseDomEnvironment,
  startPositionOfParent,
  toDom,
  toHtml,
} from './core-utils';

export { environment } from './environment';

export type { ModifierKeys } from './keyboard-utils';
export {
  ALT,
  CAPS_LOCK,
  COMMAND,
  CTRL,
  isApple,
  mod,
  Modifier,
  SHIFT,
  WINDOWS,
} from './keyboard-utils';

export type { NodeWithPosition } from './prosemirror-node-utils';
export {
  containsNodesOfType,
  findBlockNodes,
  findChildren,
  findChildrenByAttribute,
  findChildrenByMark,
  findChildrenByNode,
  findInlineNodes,
  findTextNodes,
  flattenNodeDescendants as flatten,
} from './prosemirror-node-utils';

export { markInputRule, markPasteRule, nodeInputRule, plainInputRule } from './prosemirror-rules';

export type {
  FindProsemirrorNodeResult,
  FindSelectedNodeOfType,
  NonChainableCommandFunction,
  SchemaJSON,
} from './prosemirror-utils';
export {
  applyClonedTransaction,
  chainCommands,
  chainKeyBindingCommands,
  cloneTransaction,
  convertCommand,
  findElementAtPosition,
  findNodeAtPosition,
  findNodeAtSelection,
  findParentNode,
  findParentNodeOfType,
  findPositionOfNodeAfter,
  findPositionOfNodeBefore,
  findSelectedNodeOfType,
  hasTransactionChanged,
  isNodeActive,
  isNodeOfType,
  isSelectionEmpty,
  markEqualsType,
  mergeKeyBindings,
  mergeProsemirrorKeyBindings,
  nonChainable,
  removeNodeAfter,
  removeNodeAtPosition,
  removeNodeBefore,
  replaceNodeAtPosition,
  schemaToJSON,
} from './prosemirror-utils';
