<template>
  <pre :class="`language-${language}`"><code
    :class="`language-${language}`"
    v-html="code"
  ></code></pre>
</template>

<script lang="ts">
import hljs from 'highlight.js'
import { defineComponent, ref, onMounted } from 'vue'
import { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG } from './utils'
import 'highlight.js/styles/monokai.css'

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

    const pureValue = props.value.replace(new RegExp(`(${MODIFIED_START_TAG}|${MODIFIED_CLOSE_TAG})`, 'g'), '')
    code.value = hljs.highlight(props.language, pureValue).value

    onMounted(() => {
      const el = document.createElement('div')
      el.innerHTML = code.value

      console.log(el.childNodes)
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
