<template>
  <div
    class="vue-diff-wrapper"
    :class="`vue-diff-mode-${mode} vue-diff-theme-${theme}`"
  >
    <div
      ref="viewer"
      class="vue-diff-viewer"
      :style="{ height: scrollOptions ? scrollOptions.height + 'px' : undefined }"
    >
      <div
        class="vue-diff-viewer-inner"
        :style="{ minHeight: minHeight ? minHeight + 'px' : undefined }"
      >
        <Line
          v-for="(data, index) in visible"
          :key="index"
          :mode="mode"
          :language="language"
          :meta="meta[data.index]"
          :render="render[data.index]"
          :virtualScroll="scrollOptions"
          @setLineHeight="setLineHeight"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watch
} from 'vue'
import debounce from 'lodash-es/debounce'
import { useVirtualScroll } from './hooks'
import { renderLines } from './utils'
import Line from './Line.vue'

import type { PropType } from 'vue'
import type { Meta, VirtualScroll, Mode, Theme, Lines } from './types'

export default defineComponent({
  components: {
    Line
  },
  props: {
    mode: {
      type: String as PropType<Mode>,
      default: 'split'
    },
    theme: {
      type: String as PropType<Theme>,
      default: 'dark'
    },
    language: {
      type: String,
      default: 'plaintext'
    },
    prev: {
      type: String,
      default: ''
    },
    current: {
      type: String,
      default: ''
    },
    inputDelay: {
      type: Number,
      default: 0
    },
    virtualScroll: {
      type: [Boolean, Object] as PropType<boolean|VirtualScroll>,
      default: false
    }
  },
  setup (props) {
    const viewer = ref<null|HTMLElement>(null)
    const meta = ref<Array<Meta>>([])
    const render = ref<Array<Lines>>([])
    const visible = computed(() => meta.value.filter(item => item.visible))
    const { minHeight, scrollOptions, setMeta } = useVirtualScroll({
      meta,
      viewer,
      virtualScroll: props.virtualScroll,
      render
    })

    const setData = () => {
      render.value = renderLines(props.mode, props.prev, props.current)
      meta.value.splice(render.value.length)
      render.value.map((v, index: number) => {
        const item = meta.value[index]
        meta.value[index] = {
          index,
          visible: item?.visible || !props.virtualScroll,
          top: item?.top || undefined,
          height: item?.height || 24
        }
      })
      setMeta()
    }

    onMounted(() => {
      watch(
        [
          () => props.mode,
          () => props.prev,
          () => props.current
        ],
        debounce(setData, props.inputDelay),
        {
          immediate: true,
          deep: true
        }
      )
    })

    const setLineHeight = (index: number, height: number) => {
      if (meta.value[index]) {
        meta.value[index].height = height
      }
    }

    return {
      meta,
      minHeight,
      render,
      scrollOptions,
      setLineHeight,
      viewer,
      visible
    }
  }
})
</script>
