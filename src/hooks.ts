import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useThrottleFn, debouncedWatch } from '@vueuse/core'
import { renderLines } from './utils'

import type { ComputedRef, Ref } from 'vue'
import type { Mode, Theme, Meta, Lines, VirtualScroll } from './types'

interface Props {
  mode: Mode;
  theme: Theme;
  language: string;
  prev: string;
  current: string;
  inputDelay: number;
  virtualScroll: boolean|VirtualScroll;
}

export const useRender = (props: Props, viewer: Ref<null|HTMLElement>, scrollOptions: ComputedRef<false|VirtualScroll>) => {
  const render = ref<Array<Lines>>([])
  const meta = ref<Array<Meta>>([])
  const visible = computed(() => meta.value.filter(item => item.visible))

  const setRender = () => {
    const result = renderLines(props.mode, props.prev, props.current)
    render.value = result
    meta.value.splice(render.value.length)

    render.value.map((v, index: number) => {
      const item = meta.value[index]

      if (scrollOptions.value) {
        meta.value[index] = {
          index,
          visible: item?.visible || false,
          top: item?.top || undefined,
          height: item?.height || scrollOptions.value.lineMinHeight
        }
      } else {
        meta.value[index] = {
          index,
          visible: true
        }
      }
    })
  }

  debouncedWatch(
    [() => props.mode, () => props.prev, () => props.current],
    setRender,
    {
      debounce: props.inputDelay,
      immediate: true
    }
  )

  return {
    meta,
    render,
    visible
  }
}

export const useVirtualScroll = (props: Props, viewer: Ref<null|HTMLElement>, scrollOptions: ComputedRef<false|VirtualScroll>, meta: Ref<Array<Meta>>) => {
  const minHeight = computed(() => {
    if (!scrollOptions.value) return undefined
    const reduce = meta.value.reduce((acc, curr) => {
      curr.top = acc
      return acc + (curr.height as number)
    }, 0)
    return reduce + 'px'
  })

  const setMeta = () => {
    if (!viewer.value || !scrollOptions.value) return
    const scrollTop = viewer.value.scrollTop
    const height = scrollOptions.value.height
    const min = scrollTop - height * 1.5
    const max = scrollTop + height + height * 1.5

    meta.value.reduce((acc, curr) => {
      if (acc >= min && acc <= max) {
        curr.visible = true
      } else {
        curr.visible = false
      }

      curr.top = acc
      return acc + (curr.height as number)
    }, 0)
  }

  onMounted(() => {
    if (!scrollOptions.value) return
    viewer.value?.addEventListener('scroll', useThrottleFn(setMeta, scrollOptions.value.delay))

    debouncedWatch(
      [() => props.mode, () => props.prev, () => props.current],
      () => nextTick(setMeta),
      {
        debounce: props.inputDelay,
        immediate: true
      }
    )

    watch(
      [() => props.mode, () => props.prev, () => props.current],
      () => nextTick(setMeta),
      { immediate: true }
    )
  })

  onBeforeUnmount(() => {
    if (!scrollOptions.value) return
    viewer.value?.removeEventListener('scroll', useThrottleFn(setMeta, scrollOptions.value.delay))
  })

  return {
    minHeight
  }
}
