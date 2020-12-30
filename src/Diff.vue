<template>
  <div class="vue-diff-wrapper">
    <Viewer :language="language" v-bind="{...left}" />
    <Viewer :language="language" v-bind="{...right}" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Diff from 'diff'
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
    left: {
      type: Object,
      required: true,
      code: {
        type: String,
        required: true
      }
    },
    right: {
      type: Object,
      required: true,
      code: {
        type: String,
        required: true
      }
    }
  },
  setup (props) {
    const diff = Diff.diffLines(props.left.code, props.right.code)
    console.log(diff)
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
