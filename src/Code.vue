<template>
  <tr :class="`vue-diff-row vue-diff-row-${data.type}`">
    <td class="lineNum">
      {{ data.lineNum }}
    </td>
    <td ref="code" class="code">
      <pre><code :class="`language-${language}`" v-html="data.value"></code></pre>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from 'vue'
import { Prism } from './index'
import { Line } from './utils'

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
  setup () {
    const code = ref(null)

    onMounted(() => {
      Prism.highlightAllUnder(code.value as unknown as HTMLElement)
    })

    return { code }
  }
})
</script>

<style scoped lang="scss">
td {
  padding: 0 10px;

  &.lineNum {
    width: 2em;
    text-align: right;
    color: #999;
    font-size: 0.9em;
  }
}

pre[class*="language-"] {
  padding: 0;
  margin: 0;
  overflow: auto;
  background: none;
  border-radius: 0;
}

tr.vue-diff-row-removed td {
  background-color: rgba(255, 0, 0, .1);

  :deep(.token.modified) {
    background-color: rgba(255, 0, 0, .3);
  }
}

tr.vue-diff-row-added td {
  background-color: rgba(0, 255, 128, .1);

  :deep(.token.modified) {
    background-color: rgba(0, 255, 128, .3);
  }
}
</style>
