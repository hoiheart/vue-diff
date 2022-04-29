import type { Ref } from 'vue';
import type { Diffs, Lines, Mode } from './types';
declare const MODIFIED_START_TAG = "<vue-diff-modified>";
declare const MODIFIED_CLOSE_TAG = "</vue-diff-modified>";
declare enum DiffType {
    removed = -1,
    equal = 0,
    added = 1,
    disabled = 2
}
/**
 * Get diff type
 * @param diff
 */
declare const getDiffType: (type: DiffType) => string;
/**
 * Get lines object on the split mode
 * @param diffsMap
 */
declare const getSplitLines: (diffsMap: Array<Diffs>) => Array<Lines>;
/**
 * Get lines object on the unified mode
 * @param diffsMap
 */
declare const getUnifiedLines: (diffsMap: Array<Diffs>) => Array<Lines>;
/**
 * Render of objects separated by lines
 * @param mode
 * @param prev
 * @param current
 */
declare const renderLines: (mode: Mode, prev: string, current: string) => Array<Lines>;
/**
 * Render with modified tags
 * @param prev
 * @param current
 */
declare const renderWords: (prev: string, current: string) => string;
/**
 * Set hightlight code
 * This function must calling at client only (use DOM)
 */
declare const setHighlightCode: ({ highlightCode, language, code, }: {
    highlightCode: Ref;
    language: string;
    code: string;
}) => void;
export { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, getDiffType, getSplitLines, getUnifiedLines, renderLines, renderWords, setHighlightCode, };
