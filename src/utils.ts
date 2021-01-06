import * as Diff from 'diff'

import type { Change } from 'diff'

type Type = 'split' | 'unified'
type Role = 'prev' | 'current' | 'unified'

interface Line {
  type: 'added' | 'removed' | 'equal';
  lineNum?: number;
  value: string;
}

const MODIFIED_TAG = 'vue-diff-modified'

function getDiffType (diff: Change) {
  return diff.added ? 'added' : diff.removed ? 'removed' : 'equal'
}

const renderLine = (diffWords: Array<Change>) => {
  return diffWords.filter(word => getDiffType(word) !== 'removed').map(word => {
    const type = getDiffType(word)

    if (type === 'added') {
      return `<${MODIFIED_TAG}>${word.value}</${MODIFIED_TAG}>`
    } else {
      return word.value
    }
  }).join('')
}

const renderPrev = (diffs: Array<Change>) => {
  const result: Array<Line> = []
  let lineNum = 0

  diffs.map((diff, index) => {
    const type = getDiffType(diff)
    const prevDiff = index > 0 ? diffs[index - 1] : null
    const nextDiff = index < diffs.length - 1 ? diffs[index + 1] : null
    const isModifiedLine = nextDiff && diff.count === 1 && nextDiff.count === 1 && type === 'removed' && nextDiff.added
    const isUnuseLine = prevDiff && diff.count === 1 && prevDiff.count === 1 && type === 'added' && prevDiff.removed

    if (isUnuseLine) return

    if (isModifiedLine) {
      const diffWords = Diff.diffWords((nextDiff as Change).value, diff.value)
      diff.value = renderLine(diffWords)
    }

    diff.value.replace(/\n$/, '').split('\n').map((value) => {
      const skip = type === 'added'

      if (!skip) {
        lineNum = lineNum + 1
      }

      result.push({
        type,
        lineNum: skip ? undefined : lineNum,
        value: skip ? '\n' : value
      })
    })
  })

  return result
}

const renderCurrent = (diffs: Array<Change>) => {
  const result: Array<Line> = []
  let lineNum = 0

  diffs.map((diff, index) => {
    const type = getDiffType(diff)
    const prevDiff = index > 0 ? diffs[index - 1] : null
    const nextDiff = index < diffs.length - 1 ? diffs[index + 1] : null
    const isModifiedLine = prevDiff && diff.count === 1 && prevDiff.count === 1 && type === 'added' && prevDiff.removed
    const isUnuseLine = nextDiff && diff.count === 1 && nextDiff.count === 1 && type === 'removed' && nextDiff.added

    if (isUnuseLine) return

    if (isModifiedLine) {
      const diffWords = Diff.diffWords((prevDiff as Change).value, diff.value)
      diff.value = renderLine(diffWords)
    }

    diff.value.replace(/\n$/, '').split('\n').map((value) => {
      const skip = type === 'removed'

      if (!skip) {
        lineNum = lineNum + 1
      }

      result.push({
        type,
        lineNum: skip ? undefined : lineNum,
        value: skip ? '\n' : value
      })
    })
  })

  return result
}

const renderUnified = (diffs: Array<Change>) => {
  const result: Array<Line> = []
  let lineNum = 0

  diffs.map((diff, index) => {
    const type = getDiffType(diff)
    const prevDiff = index > 0 ? diffs[index - 1] : null
    const nextDiff = index < diffs.length - 1 ? diffs[index + 1] : null
    const isModifiedPrevLine = nextDiff && diff.count === 1 && nextDiff.count === 1 && type === 'removed' && nextDiff.added
    const isModifiedCurrentLine = prevDiff && diff.count === 1 && prevDiff.count === 1 && type === 'added' && prevDiff.removed

    if (isModifiedPrevLine) {
      const diffWords = Diff.diffWords((nextDiff as Change).value, diff.value)
      diff.value = renderLine(diffWords)
    }

    if (isModifiedCurrentLine) {
      const diffWords = Diff.diffWords((prevDiff as Change).value, diff.value)
      diff.value = renderLine(diffWords)
    }

    diff.value.replace(/\n$/, '').split('\n').map((value) => {
      const skip = type === 'removed'

      if (!skip) {
        lineNum = lineNum + 1
      }

      result.push({
        type,
        lineNum: skip ? undefined : lineNum,
        value
      })
    })
  })

  return result
}

const renderLines = (role: Role, diffs: Array<Change>) => {
  const deepCopy = JSON.parse(JSON.stringify(diffs))

  if (role === 'prev') {
    return renderPrev(deepCopy)
  } else if (role === 'current') {
    return renderCurrent(deepCopy)
  } else if (role === 'unified') {
    return renderUnified(deepCopy)
  } else {
    return []
  }
}

export { MODIFIED_TAG, renderLines }
export type { Type, Role, Change, Line }
