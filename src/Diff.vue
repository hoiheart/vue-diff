<template>
  <div
    class="vue-diff-wrapper"
    :class="`vue-diff-mode-${mode} vue-diff-theme-${theme}`"
  >
    <div
      ref="viewer"
      class="vue-diff-viewer"
      :style="{ height: viewerHeight ? viewerHeight + 'px' : undefined }"
    >
      <div
        class="vue-diff-viewer-inner"
        :style="{ minHeight: innerMinHeight ? innerMinHeight + 'px' : undefined }"
      >
        <Line
          :key="index"
          v-for="(data, index) in visibleData"
          :index="index"
          :mode="mode"
          :language="language"
          :data="data"
          :virtualScroll="virtualScroll"
          @set-line-height="setLineHeight"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch, onMounted, onBeforeUnmount, computed, readonly, toRaw } from 'vue'
import throttle from 'lodash-es/throttle'
import { renderLines, renderWords } from './utils'
import Line from './Line.vue'

import type { Mode, Theme, Lines } from './utils'

interface VirtualScroll {
  height?: number;
  lineMinHeight?: number;
}

interface Data {
  key: number;
  render: Lines;
  top?: number;
  height?: number;
}

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
    virtualScroll: {
      type: false || Object as PropType<VirtualScroll>,
      default: false
    }
  },
  setup (props) {
    const viewer = ref<null|HTMLElement>(null)
    const source = ref<Array<Data>>([])
    const visibleData = ref<Array<Data>>([])
    const heightList = ref<Array<number>>([])

    const viewerHeight = computed(() => {
      if (!props.virtualScroll) return false
      return props.virtualScroll.height || 500
    })

    const innerMinHeight = computed(() => {
      if (!props.virtualScroll) return false
      return heightList.value.reduce((acc, curr) => acc + curr, 0)
    })

    const getVisibleData = () => {
      if (!viewer.value || !viewerHeight.value) return []

      const result: Data[] = []
      const start = viewer.value.scrollTop - viewerHeight.value
      const end = viewer.value.scrollTop + viewerHeight.value * 2

      heightList.value.reduce((acc, curr, index: number) => {
        if (acc >= start && acc <= end) {
          result.push({
            key: index,
            render: source.value[index].render,
            top: acc,
            height: 24
          })
        }

        return acc + curr
      }, 0)

      return result
    }

    const handleScroll = () => {
      visibleData.value = getVisibleData()
    }

    const setLineHeight = (index: number, height: number) => {
      const item = source.value.find(item => item.key === index)
      if (item) {
        item.height = height
      }
    }

    onMounted(() => {
      if (!viewer.value) return
      viewer.value.addEventListener('scroll', throttle(handleScroll, 500))

      watch([
        () => props.mode,
        () => props.prev,
        () => props.current
      ], () => {
        source.value = renderLines(props.mode, props.prev, props.current).map((render, index) => {
          return {
            key: index,
            render,
            height: 24
          }
        })

        if (!props.virtualScroll) {
          if (source.value.length > 500) {
            console.warn('If there are many lines, please use virtualScroll property.')
          }

          visibleData.value = source.value
        } else {
          visibleData.value = getVisibleData()
        }
      }, { immediate: true })
    })

    onBeforeUnmount(() => {
      if (!viewer.value) return
      viewer.value.removeEventListener('scroll', throttle(handleScroll, 500))
    })

    return {
      visibleData,
      viewer,
      viewerHeight,
      innerMinHeight,
      setLineHeight
    }
  }
})
</script>
