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
import { defineComponent, ref, PropType } from 'vue'
import { renderLines } from './utils'
import Code from './Code.vue'

import type { Type, Change } from './utils'

export default defineComponent({
  components: {
    Code
  },
  props: {
    type: {
      type: String as PropType<Type>,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    diffs: {
      type: Array as PropType<Array<Change>>,
      required: true
    }
  },
  setup (props) {
    const lines = ref(renderLines(props.type, props.diffs))

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
