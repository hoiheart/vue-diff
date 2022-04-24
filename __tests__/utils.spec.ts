import { nextTick } from 'vue';
import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import {
  MODIFIED_START_TAG,
  MODIFIED_CLOSE_TAG,
  getDiffType,
  getSplitLines,
  getUnifiedLines,
  renderLines,
  renderWords,
  setHighlightCode,
} from '../src/utils';

import type { Diff } from 'diff-match-patch';

describe('Utils unit', () => {
  // diff-match-patch output
  const added: Diff = [1, ''];
  const removed: Diff = [-1, ''];
  const equal: Diff = [0, ''];
  // custom output
  const disabled: Diff = [2, ''];

  const prev: Diff = [-1, 'a\nb'];
  const curr: Diff = [1, 'c'];

  const diffsMap = [[prev, curr]];

  it('getDiffType', () => {
    expect(getDiffType(added[0])).toBe('added');
    expect(getDiffType(removed[0])).toBe('removed');
    expect(getDiffType(equal[0])).toBe('equal');
    expect(getDiffType(disabled[0])).toBe('disabled');
  });

  it('getSplitLines', () => {
    const result = getSplitLines(diffsMap);
    expect(result.length).toBe(2);
    expect(result[0][0].type).toBe('removed');
    expect(result[0][0].lineNum).toBe(1);
    expect(result[0][0].value).toBe('a');
    expect(result[0][0].chkWords).toBe(true);
  });

  it('getUnifiedLines', () => {
    const result = getUnifiedLines(diffsMap);
    expect(result.length).toBe(3);
    expect(result[0][0].type).toBe('removed');
    expect(result[0][0].lineNum).toBe(undefined);
    expect(result[0][0].value).toBe('a');
    expect(result[1][0].type).toBe('removed');
    expect(result[1][0].lineNum).toBe(undefined);
    expect(result[1][0].value).toBe('b');
    expect(result[2][0].type).toBe('added');
    expect(result[2][0].lineNum).toBe(1);
    expect(result[2][0].value).toBe('c');
  });

  it('getUnifiedLines', () => {
    const split = renderLines('split', prev[1], curr[1]);
    const unified = renderLines('unified', prev[1], curr[1]);
    expect(split.length).toBe(2);
    expect(unified.length).toBe(3);
  });

  it('renderWords', () => {
    expect(renderWords('abc', 'abc')).toBe('abc');
    expect(renderWords('abc', 'acc')).toBe(
      `a${MODIFIED_START_TAG}c${MODIFIED_CLOSE_TAG}c`,
    );
  });

  // it('setHighlightCode', async () => {
  //   const highlightCode = ref('');

  //   setHighlightCode({
  //     highlightCode,
  //     language: 'plaintext',
  //     code: `a ${MODIFIED_START_TAG}c${MODIFIED_CLOSE_TAG} c`,
  //   });

  //   expect(highlightCode.value).toBe('a <span class="modified">c</span> c');
  // });
});
