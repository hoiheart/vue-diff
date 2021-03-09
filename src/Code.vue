<template>
  <pre><code class="hljs" v-html="highlightCode"></code></pre>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch, nextTick } from 'vue'
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
  emits: ['rendered'],
  setup (props, { emit }) {
    const highlightCode = ref('')

    onMounted(() => {
      watch(() => props.code, () => {
        setHighlightCode({
          highlightCode,
          language: props.language,
          code: props.code
        })

        nextTick(() => emit('rendered'))
      }, { immediate: true })
    })

    return {
      highlightCode
    }
  }
})
</script>
