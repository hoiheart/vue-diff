<template>
  <div ref="viewer" class="vue-diff-viewer">
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
import { defineComponent, ref, PropType } from 'vue'
import { renderLines } from './utils'
import Code from './Code.vue'

import type { Role } from './utils'

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
    const diff = Diff.diffLines(props.prev, props.current)
    const lines = ref(renderLines(props.role, diff))

    return { lines }
  }
})
</script>

<style scoped lang="scss">
.vue-diff-viewer {
  overflow: hidden;
  padding: 1em 0;
  border-radius: 0.3em;
}

table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
}
</style>
