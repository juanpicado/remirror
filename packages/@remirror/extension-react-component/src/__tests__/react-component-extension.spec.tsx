import { RemirrorTestChain } from 'jest-remirror';
import React, { ComponentType } from 'react';

import {
  ApplySchemaAttributes,
  convertCommand,
  NodeExtension,
  NodeExtensionSpec,
  NodeGroup,
} from '@remirror/core';
import { setBlockType } from '@remirror/pm/commands';
import { isExtensionValid } from '@remirror/testing';
import { act, createReactManager, RemirrorProvider, render } from '@remirror/testing/react';

import { ReactComponentExtension } from '..';
import { NodeViewComponentProps } from '../node-view-types';

test('is valid', () => {
  expect(isExtensionValid(ReactComponentExtension, {}));
});

class TestExtension extends NodeExtension<{ useContent: boolean }> {
  get name(): string {
    return 'test' as const;
  }

  createNodeSpec(extra: ApplySchemaAttributes): NodeExtensionSpec {
    return {
      attrs: {
        ...extra.defaults(),
        custom: { default: 'custom' },
      },
      content: 'inline*',
      group: NodeGroup.Block,
      toDOM: (node) => {
        if (this.options.useContent) {
          return ['nav', extra.dom(node), 0];
        }

        return ['nav', extra.dom(node)];
      },
    };
  }

  createCommands = () => {
    return {
      toggleCustomBlock: () => convertCommand(setBlockType(this.type, {})),
    };
  };

  ReactComponent: ComponentType<NodeViewComponentProps> = ({ node, forwardRef }) => {
    if (this.options.useContent) {
      return <p {...node.attrs} ref={forwardRef} />;
    }

    return <div>Ignore content</div>;
  };
}

test('NodeViews are created with content', () => {
  const chain = RemirrorTestChain.create(
    createReactManager([new ReactComponentExtension(), new TestExtension({ useContent: true })]),
  );

  render(
    <RemirrorProvider manager={chain.manager}>
      <div />
    </RemirrorProvider>,
  );
  const { doc } = chain.nodes;
  const { test } = chain.attributeNodes;

  act(() => {
    chain.add(doc(test({ custom: 'awesome' })('content<cursor>'))).insertText(' hello world');
  });

  expect(chain.dom).toMatchSnapshot();
});

test('NodeViews are created without content', () => {
  const chain = RemirrorTestChain.create(
    createReactManager([new ReactComponentExtension(), new TestExtension({ useContent: false })]),
  );

  render(
    <RemirrorProvider manager={chain.manager}>
      <div />
    </RemirrorProvider>,
  );

  const { doc } = chain.nodes;
  const { test } = chain.attributeNodes;

  act(() => {
    chain.add(doc(test({ custom: 'awesome' })('content<cursor>'))).insertText('hello world');
  });

  expect(chain.dom).toMatchSnapshot();
});

test('node views can be created from commands', () => {
  const chain = RemirrorTestChain.create(
    createReactManager([new ReactComponentExtension(), new TestExtension({ useContent: true })]),
  );

  render(
    <RemirrorProvider manager={chain.manager}>
      <div />
    </RemirrorProvider>,
  );

  const { doc, p } = chain.nodes;

  act(() => {
    chain.add(doc(p('content<cursor>'))).insertText('hello world\nasdf');
    chain.commands.toggleCustomBlock();
  });

  expect(chain.dom).toMatchSnapshot();
});
