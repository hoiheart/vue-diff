<template>
  <div
    ref="line"
    class="vue-diff-row"
    :class="`vue-diff-row-${mode}`"
    :style="rowStyle">
    <!-- split view -->
    <template v-if="mode === 'split'">
      <template :key="index" v-for="(line, index) in render">
        <div class="lineNum" :class="`vue-diff-cell-${line.type}`">
          {{ line.lineNum }}
        </div>
        <div class="code" :class="`vue-diff-cell-${line.type}`">
          <Code
            :language="language"
            :code="setCode(line, render, index)"
            :scrollOptions="scrollOptions"
            @rendered="rendered"
          />
        </div>
      </template>
    </template>
    <!-- // split view -->
    <!-- unified view -->
    <template v-if="mode === 'unified'">
      <div class="lineNum" :class="`vue-diff-cell-${render[0].type}`">
        {{ render[0].lineNum }}
      </div>
      <div class="code" :class="`vue-diff-cell-${render[0].type}`">
        <Code
          :language="language"
          :code="setCode(render[0])"
          :scrollOptions="scrollOptions"
          @rendered="rendered"
        />
      </div>
    </template>
    <!-- // unified view -->
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import Code from './Code.vue'
import { renderWords } from './utils'

import type { PropType } from 'vue'
import type { Meta, Mode, Lines, Line, VirtualScroll } from './types'

export default defineComponent({
  components: {
    Code
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
    meta: {
      type: Object as PropType<Meta>,
      required: true
    },
    render: {
      type: Object as PropType<Lines>,
      required: true
    },
    scrollOptions: {
      type: [Boolean, Object] as PropType<false|VirtualScroll>,
      default: false
    }
  },
  setup (props, { emit }) {
    const line = ref<null|HTMLElement>(null)
    const rowStyle = computed(() => {
      if (!props.scrollOptions) return undefined
      return {
        position: 'absolute',
        left: 0,
        top: 0,
        transform: `translate3d(0, ${props.meta.top}px, 0)`,
        minHeight: props.scrollOptions.lineMinHeight + 'px'
      }
    })

    const setCode = (line: Line, render?: Lines, index?: number) => {
      if (!line.value) return '\n'

      // Compare lines when render, index properties exist and has chkWords value in line property
      if (typeof render === 'undefined' || typeof index === 'undefined' || !line.chkWords) {
        return line.value
      }

      const differ = render[index === 0 ? 1 : 0]

      if (!differ.value) return line.value

      return renderWords(differ.value, line.value) // render with modified tags
    }

    const rendered = () => {
      if (!line.value) return
      emit('setLineHeight', props.meta.index, line.value.offsetHeight)
    }

    return { line, rendered, rowStyle, setCode }
  }
})
</script>
