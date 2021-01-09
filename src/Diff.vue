<template>
  <div class="vue-diff-wrapper" :class="`vue-diff-wrapper-${mode}`">
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

import type { Mode, Lines } from './utils'

export default defineComponent({
  components: {
    Line
  },
  props: {
    mode: {
      type: String as PropType<Mode>,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    prev: {
      type: String,
      required: true
    },
    current: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const lines = ref<Array<Lines>>([])

    watch([
      () => props.mode,
      () => props.prev,
      () => props.current
    ], () => {
      lines.value = renderLines(props.mode, props.prev, props.current)
    }, { immediate: true })

    return { lines }
  }
})
</script>

<style scoped lang="scss">
.vue-diff-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.vue-diff-viewer {
  width: 100%;
  padding: 1em 0;
  border-radius: 0.3em;
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
</style>
