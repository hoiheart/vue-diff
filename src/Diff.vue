<template>
  <div class="vue-diff-wrapper" :class="`vue-diff-wrapper-${mode}`">
    <template v-if="mode === 'unified'">
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

import { Mode } from './utils'

export default defineComponent({
  components: {
    Viewer
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
  }
})
</script>

<style scoped lang="scss">
.vue-diff-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
