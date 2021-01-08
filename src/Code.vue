<template>
  <tr v-if="mode === 'split'" :class="`vue-diff-row-${mode}`">
    <template :key="index" v-for="(line, index) in data">
      <td class="lineNum" :class="`vue-diff-cell-${line.type}`">
        {{ line.lineNum }}
      </td>
      <td class="code" :class="`vue-diff-cell-${line.type}`">
        <pre :class="`language-${language}`"><code
          :class="`language-${language}`"
          v-html="line.type.match(/added|removed/) ?
            getHighlightCode(line.value, data, index) :
            getHighlightCode(line.value)"
        ></code></pre>
      </td>
    </template>
  </tr>
  <template v-if="mode === 'unified'">
    <tr :class="`vue-diff-row-${mode}`">
      <td class="lineNum" :class="`vue-diff-cell-${data[0].type}`">
        {{ data[0].lineNum }}
      </td>
      <td class="code" :class="`vue-diff-cell-${data[0].type}`">
        <pre :class="`language-${language}`"><code :class="`language-${language}`" v-html="getHighlightCode(data[0].value)"></code></pre>
      </td>
    </tr>
  </template>
</template>

<script lang="ts">
import Prism from 'prismjs'
import { defineComponent, PropType } from 'vue'
import { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, renderWords } from './utils'

import type { Mode, Lines } from './utils'

// @ts-ignore
Prism.manual = true

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
      type: Object as PropType<Lines>,
      required: true
    }
  },
  setup (props) {
    const getHighlightCode = (value: string, data?: Lines, index?: number) => {
      if (!value) return '\n'

      const code = value

      // if (data) { // Diff words
      //   const diffIndex = index === 0 ? 1 : 0
      //   const diffValue = data[diffIndex].value

      //   if (diffValue) { // Wrap custom highlight
      //     code = renderWords(diffValue, value)
      //   }
      // }

      const grammar = Prism.languages[props.language]
      const highlightCode = Prism.highlight(code, grammar, props.language)

      return highlightCode
    }

    return {
      getHighlightCode
    }
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

  code {
    word-wrap: break-all !important;
    word-break: break-all !important;
    white-space: pre-wrap !important;
  }
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
