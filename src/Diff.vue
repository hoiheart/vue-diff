<template>
  <div class="vue-diff-wrapper" :class="`vue-diff-wrapper-${type}`">
    <template v-if="type === 'unified'">
      <Viewer role="unified" :language="language" :prev="prev" :current="current" />
    </template>
    <template v-else>
      <Viewer role="prev" :language="language" :prev="prev" :current="current" />
      <Viewer role="current" :language="language" :prev="prev" :current="current" />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Viewer from './Viewer.vue'

import { Type } from './utils'

export default defineComponent({
  components: {
    Viewer
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
    prev: {
      type: String,
      required: true
    },
    current: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">
.vue-diff-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.vue-diff-wrapper-split .vue-diff-viewer {
  width: calc(50% - 10px);
}
</style>
