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

<style scoped lang="scss">
td {
  padding: 0 0.5em;
  vertical-align: top;

  &.lineNum {
    width: 3.5em;
    padding-top: .05em;
    text-align: right;
    color: #999;
    font-size: 0.9em;
  }

  pre[class*="language-"]:before {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.8;
  }

  pre[class*="language-"] {
    display: block;
    position: relative;
    max-width: 100%;
    margin: 0;
    padding: 0;
    padding-left: 1.5em;
    overflow: visible;
    background: none;
    border-radius: 0;
  }
}

td.vue-diff-cell-removed {
  background-color: rgba(255, 0, 0, .1);

  :deep(.modified) {
    background-color: rgba(255, 0, 0, .2);
  }
}

td.vue-diff-cell-removed.code {
  pre[class*="language-"]:before {
    content: "-";
  }
}

td.vue-diff-cell-added {
  background-color: rgba(0, 255, 128, .1);

  :deep(.modified) {
    background-color: rgba(0, 255, 128, .2);
  }
}

td.vue-diff-cell-added.code {
  pre[class*="language-"]:before {
    content: "+";
  }
}

td.vue-diff-cell-disabled {
  background-color: rgba(128, 128, 128, 0.1);
}
</style>
