<template>
  <tr v-if="mode === 'split'">
    <template :key="index" v-for="(line, index) in data">
      <td class="lineNum" :class="`vue-diff-cell-${line.type}`">
        {{ line.lineNum }}
      </td>
      <td class="code" :class="`vue-diff-cell-${line.type}`">
        <pre :class="`language-${language}`"><code :class="`language-${language}`" v-html="getHighlight(line.value)"></code></pre>
      </td>
    </template>
  </tr>
  <template v-if="mode === 'unified'">
    <template :key="index" v-for="(line, index) in data">
      <tr v-if="!getSkipUnified(line, index)">
        <td class="lineNum" :class="`vue-diff-cell-${line.type}`">
          {{ index === 1 ? line.lineNum : undefined }}
        </td>
        <td class="code" :class="`vue-diff-cell-${line.type}`">
          <pre :class="`language-${language}`"><code :class="`language-${language}`" v-html="getHighlight(line.value)"></code></pre>
        </td>
      </tr>
    </template>
  </template>
</template>

<script lang="ts">
import Prism from 'prismjs'
import { defineComponent, PropType, ref, computed } from 'vue'
import { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG } from './utils'

import type { Mode, Lines, Line } from './utils'

export default defineComponent({
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
      type: Object as PropType<Array<Lines>>,
      required: true
    }
  },
  setup (props) {
    const getSkipUnified = (line: Line, index: number) => {
      return ((index === 0 && line.type === 'equal') || line.type === 'disabled')
    }

    const getHighlight = (value: string) => {
      if (!value) return '\n'

      console.log(Prism.highlight(value, Prism.languages[props.language], props.language))
      return Prism.highlight(value, Prism.languages[props.language], props.language)
      // .replace(new RegExp(`${MODIFIED_START_TAG}`, 'gi'), '<span class="token modified">')
      // .replace(new RegExp(`${MODIFIED_CLOSE_TAG}`, 'gi'), '</span>')
    }
    return { getSkipUnified, getHighlight }
  }
})
</script>

<style scoped lang="scss">
td {
  padding: 0 0.5em;

  &.lineNum {
    width: 2em;
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
}

pre[class*="language-"] {
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  padding-left: 1.5em;
  overflow: visible;
  background: none;
  border-radius: 0;
}

td.vue-diff-cell-removed {
  background-color: rgba(255, 0, 0, .1);

  :deep(.token.modified) {
    background-color: rgba(255, 0, 0, .3);
  }
}

td.vue-diff-cell-removed.code {
  pre[class*="language-"]:before {
    content: "-";
  }
}

td.vue-diff-cell-added {
  background-color: rgba(0, 255, 128, .1);

  :deep(.token.modified) {
    background-color: rgba(0, 255, 128, .3);
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
