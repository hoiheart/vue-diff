import { computed, onBeforeUnmount, onMounted, toRaw } from 'vue'
import throttle from 'lodash-es/throttle'

import type { ComputedRef, Ref } from 'vue'
import type { Meta, Lines, VirtualScroll } from './types'

type UseVirtualScroll = (params: {
  viewer: Ref<null|HTMLElement>;
  virtualScroll: boolean|VirtualScroll;
  meta: Ref<Array<Meta>>;
  render: Ref<Array<Lines>>;
}) => {
  minHeight: ComputedRef<null|number>;
  scrollOptions: ComputedRef<null|VirtualScroll>;
  setMeta: () => void;
}

export const useVirtualScroll: UseVirtualScroll = ({ viewer, virtualScroll, meta }) => {
  const scrollOptions = computed(() => {
    if (!virtualScroll) return null
    return {
      height: 500,
      lineMinHeight: 24,
      scrollDelay: 250,
      ...(typeof virtualScroll === 'object' ? toRaw(virtualScroll) : {})
    }
  })

  const minHeight = computed(() => {
    if (!scrollOptions.value) return null
    return meta.value.reduce((acc, curr) => {
      curr.top = acc
      return acc + curr.height
    }, 0)
  })

  const setMeta = () => {
    console.log('setMeta')
    if (!viewer.value || !scrollOptions.value) return
    const start = viewer.value.scrollTop - scrollOptions.value.height * 1.5
    const end = viewer.value.scrollTop + scrollOptions.value.height + scrollOptions.value.height * 1.5

    meta.value.reduce((acc, curr) => {
      if (acc >= start && acc <= end) {
        curr.visible = true
      } else {
        curr.visible = false
      }

      curr.top = acc
      return acc + curr.height
    }, 0)
  }

  onMounted(() => {
    if (!scrollOptions.value) return
    viewer.value?.addEventListener('scroll', throttle(setMeta, scrollOptions.value.scrollDelay))
    setMeta()
  })

  onBeforeUnmount(() => {
    if (!scrollOptions.value) return
    viewer.value?.removeEventListener('scroll', throttle(setMeta, scrollOptions.value.scrollDelay))
  })

  return {
    minHeight,
    scrollOptions,
    setMeta
  }
}
