import Prism from 'prismjs'
import * as Diff from 'diff'

import type { Change } from 'diff'

type Mode = 'split' | 'unified'
type Role = 'prev' | 'current' | 'unified'

interface Line {
  type: 'added' | 'removed' | 'equal' | 'disabled';
  lineNum?: number;
  value?: string;
}

type Lines = Array<Line>
type Diffs = Array<Change>

// @ts-ignore
Prism.manual = true

const MODIFIED_START_TAG = '<span class="token modified">'
const MODIFIED_CLOSE_TAG = '</span>'

function getDiffType (diff: Change) {
  if (!diff.count) return 'disabled'
  return diff.added ? 'added' : diff.removed ? 'removed' : 'equal'
}

const renderLine = (diffWords: Array<Change>) => {
  return diffWords.filter(word => getDiffType(word) !== 'removed').map(word => {
    const type = getDiffType(word)

    if (type === 'added') {
      return `${MODIFIED_START_TAG}${word.value}${MODIFIED_CLOSE_TAG}`
    } else {
      return word.value
    }
  }).join('')
}

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

      result.push([
        {
          type: getDiffType(diffs[0]),
          lineNum: hasPrevLine ? lineNum.prev : undefined,
          value: hasPrevLine ? prevLines[i] : undefined
        },
        {
          type: getDiffType(diffs[1]),
          lineNum: hasCurrentLine ? lineNum.current : undefined,
          value: hasCurrentLine ? currentLines[i] : undefined
        }
      ])
    }
  })

  return result
}

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

const renderLines = (mode: Mode, prev: string, current: string): Array<Lines> => {
  const diffsMap = Diff.diffLines(prev, current).reduce((acc: Array<Diffs>, curr) => {
    const type = getDiffType(curr)

    if (type === 'equal') {
      acc.push([curr])
    }

    if (type === 'removed') {
      acc.push([curr])
    }

    if (type === 'added') {
      if (acc[acc.length - 1][0].removed) {
        acc[acc.length - 1].push(curr)
      } else {
        acc.push([curr])
      }
    }

    return acc
  }, [])

  diffsMap.map((diffs) => {
    if (diffs.length > 1) return

    const type = getDiffType(diffs[0])

    if (type === 'added') {
      diffs.unshift({ value: '' })
    } else if (type === 'removed') {
      diffs.push({ value: '' })
    } else if (type === 'equal') {
      diffs.push({ ...diffs[0] })
    }
  })

  if (mode === 'split') {
    return getSplitLines(diffsMap)
  } else if (mode === 'unified') {
    return getUnifiedLines(diffsMap)
  } else {
    return []
  }
}

export { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, renderLines }
export type { Mode, Role, Change, Lines, Line }
