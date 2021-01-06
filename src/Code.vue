<template>
  <tr :class="`vue-diff-row vue-diff-row-${data.type}`">
    <td class="lineNum">
      {{ data.lineNum }}
    </td>
    <td class="code">
      <pre><code ref="codeRef" :class="`language-${language}`" v-html="code"></code></pre>
    </td>
  </tr>
</template>

<script lang="ts">
// @ts-ignore
import { encode } from 'html-entities'
import { defineComponent, PropType, ref, onMounted, watch, nextTick, computed } from 'vue'
import { Prism } from './index'
import { MODIFIED_TAG, Line } from './utils'

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
      return encode(props.data.value)
        .replace(new RegExp(`&lt;${MODIFIED_TAG}&gt;`, 'gi'), '<span class="token modified">')
        .replace(new RegExp(`&lt;/${MODIFIED_TAG}&gt;`, 'gi'), '</span>')
    })

    onMounted(() => {
      watch(() => props.data.value, () => {
        nextTick(() => Prism.highlightElement(codeRef.value as unknown as HTMLElement))
      }, { immediate: true })
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
