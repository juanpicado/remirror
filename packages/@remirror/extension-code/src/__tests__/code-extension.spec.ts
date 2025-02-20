import { pmBuild } from 'jest-prosemirror';
import { extensionValidityTest } from 'jest-remirror';

import { fromHtml, toHtml } from '@remirror/core';
import { createCoreManager } from '@remirror/testing';

import { CodeExtension } from '..';

extensionValidityTest(CodeExtension);

describe('schema', () => {
  const codeTester = () => {
    const { schema } = createCoreManager([new CodeExtension()]);
    const { code, doc, p } = pmBuild(schema, {
      code: { markType: 'code' },
    });

    return { schema, code, doc, p };
  };

  it('returns the correct html', () => {
    const expected = 'Brilliant';
    const { p, code, schema } = codeTester();

    expect(toHtml({ node: p(code(expected)), schema })).toBe(`<p><code>${expected}</code></p>`);
  });

  it('it can parse content', () => {
    const { p, code, schema, doc } = codeTester();
    const parsedString = 'Test';
    const node = fromHtml({
      content: `<p><code>${parsedString}</code></p>`,
      schema,
    });
    const expected = doc(p(code(parsedString)));

    expect(node).toEqualProsemirrorNode(expected);
  });
});
