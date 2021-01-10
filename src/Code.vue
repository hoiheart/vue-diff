<template>
  <pre :class="`language-${language}`"><code
    :class="`language-${language}`"
    v-html="code"
  ></code></pre>
</template>

<script lang="ts">
import hljs from 'highlight.js'
import { defineComponent, ref, onMounted, watch } from 'vue'
import { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG } from './utils'
import 'highlight.js/styles/monokai.css'

hljs.configure({
  noHighlightRe: new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g')
})

function escapeHTML (value: string) {
  return value
  // .replace(/&/g, '&amp;')
  // .replace(/</g, '&lt;')
  // .replace(/>/g, '&gt;')
  // .replace(/"/g, '&quot;')
  // .replace(/'/g, '&#x27;')
}

export default defineComponent({
  props: {
    language: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const code = ref('')

    onMounted(() => {
      watch(() => props.value, () => {
        const hasModifyTags = props.value.match(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'))

        if (!hasModifyTags) {
          const { value: highlightCode } = hljs.highlight(props.language, props.value)
          code.value = highlightCode
          return
        }

        let highlightCode = ''
        const pureValue = props.value.replace(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'), '') // without modify tag

        const pureHighlightCode = hljs.highlight(props.language, pureValue).value
        let plainCode = escapeHTML(props.value)
        highlightCode = plainCode

        const pureEl = document.createElement('pre')
        pureEl.innerHTML = pureHighlightCode
        const plainEl = document.createElement('div')
        plainEl.innerHTML = plainCode

        function diff (node: HTMLElement) {
          node.childNodes.forEach(child => {
            if (child.nodeType === 1) {
              diff(child as HTMLElement)
            }
            if (child.nodeType === 3) {
              if (!child.textContent) return

              let text = escapeHTML(child.textContent)

              let code = ''

              while (text.length) {
                if (plainCode.startsWith(MODIFIED_START_TAG)) {
                  plainCode = plainCode.slice(MODIFIED_START_TAG.length)
                  code = code + MODIFIED_START_TAG
                  continue
                }
                if (plainCode.startsWith(MODIFIED_CLOSE_TAG)) {
                  plainCode = plainCode.slice(MODIFIED_CLOSE_TAG.length)
                  code = code + MODIFIED_CLOSE_TAG
                  continue
                }

                code = code + text[0]
                plainCode = plainCode.slice(1)
                text = text.slice(1)
              }

              child.textContent = code
            }
          })
        }
        diff(pureEl)

        const startEntity = MODIFIED_START_TAG.replace('<', '&lt;').replace('>', '&gt;')
        const closeEntity = MODIFIED_CLOSE_TAG.replace('<', '&lt;').replace('>', '&gt;')

        code.value = pureEl.innerHTML.replace(new RegExp(startEntity, 'g'), '<span class="modified">').replace(new RegExp(closeEntity, 'g'), '</span>')
      }, { immediate: true })
    })

    return {
      code
    }
  }
})
</script>

<style scoped lang="scss">
code {
  word-wrap: break-all !important;
  word-break: break-all !important;
  white-space: pre-wrap !important;
}
</style>
