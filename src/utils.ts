import Prism, { Languages } from 'prismjs'
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

const getLines = (diffsMap: Array<Diffs>) => {
  const result: any = [] // Array(0): prev, Array(1): current
  const lineNum = {
    prev: 0,
    current: 0
  }

  diffsMap.map((diff) => {
    if (diff.length < 2) {
      diff.push({ ...diff[0] })
    }

    const prevLines = diff[0].value.replace(/\n$/, '').split('\n')
    const currentLines = diff[1].value.replace(/\n$/, '').split('\n')
    const loopCount = Math.max(prevLines.length, currentLines.length)

    for (let i = 0; i < loopCount; i++) {
      const hasPrevLine = typeof prevLines[i] !== 'undefined'
      const hasCurrentLine = typeof currentLines[i] !== 'undefined'

      if (hasPrevLine) lineNum.prev = lineNum.prev + 1
      if (hasCurrentLine) lineNum.current = lineNum.current + 1

      result.push([
        {
          type: hasPrevLine ? getDiffType(diff[0]) : 'disabled',
          lineNum: hasPrevLine ? lineNum.prev : undefined,
          value: hasPrevLine ? prevLines[i] : undefined
        },
        {
          type: hasCurrentLine ? getDiffType(diff[1]) : 'disabled',
          lineNum: hasCurrentLine ? lineNum.current : undefined,
          value: hasCurrentLine ? currentLines[i] : undefined
        }
      ])
    }
  })

  return result
}

const renderLines = (prev: string, current: string): () => Array<Lines> => {
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

  return getLines(diffsMap)
}

export { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, renderLines }
export type { Mode, Role, Change, Lines, Line }
