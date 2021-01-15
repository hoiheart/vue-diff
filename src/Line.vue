<template>
  <!-- split view -->
  <tr v-if="mode === 'split'" :class="`vue-diff-row-${mode}`">
    <template :key="index" v-for="(line, index) in data">
      <td class="lineNum" :class="`vue-diff-cell-${line.type}`">
        {{ line.lineNum }}
      </td>
      <td class="code" :class="`vue-diff-cell-${line.type}`">
        <Code
          :language="language"
          :code="setCode(line, data, index)"
        />
      </td>
    </template>
  </tr>
  <!-- // split view -->
  <!-- unified view -->
  <template v-if="mode === 'unified'">
    <tr :class="`vue-diff-row-${mode}`">
      <td class="lineNum" :class="`vue-diff-cell-${data[0].type}`">
        {{ data[0].lineNum }}
      </td>
      <td class="code" :class="`vue-diff-cell-${data[0].type}`">
        <Code
          :language="language"
          :code="setCode(line)"
        />
      </td>
    </tr>
  </template>
  <!-- // unified view -->
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Code from './Code.vue'
import { renderWords } from './utils'

import type { Mode, Lines, Line } from './utils'

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
    data: {
      type: Object as PropType<Lines>,
      required: true
    }
  },
  setup () {
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

    return { setCode }
  }
})
</script>
