<template>
  <div ref="viewer" class="vue-diff-viewer" :class="`vue-diff-viewer-${role}`">
    <table>
      <tbody>
        <Code
          :key="index"
          v-for="(data, index) in lines"
          :language="language"
          :data="data"
        />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import * as Diff from 'diff'
import { defineComponent, ref, PropType, watch } from 'vue'
import { renderLines } from './utils'
import Code from './Code.vue'

import type { Role, Line } from './utils'

export default defineComponent({
  components: {
    Code
  },
  props: {
    role: {
      type: String as PropType<Role>,
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
    const lines = ref<Array<Line>>([])

    watch([() => props.prev, () => props.current], () => {
      const diff = Diff.diffLines(props.prev, props.current)
      lines.value = renderLines(props.role, diff)
    }, { immediate: true })

    return { lines }
  }
})
</script>

<style scoped lang="scss">
.vue-diff-wrapper-split {
  .vue-diff-viewer {
    width: calc(50% - 10px);
  }
}

.vue-diff-viewer {
  overflow: auto;
  width: 100%;
  padding: 1em 0;
  border-radius: 0.3em;
}

table {
  min-width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
</style>
