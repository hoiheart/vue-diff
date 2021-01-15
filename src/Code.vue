<template>
  <pre><code class="hljs" v-html="highlightCode"></code></pre>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
import { setHighlightCode } from './utils'

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
