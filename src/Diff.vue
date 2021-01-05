<template>
  <div class="vue-diff-wrapper">
    <!-- <Viewer type="unified" :language="language" :diffLines="diffLines" /> -->
    <Viewer type="prev" :language="language" :diffs="diffs" />
    <Viewer type="current" :language="language" :diffs="diffs" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import * as Diff from 'diff'
import Viewer from './Viewer.vue'

export default defineComponent({
  components: {
    Viewer
  },
  props: {
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
    const diffs = reactive(Diff.diffLines(props.prev, props.current))

    return { diffs }
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
  width: calc(50% - 10px);
}
</style>
