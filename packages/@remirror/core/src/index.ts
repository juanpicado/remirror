export * from '@remirror/core-constants';
export * from '@remirror/core-helpers';
export * from '@remirror/core-types';
export * from '@remirror/core-utils';

export type {
  BuiltinOptions,
  IdentifierSchemaAttributes,
  Identifiers,
  KeymapOptions,
  SuggestOptions,
  UpdatableViewProps,
} from './builtins';
export {
  AttributesExtension,
  BuiltinPreset,
  CommandsExtension,
  HelpersExtension,
  InputRulesExtension,
  KeymapExtension,
  NodeViewsExtension,
  PasteRulesExtension,
  PluginsExtension,
  SchemaExtension,
  SuggestExtension,
  TagsExtension,
} from './builtins';

export { toggleMark } from './commands';

export type { ExtensionDecoratorOptions, PresetDecoratorOptions } from './decorators';
export { extensionDecorator, presetDecorator } from './decorators';

export type {
  AttributePropFunction,
  BaseListenerParameter,
  CreateStateFromContent,
  EditorWrapperOutput,
  EditorWrapperParameter,
  EditorWrapperProps,
  FocusType,
  ListenerParameter,
  PlaceholderConfig,
  RemirrorEventListener,
  RemirrorEventListenerParameter,
  RemirrorGetterParameter,
  TriggerChangeParameter,
  UpdateStateParameter,
} from './editor-wrapper';
export { EditorWrapper } from './editor-wrapper';

export type {
  AnyExtension,
  AnyExtensionConstructor,
  AnyManagerStore,
  AnyMarkExtension,
  AnyNodeExtension,
  AnyPlainExtension,
  ChainedCommandRunParameter,
  ChainedFromExtensions,
  ChainedIntersection,
  CommandNames,
  CommandsFromExtensions,
  DefaultExtensionOptions,
  Extension,
  ExtensionConstructor,
  ExtensionConstructorParameter,
  ExtensionListParameter,
  ExtensionTags,
  GetExtensionUnion,
  GetMarkNameUnion,
  GetNodeNameUnion,
  GetPlainNames,
  HelperNames,
  HelpersFromExtensions,
  ManagerStoreKeys,
  MapHelpers,
  SchemaFromExtensionUnion,
} from './extension';
export {
  isExtension,
  isExtensionConstructor,
  isMarkExtension,
  isNodeExtension,
  isPlainExtension,
  isValidExtensionConstructor,
  MarkExtension,
  mutateDefaultExtensionOptions,
  NodeExtension,
  PlainExtension,
} from './extension';

export type {
  AddCustomHandler,
  AddHandler,
  BaseClass,
  BaseClassConstructor,
  CustomHandlerMethod,
  HandlerKeyOptions,
} from './extension/base-class';

export type {
  AnyRemirrorManager,
  GetCombined,
  ManagerEvents,
  RemirrorManagerParameter,
} from './manager';
export { isRemirrorManager, RemirrorManager } from './manager';

export type {
  ActiveFromCombined,
  AnyCombinedUnion,
  AnyPreset,
  AnyPresetConstructor,
  ChainedFromCombined,
  CombinedUnion,
  CommandsFromCombined,
  DefaultPresetOptions,
  GetPresetUnion,
  HelpersFromCombined,
  InferCombinedExtensions,
  InferCombinedPresets,
  PresetConstructor,
  PresetConstructorParameter,
  PresetListParameter,
  PresetParameter,
  SchemaFromCombined,
} from './preset';
export { isPreset, isPresetConstructor, Preset } from './preset';

export { editorStyles } from './styles';

export type {
  BaseExtensionOptions,
  ChangedOptions,
  CommandShape,
  CreatePluginReturn,
  DynamicOptionsOfConstructor,
  ExcludeOptions,
  ExtensionCommandFunction,
  ExtensionCommandReturn,
  ExtensionHelperReturn,
  ExtensionStore,
  GeneralExtensionTags,
  GetChangeOptionsReturn,
  GetCommands,
  GetConstructor,
  GetExtensions,
  GetHelpers,
  GetNameUnion,
  GetOptions,
  GetSchema,
  MarkExtensionTags,
  NodeExtensionTags,
  OnSetOptionsParameter,
  OptionsOfConstructor,
  PickChanged,
  StateUpdateLifecycleParameter,
  UpdateReason,
  UpdateReasonParameter,
} from './types';
