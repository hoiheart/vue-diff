<template>
  <tr :class="`vue-diff-row vue-diff-row-${data.type}`">
    <td class="lineNum">
      {{ data.lineNum }}
    </td>
    <td class="code">
      <pre :class="`language-${language}`"><code ref="codeRef" :class="`language-${language}`" v-html="code || '\n'"></code></pre>
    </td>
  </tr>
</template>

<script lang="ts">
import Prism from 'prismjs'
import { defineComponent, PropType, ref, computed } from 'vue'
import { MODIFIED_START_TAG, MODIFIED_CLOSE_TAG, Line } from './utils'

// @ts-ignore
Prism.manual = true

export default defineComponent({
  props: {
    data: {
      type: Object as PropType<Line>,
      required: true
    },
    language: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const codeRef = ref(null)
    const code = computed(() => {
      return Prism.highlight(props.data.value, Prism.languages[props.language], props.language)
        .replace(new RegExp(`${MODIFIED_START_TAG}`, 'gi'), '<span class="token modified">')
        .replace(new RegExp(`${MODIFIED_CLOSE_TAG}`, 'gi'), '</span>')
    })

    return { codeRef, code }
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

tr.vue-diff-row-removed td {
  background-color: rgba(255, 0, 0, .1);

  :deep(.token.modified) {
    background-color: rgba(255, 0, 0, .3);
  }

  pre[class*="language-"]:before {
    content: "-";
  }
}

.vue-diff-viewer-prev {
  tr.vue-diff-row-added td {
    background-color: rgba(128, 128, 128, 0.1);

    pre[class*="language-"]:before {
      display: none;
    }
  }
}

tr.vue-diff-row-added td {
  background-color: rgba(0, 255, 128, .1);

  :deep(.token.modified) {
    background-color: rgba(0, 255, 128, .3);
  }

  pre[class*="language-"]:before {
    content: "+";
  }
}

.vue-diff-viewer-current {
  tr.vue-diff-row-removed td {
    background-color: rgba(128, 128, 128, 0.1);

    pre[class*="language-"]:before {
      display: none;
    }
  }
}
</style>
