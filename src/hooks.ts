import {
  computed,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
} from 'vue';
import { useThrottleFn, debouncedWatch } from '@vueuse/core';
import { renderLines } from './utils';

import type { ComputedRef, Ref } from 'vue';
import type { Mode, Theme, Meta, Lines, VirtualScroll } from './types';

interface Props {
  mode: Mode;
  theme: Theme;
  language: string;
  prev: string;
  current: string;
  folding: boolean;
  inputDelay: number;
  virtualScroll: boolean | VirtualScroll;
}

export const useRender = (
  props: Props,
  viewer: Ref<null | HTMLElement>,
  scrollOptions: ComputedRef<false | VirtualScroll>,
) => {
  const render = ref<Array<Lines>>([]);
  const meta = ref<Array<Meta>>([]);
  const list = computed(() =>
    meta.value.filter(item => {
      return props.folding ? !item.foldable && item.visible : item.visible;
    }),
  );

  const setRender = () => {
    const result = renderLines(props.mode, props.prev, props.current);
    render.value = result;
    meta.value.splice(render.value.length);

    render.value.map((v, index: number) => {
      const item = meta.value[index];
      const foldable =
        props.folding &&
        v[0].type === 'equal' &&
        render.value[index - 1]?.[0].type === 'equal';

      const values = {
        index,
        foldable,
        visible: true,
      };

      if (scrollOptions.value) {
        meta.value[index] = {
          ...values,
          visible: item?.visible || false,
          top: item?.top || undefined,
          height: item?.height || scrollOptions.value.lineMinHeight,
        };
      } else {
        meta.value[index] = { ...values };
      }
    });
  };

  debouncedWatch(
    [
      () => props.mode,
      () => props.prev,
      () => props.current,
      () => props.folding,
    ],
    setRender,
    {
      debounce: props.inputDelay,
      immediate: true,
    },
  );

  return {
    meta,
    render,
    list,
  };
};

export const useVirtualScroll = (
  props: Props,
  viewer: Ref<null | HTMLElement>,
  scrollOptions: ComputedRef<false | VirtualScroll>,
  meta: Ref<Array<Meta>>,
) => {
  const minHeight = computed(() => {
    if (!scrollOptions.value) return undefined;
    const reduce = meta.value.reduce((acc, curr) => {
      curr.top = acc;
      return curr.foldable ? acc : acc + (curr.height as number);
    }, 0);
    return reduce + 'px';
  });

  const setMeta = () => {
    if (!viewer.value || !scrollOptions.value) return;
    const scrollTop = viewer.value.scrollTop;
    const height = scrollOptions.value.height;
    const min = scrollTop - height * 1.5;
    const max = scrollTop + height + height * 1.5;

    meta.value.reduce((acc, curr) => {
      if (acc >= min && acc <= max) {
        curr.visible = true;
      } else {
        curr.visible = false;
      }

      curr.top = acc;
      return curr.foldable ? acc : acc + (curr.height as number);
    }, 0);
  };

  debouncedWatch(
    [
      () => props.mode,
      () => props.prev,
      () => props.current,
      () => props.folding,
    ],
    () => nextTick(setMeta),
    {
      debounce: props.inputDelay,
      immediate: true,
    },
  );

  onMounted(() => {
    if (!scrollOptions.value) return;
    viewer.value?.addEventListener(
      'scroll',
      useThrottleFn(setMeta, scrollOptions.value.delay),
    );
  });

  onBeforeUnmount(() => {
    if (!scrollOptions.value) return;
    viewer.value?.removeEventListener(
      'scroll',
      useThrottleFn(setMeta, scrollOptions.value.delay),
    );
  });

  watch(scrollOptions, (val, prev) => {
    if (!prev && val) {
      viewer.value?.addEventListener(
        'scroll',
        useThrottleFn(setMeta, val.delay),
      );
    }
    if (prev && !val) {
      viewer.value?.removeEventListener(
        'scroll',
        useThrottleFn(setMeta, prev.delay),
      );
    }
  });

  return {
    minHeight,
  };
};
