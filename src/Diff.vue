<template>
  <div class="vue-diff-wrapper" :class="`vue-diff-mode-${mode} vue-diff-theme-${theme}`">
    <div ref="viewer" class="vue-diff-viewer">
      <table>
        <tbody>
          <Line
            :key="index"
            v-for="(data, index) in lines"
            :mode="mode"
            :language="language"
            :data="data"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { renderLines } from './utils'
import Line from './Line.vue'

import type { Mode, Theme, Lines } from './utils'

export default defineComponent({
  components: {
    Line
  },
  props: {
    mode: {
      type: String as PropType<Mode>,
      default: 'split'
    },
    theme: {
      type: String as PropType<Theme>,
      default: 'dark'
    },
    language: {
      type: String,
      default: 'plaintext'
    },
    prev: {
      type: String,
      default: ''
    },
    current: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    const lines = ref<Array<Lines>>([])

    watch([
      () => props.mode,
      () => props.prev,
      () => props.current
    ], () => {
      const render = renderLines(props.mode, props.prev, props.current)

      if (render.length > 1000) {
        console.warn('Comparison of many lines is not recommended because rendering delays occur.')
      }

      lines.value = render
    }, { immediate: true })

    return { lines }
  }
})
</script>
