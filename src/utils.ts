import * as Diff from 'diff'

import type { Change } from 'diff'

type Mode = 'split' | 'unified'
type Theme = 'dark' | 'light' | 'custom'
type Role = 'prev' | 'current' | 'unified'

interface Line {
  type: 'added' | 'removed' | 'equal' | 'disabled';
  lineNum?: number;
  value?: string;
  chkWords?: boolean;
}

type Lines = Array<Line>
type Diffs = Array<Change>

const MODIFIED_START_TAG = '<vue-diff-modified>'
const MODIFIED_CLOSE_TAG = '</vue-diff-modified>'

/**
 * Get diff type
 * @param diff
 */
const getDiffType = (diff: Change) => {
  if (!diff.count) return 'disabled'
  return diff.added ? 'added' : diff.removed ? 'removed' : 'equal'
}

/**
 * Get lines object on the split mode
 * @param diffsMap
 */
const getSplitLines = (diffsMap: Array<Diffs>): Array<Lines> => {
  const result: Array<Lines> = [] // Array(0): prev, Array(1): current
  const lineNum = {
    prev: 0,
    current: 0
  }

  diffsMap.map((diffs) => {
    const prevLines = diffs[0].value.replace(/\n$/, '').split('\n')
    const currentLines = diffs[1].value.replace(/\n$/, '').split('\n')
    const loopCount = Math.max(prevLines.length, currentLines.length)

    for (let i = 0; i < loopCount; i++) {
      const hasPrevLine = getDiffType(diffs[0]) !== 'disabled'
      const hasCurrentLine = getDiffType(diffs[1]) !== 'disabled'

      if (hasPrevLine) lineNum.prev = lineNum.prev + 1
      if (hasCurrentLine) lineNum.current = lineNum.current + 1

      const chkWords = Boolean(diffs[0].count === diffs[1].count && getDiffType(diffs[0]).match(/added|removed/) && getDiffType(diffs[1]).match(/added|removed/))

      result.push([
        {
          type: getDiffType(diffs[0]),
          lineNum: hasPrevLine ? lineNum.prev : undefined,
          value: hasPrevLine ? prevLines[i] : undefined,
          chkWords
        },
        {
          type: getDiffType(diffs[1]),
          lineNum: hasCurrentLine ? lineNum.current : undefined,
          value: hasCurrentLine ? currentLines[i] : undefined,
          chkWords
        }
      ])
    }
  })

  return result
}

/**
 * Get lines object on the unified mode
 * @param diffsMap
 */
const getUnifiedLines = (diffsMap: Array<Diffs>): Array<Lines> => {
  const result: Array<Lines> = [] // Array(0)
  let lineNum = 0

  diffsMap.map((diffs) => {
    const prevLines = diffs[0].value.replace(/\n$/, '').split('\n')
    const currentLines = diffs[1].value.replace(/\n$/, '').split('\n')

    prevLines.map(value => {
      const type = getDiffType(diffs[0])

      if (type !== 'removed') return

      result.push([
        {
          type: getDiffType(diffs[0]),
          lineNum: undefined,
          value: value
        }
      ])
    })

    currentLines.map(value => {
      const type = getDiffType(diffs[1])

      if (type === 'disabled') return

      lineNum = lineNum + 1

      result.push([
        {
          type: getDiffType(diffs[1]),
          lineNum,
          value: value
        }
      ])
    })
  })

  return result
}

/**
 * Render of objects separated by lines
 * @param mode
 * @param prev
 * @param current
 */
const renderLines = (mode: Mode, prev: string, current: string): Array<Lines> => {
  /**
   * stacked prev, current data
   */
  const diffsMap = Diff.diffLines(prev, current).reduce((acc: Array<Diffs>, curr) => {
    const type = getDiffType(curr)

    if (type === 'equal') {
      acc.push([curr]) // Push index 0
    }

    if (type === 'removed') {
      acc.push([curr]) // Push index 0
    }

    if (type === 'added') {
      if (acc.length && acc[acc.length - 1][0] && acc[acc.length - 1][0].removed) {
        acc[acc.length - 1].push(curr) // Push index 1 if index 0 has removed data in last array
      } else {
        acc.push([curr]) // Push index 0
      }
    }

    return acc
  }, [])

  /**
   * Set index 1 in stacked data
   */
  diffsMap.map((diffs) => {
    if (diffs.length > 1) return // Return if has index 0, 1

    const type = getDiffType(diffs[0])

    if (type === 'added') {
      diffs.unshift({ value: '' }) // Set empty data
    } else if (type === 'removed') {
      diffs.push({ value: '' }) // Set empty data
    } else if (type === 'equal') {
      diffs.push({ ...diffs[0] }) // Set same data
    }
  })

  /**
   * Get lines object on the mode
   */
  if (mode === 'split') {
    return getSplitLines(diffsMap)
  } else if (mode === 'unified') {
    return getUnifiedLines(diffsMap)
  } else {
    return []
  }
}

/**
 * Render with modified tags
 * @param prev
 * @param current
 */
const renderWords = (prev: string, current: string) => {
  /**
   * Set modified tags in changed words (removed -> added)
   */
  return Diff.diffWords(prev, current).filter(word => getDiffType(word) !== 'removed').map(word => {
    return getDiffType(word) === 'added' ? `${MODIFIED_START_TAG}${word.value}${MODIFIED_CLOSE_TAG}` : word.value
  }).join('')
}

export { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, renderLines, renderWords }
export type { Mode, Theme, Role, Change, Lines, Line }
