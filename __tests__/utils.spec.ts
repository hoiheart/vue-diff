import { ref } from 'Vue'
import { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, getDiffType, getSplitLines, getUnifiedLines, renderLines, renderWords, setHighlightCode } from '../src/utils'

describe('Utils unit', () => {
  const added = {
    count: 1,
    added: true,
    removed: undefined,
    value: ''
  }

  const removed = {
    count: 1,
    added: undefined,
    removed: true,
    value: ''
  }

  const equal = {
    count: 1,
    added: undefined,
    removed: undefined,
    value: ''
  }

  const disabled = {
    value: ''
  }

  const prev = 'a\nb'
  const curr = 'c'

  const diffsMap = [
    [
      {
        count: 2,
        added: undefined,
        removed: true,
        value: prev
      },
      {
        count: 1,
        added: true,
        removed: undefined,
        value: curr
      }
    ]
  ]

  it('getDiffType', () => {
    expect(getDiffType(added)).toBe('added')
    expect(getDiffType(removed)).toBe('removed')
    expect(getDiffType(equal)).toBe('equal')
    expect(getDiffType(disabled)).toBe('disabled')
  })

  it('getSplitLines', () => {
    const result = getSplitLines(diffsMap)
    expect(result.length).toBe(2)
    expect(result[0][0].type).toBe('removed')
    expect(result[0][0].lineNum).toBe(1)
    expect(result[0][0].value).toBe('a')
    expect(result[0][0].chkWords).toBe(false)
  })

  it('getUnifiedLines', () => {
    const result = getUnifiedLines(diffsMap)
    expect(result.length).toBe(3)
    expect(result[0][0].type).toBe('removed')
    expect(result[0][0].lineNum).toBe(undefined)
    expect(result[0][0].value).toBe('a')
    expect(result[1][0].type).toBe('removed')
    expect(result[1][0].lineNum).toBe(undefined)
    expect(result[1][0].value).toBe('b')
    expect(result[2][0].type).toBe('added')
    expect(result[2][0].lineNum).toBe(1)
    expect(result[2][0].value).toBe('c')
  })

  it('getUnifiedLines', () => {
    const split = renderLines('split', prev, curr)
    const unified = renderLines('unified', prev, curr)
    expect(split.length).toBe(2)
    expect(unified.length).toBe(3)
  })

  it('renderWords', () => {
    expect(renderWords('abc', 'abc')).toBe('abc')
    expect(renderWords('abc', 'acc')).toBe(`${MODIFIED_START_TAG}acc${MODIFIED_CLOSE_TAG}`)
    expect(renderWords('a b c', 'a c c')).toBe(`a ${MODIFIED_START_TAG}c${MODIFIED_CLOSE_TAG} c`)
  })

  it('setHighlightCode', () => {
    const highlightCode = ref('')

    setHighlightCode({
      highlightCode,
      language: 'plaintext',
      code: `a ${MODIFIED_START_TAG}c${MODIFIED_CLOSE_TAG} c`
    })

    expect(highlightCode.value).toBe('a <span class="modified">c</span> c')
  })
})
