<template>
  <div
    ref="line"
    class="vue-diff-row"
    :class="`vue-diff-row-${mode}`"
    :style="virtualScroll ? {
      position: 'absoltue',
      minHeight: virtualScroll.minHeight + 'px'
    } : undefined">
    <!-- split view -->
    <template v-if="mode === 'split'">
      <template :key="index" v-for="(line, index) in data.render">
        <div class="lineNum" :class="`vue-diff-cell-${line.type}`">
          {{ line.lineNum }}
        </div>
        <div class="code" :class="`vue-diff-cell-${line.type}`">
          <Code
            :language="language"
            :code="setCode(line, data.render, index)"
            @rendered="rendered"
          />
        </div>
      </template>
    </template>
    <!-- // split view -->
    <!-- unified view -->
    <template v-if="mode === 'unified'">
      <div class="lineNum" :class="`vue-diff-cell-${data.render[0].type}`">
        {{ data.render[0].lineNum }}
      </div>
      <div class="code" :class="`vue-diff-cell-${data.render[0].type}`">
        <Code
          :language="language"
          :code="setCode(data.render[0])"
          @rendered="rendered"
        />
      </div>
    </template>
    <!-- // unified view -->
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, ref } from 'vue'
import Code from './Code.vue'
import { renderWords } from './utils'

import type { Mode, Lines, Line } from './utils'

interface Data {
  key: number;
  render: Lines;
  top?: number;
  height?: number;
}

export default defineComponent({
  components: {
    Code
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    mode: {
      type: String as PropType<Mode>,
      required: true
    },
    language: {
      type: String,
      required: true
    },
    data: {
      type: Object as PropType<Lines>,
      required: true
    },
    virtualScroll: {},
    lineInfo: {}
  },
  emits: ['setLineHeight'],
  setup (props, { emit }) {
    const line = ref<null|HTMLElement>(null)
    const setCode = (line: Line, data?: Lines, index?: number) => {
      if (!line.value) return '\n'

      // Compare lines when data, index properties exist and has chkWords value in line property
      if (typeof data === 'undefined' || typeof index === 'undefined' || !line.chkWords) {
        return line.value
      }

      const differ = data[index === 0 ? 1 : 0]

      if (!differ.value) return line.value

      return renderWords(differ.value, line.value) // render with modified tags
    }

    const rendered = () => {
      if (!line.value) return
      emit('setLineHeight', props.index, line.value.offsetHeight)
    }

    return { line, setCode, rendered }
  }
})
</script>
