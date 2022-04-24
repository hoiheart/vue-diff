<template>
  <pre><code class="hljs" v-html="highlightCode"></code></pre>
</template>

<script lang="ts">
import { defineComponent, nextTick, onMounted, ref, watch } from 'vue';
import { setHighlightCode } from './utils';

import type { PropType } from 'vue';
import type { VirtualScroll } from './types';

export default defineComponent({
  props: {
    language: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    scrollOptions: {
      type: [Boolean, Object] as PropType<false | VirtualScroll>,
      default: false,
    },
  },
  emits: ['rendered'],
  setup(props, { emit }) {
    const highlightCode = ref('');

    onMounted(() => {
      watch(
        [() => props.language, () => props.code],
        () => {
          setHighlightCode({
            highlightCode,
            language: props.language,
            code: props.code,
          });

          nextTick(() => emit('rendered'));
        },
        { immediate: true },
      );

      watch(
        [() => props.scrollOptions],
        () => {
          nextTick(() => emit('rendered'));
        },
        { deep: true },
      );
    });

    return {
      highlightCode,
    };
  },
});
</script>
