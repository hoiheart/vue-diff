<template>
  <pre><code class="hljs" v-html="highlightCode"></code></pre>
</template>

<script lang="ts">
import { highlight } from 'highlight.js'
import { defineComponent, ref, onMounted, watch } from 'vue'
import { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG } from './utils'

import type { Ref } from 'vue'

/**
 * Set hightlight code
 * This function must calling at client only (use DOM)
 */
const setHighlightCode = ({ highlightCode, language, code }: { highlightCode: Ref; language: string; code: string }) => {
  const hasModifiedTags = code.match(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'))

  if (!hasModifiedTags) {
    highlightCode.value = highlight(language, code).value
    return
  }

  /**
   * Explore highlight DOM extracted from pure code and compare the text with the original code code to generate the highlight code
   */
  let originalCode = code // original code with modified tags
  const pureCode = code.replace(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'), '') // Without modified tags
  let pureElement = document.createElement('div')
  pureElement.innerHTML = highlight(language, pureCode).value // Highlight DOM without modified tags

  const diffElements = (node: HTMLElement) => {
    node.childNodes.forEach(child => {
      if (child.nodeType === 1) {
        diffElements(child as HTMLElement)
      }

      // Compare text nodes and check changed text
      if (child.nodeType === 3) {
        if (!child.textContent) return

        let oldContent = child.textContent
        let newContent = ''

        while (oldContent.length) {
          if (originalCode.startsWith(MODIFIED_START_TAG)) { // Add modified start tag
            originalCode = originalCode.slice(MODIFIED_START_TAG.length)
            newContent = newContent + MODIFIED_START_TAG
            continue
          }
          if (originalCode.startsWith(MODIFIED_CLOSE_TAG)) { // Add modified close tag
            originalCode = originalCode.slice(MODIFIED_CLOSE_TAG.length)
            newContent = newContent + MODIFIED_CLOSE_TAG
            continue
          }

          // Add words before modified tag
          const hasModifiedTag = originalCode.match(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`))
          const originalCodeDiffLength = hasModifiedTag && hasModifiedTag.index ? hasModifiedTag.index : originalCode.length
          const nextDiffsLength = Math.min(originalCodeDiffLength, oldContent.length)

          newContent = newContent + originalCode.substring(0, nextDiffsLength)
          originalCode = originalCode.slice(nextDiffsLength)
          oldContent = oldContent.slice(nextDiffsLength)
        }

        child.textContent = newContent // put as entity code because change textContent
      }
    })
  }
  diffElements(pureElement)

  const startEntity = MODIFIED_START_TAG.replace('<', '&lt;').replace('>', '&gt;')
  const closeEntity = MODIFIED_CLOSE_TAG.replace('<', '&lt;').replace('>', '&gt;')

  highlightCode.value = pureElement.innerHTML
    .replace(new RegExp(startEntity, 'g'), '<span class="modified">')
    .replace(new RegExp(closeEntity, 'g'), '</span>')

  // @ts-ignore
  pureElement = null
}

export default defineComponent({
  props: {
    language: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const highlightCode = ref('')

    onMounted(() => {
      watch(() => props.code, () => {
        setHighlightCode({
          highlightCode,
          language: props.language,
          code: props.code
        })
      }, { immediate: true })
    })

    return {
      highlightCode
    }
  }
})
</script>
