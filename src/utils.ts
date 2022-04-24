import { diff_match_patch as DiffMatchPatch } from 'diff-match-patch';
import hljs from './highlight';

import type { Ref } from 'vue';
import type { Diffs, Lines, Mode } from './types';

const MODIFIED_START_TAG = '<vue-diff-modified>';
const MODIFIED_CLOSE_TAG = '</vue-diff-modified>';

enum DiffType {
  removed = -1,
  equal = 0,
  added = 1,
  disabled = 2,
}

/**
 * Get diff type
 * @param diff
 */
const getDiffType = (type: DiffType) => {
  if (!DiffType[type]) return 'disabled';
  return DiffType[type];
};

/**
 * Get lines object on the split mode
 * @param diffsMap
 */
const getSplitLines = (diffsMap: Array<Diffs>): Array<Lines> => {
  const result: Array<Lines> = []; // Array(0): prev, Array(1): current
  const lineNum = {
    prev: 0,
    current: 0,
  };

  diffsMap.map(diffs => {
    const prevLines = diffs[0][1].replace(/\n$/, '').split('\n');
    const currentLines = diffs[1][1].replace(/\n$/, '').split('\n');
    const loopCount = Math.max(prevLines.length, currentLines.length);

    for (let i = 0; i < loopCount; i++) {
      const hasPrevLine =
        getDiffType(diffs[0][0]) !== 'disabled' &&
        typeof prevLines[i] !== 'undefined';
      const hasCurrentLine =
        getDiffType(diffs[1][0]) !== 'disabled' &&
        typeof currentLines[i] !== 'undefined';

      if (hasPrevLine) lineNum.prev = lineNum.prev + 1;
      if (hasCurrentLine) lineNum.current = lineNum.current + 1;

      const chkWords = Boolean(
        getDiffType(diffs[0][0]).match(/added|removed/) &&
          getDiffType(diffs[1][0]).match(/added|removed/),
      );

      result.push([
        {
          type: hasPrevLine ? getDiffType(diffs[0][0]) : 'disabled',
          lineNum: hasPrevLine ? lineNum.prev : undefined,
          value: hasPrevLine ? prevLines[i] : undefined,
          chkWords,
        },
        {
          type: hasCurrentLine ? getDiffType(diffs[1][0]) : 'disabled',
          lineNum: hasCurrentLine ? lineNum.current : undefined,
          value: hasCurrentLine ? currentLines[i] : undefined,
          chkWords,
        },
      ]);
    }
  });

  return result;
};

/**
 * Get lines object on the unified mode
 * @param diffsMap
 */
const getUnifiedLines = (diffsMap: Array<Diffs>): Array<Lines> => {
  const result: Array<Lines> = []; // Array(0)
  let lineNum = 0;

  diffsMap.map(diffs => {
    const prevLines = diffs[0][1].replace(/\n$/, '').split('\n');
    const currentLines = diffs[1][1].replace(/\n$/, '').split('\n');

    prevLines.map(value => {
      const type = getDiffType(diffs[0][0]);

      if (type !== 'removed') return;

      result.push([
        {
          type: getDiffType(diffs[0][0]),
          lineNum: undefined,
          value: value,
        },
      ]);
    });

    currentLines.map(value => {
      const type = getDiffType(diffs[1][0]);

      if (type === 'disabled') return;

      lineNum = lineNum + 1;

      result.push([
        {
          type: getDiffType(diffs[1][0]),
          lineNum,
          value: value,
        },
      ]);
    });
  });

  return result;
};

/**
 * Render of objects separated by lines
 * @param mode
 * @param prev
 * @param current
 */
const renderLines = (
  mode: Mode,
  prev: string,
  current: string,
): Array<Lines> => {
  function diffLines(prev: string, current: string) {
    const dmp = new DiffMatchPatch();
    const a = dmp.diff_linesToChars_(prev, current);
    const linePrev = a.chars1;
    const lineCurrent = a.chars2;
    const lineArray = a.lineArray;
    const diffs = dmp.diff_main(linePrev, lineCurrent, false);
    dmp.diff_charsToLines_(diffs, lineArray);
    return diffs;
  }

  /**
   * stacked prev, current data
   */
  const diffsMap = diffLines(prev, current).reduce(
    (acc: Array<Diffs>, curr) => {
      const type = getDiffType(curr[0]);

      if (type === 'equal') {
        acc.push([curr]); // Push index 0
      }

      if (type === 'removed') {
        acc.push([curr]); // Push index 0
      }

      if (type === 'added') {
        const prev =
          acc.length && acc[acc.length - 1][0] ? acc[acc.length - 1][0] : null;
        if (prev && getDiffType(prev[0]) === 'removed') {
          acc[acc.length - 1].push(curr); // Push index 1 if index 0 has removed data in last array
        } else {
          acc.push([curr]); // Push index 0
        }
      }

      return acc;
    },
    [],
  );

  /**
   * Set index 1 in stacked data
   */
  diffsMap.map(diffs => {
    if (diffs.length > 1) return; // Return if has index 0, 1

    const type = getDiffType(diffs[0][0]);

    if (type === 'added') {
      diffs.unshift([2, '']); // Set empty data
    } else if (type === 'removed') {
      diffs.push([2, '']); // Set empty data
    } else if (type === 'equal') {
      diffs.push([...diffs[0]]); // Set same data
    }
  });

  /**
   * Get lines object on the mode
   */
  if (mode === 'split') {
    return getSplitLines(diffsMap);
  } else if (mode === 'unified') {
    return getUnifiedLines(diffsMap);
  } else {
    return [];
  }
};

/**
 * Render with modified tags
 * @param prev
 * @param current
 */
const renderWords = (prev: string, current: string) => {
  /**
   * Set modified tags in changed words (removed -> added)
   */
  const dmp = new DiffMatchPatch();
  const diff = dmp.diff_main(prev, current);
  dmp.diff_cleanupSemantic(diff);
  return diff
    .filter(result => getDiffType(result[0]) !== 'removed')
    .map(result => {
      return getDiffType(result[0]) === 'added'
        ? `${MODIFIED_START_TAG}${result[1]}${MODIFIED_CLOSE_TAG}`
        : result[1];
    })
    .join('');
};

/**
 * Set hightlight code
 * This function must calling at client only (use DOM)
 */
const setHighlightCode = ({
  highlightCode,
  language,
  code,
}: {
  highlightCode: Ref;
  language: string;
  code: string;
}) => {
  const hasModifiedTags = code.match(
    new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'),
  );

  if (!hasModifiedTags) {
    highlightCode.value = hljs.highlight(code, { language }).value;
    return;
  }

  /**
   * Explore highlight DOM extracted from pure code and compare the text with the original code code to generate the highlight code
   */
  let originalCode = code; // original code with modified tags
  const pureCode = code.replace(
    new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'),
    '',
  ); // Without modified tags
  let pureElement = document.createElement('div');
  pureElement.innerHTML = hljs.highlight(pureCode, { language }).value; // Highlight DOM without modified tags

  // Modified span is created per highlight operator and causes it to continue
  let innerModifiedTag = false;

  const diffElements = (node: HTMLElement) => {
    node.childNodes.forEach(child => {
      if (child.nodeType === 1) {
        diffElements(child as HTMLElement);
      }

      // Compare text nodes and check changed text
      if (child.nodeType === 3) {
        if (!child.textContent) return;

        let oldContent = child.textContent;
        let newContent = '';

        if (innerModifiedTag) {
          // If it continues within the modified range
          newContent = newContent + MODIFIED_START_TAG;
        }

        while (oldContent.length) {
          if (originalCode.startsWith(MODIFIED_START_TAG)) {
            // Add modified start tag
            originalCode = originalCode.slice(MODIFIED_START_TAG.length);
            newContent = newContent + MODIFIED_START_TAG;
            innerModifiedTag = true; // Start modified
            continue;
          }
          if (originalCode.startsWith(MODIFIED_CLOSE_TAG)) {
            // Add modified close tag
            originalCode = originalCode.slice(MODIFIED_CLOSE_TAG.length);
            newContent = newContent + MODIFIED_CLOSE_TAG;
            innerModifiedTag = false; // End modified
            continue;
          }

          // Add words before modified tag
          const hasModifiedTag = originalCode.match(
            new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`),
          );
          const originalCodeDiffLength =
            hasModifiedTag && hasModifiedTag.index
              ? hasModifiedTag.index
              : originalCode.length;
          const nextDiffsLength = Math.min(
            originalCodeDiffLength,
            oldContent.length,
          );

          newContent = newContent + originalCode.substring(0, nextDiffsLength);
          originalCode = originalCode.slice(nextDiffsLength);
          oldContent = oldContent.slice(nextDiffsLength);
        }

        if (innerModifiedTag) {
          // If the loop is finished without a modified close, it is still within the modified range.
          newContent = newContent + MODIFIED_CLOSE_TAG;
        }

        child.textContent = newContent; // put as entity code because change textContent
      }
    });
  };
  diffElements(pureElement);

  const startEntity = MODIFIED_START_TAG.replace('<', '&lt;').replace(
    '>',
    '&gt;',
  );
  const closeEntity = MODIFIED_CLOSE_TAG.replace('<', '&lt;').replace(
    '>',
    '&gt;',
  );

  highlightCode.value = pureElement.innerHTML
    .replace(new RegExp(startEntity, 'g'), '<span class="modified">')
    .replace(new RegExp(closeEntity, 'g'), '</span>');

  // @ts-ignore
  pureElement = null;
};

export {
  MODIFIED_START_TAG,
  MODIFIED_CLOSE_TAG,
  getDiffType,
  getSplitLines,
  getUnifiedLines,
  renderLines,
  renderWords,
  setHighlightCode,
};
