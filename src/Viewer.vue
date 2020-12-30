<template>
  <div ref="viewer" class="vue-diff-viewer">
    <pre class="line-numbers"><code :class="`language-${language} language-diff-${language} diff-highlight`">{{ code }}</code></pre>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { Prism } from './index'

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
  setup () {
    const viewer = ref(null)

    onMounted(() => {
      // @ts-ignore
      Prism.manual = true
      Prism.highlightAllUnder(viewer.value as unknown as HTMLElement)
    })

    return { viewer }
  }
})
</script>
