import type { Ref } from 'vue';
import type { Change } from 'diff';
declare type Mode = 'split' | 'unified';
declare type Theme = 'dark' | 'light' | 'custom';
declare type Role = 'prev' | 'current' | 'unified';
interface Line {
    type: 'added' | 'removed' | 'equal' | 'disabled';
    lineNum?: number;
    value?: string;
    chkWords?: boolean;
}
declare type Lines = Array<Line>;
declare type Diffs = Array<Change>;
declare const MODIFIED_START_TAG = "<vue-diff-modified>";
declare const MODIFIED_CLOSE_TAG = "</vue-diff-modified>";
/**
 * Get diff type
 * @param diff
 */
declare const getDiffType: (diff: Change) => "added" | "removed" | "equal" | "disabled";
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
declare const setHighlightCode: ({ highlightCode, language, code }: {
    highlightCode: Ref;
    language: string;
    code: string;
}) => void;
export { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, getDiffType, getSplitLines, getUnifiedLines, renderLines, renderWords, setHighlightCode };
export type { Mode, Theme, Role, Change, Lines, Line };
