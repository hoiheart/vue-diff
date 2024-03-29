<template>
  <div class="form text-gray-100 mt-8">
    <label for="language" class="mr-2">Type:</label>
    <select
      v-model="selected"
      id="language"
      class="bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300"
    >
      <option :key="item.title" :value="item" v-for="item in list">
        {{ item.title }}
      </option>
    </select>
    <label for="mode" class="mr-2">Mode:</label>
    <select
      v-model="mode"
      id="mode"
      class="bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300"
    >
      <option :key="val" v-for="val in modes">{{ val }}</option>
    </select>
    <label for="theme" class="mr-2">Theme:</label>
    <select
      v-model="theme"
      id="theme"
      class="bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300"
    >
      <option :key="val" v-for="val in themes">{{ val }}</option>
    </select>
    <label for="folding" class="mr-2">Folding:</label>
    <input
      v-model="folding"
      type="checkbox"
      id="folding"
      class="form-checkbox"
    />
  </div>
  <div class="editor text-gray-100 mt-8">
    <section>
      <h2 class="text-2xl font-bold mb-4">Editor</h2>
      <div>
        <h3 class="text-xl mb-4">Prev</h3>
        <textarea
          v-model="prev"
          class="bg-gray-900 p-4 rounded-lg border-2 border-gray-500 text-gray-300"
        ></textarea>
      </div>
      <div>
        <h3 class="text-xl mb-4">Current</h3>
        <textarea
          v-model="current"
          class="bg-gray-900 p-4 rounded-lg border-2 border-gray-500 text-gray-300"
        ></textarea>
      </div>
    </section>
  </div>
  <div class="viewer">
    <section class="mt-8">
      <h2 class="text-2xl font-bold text-gray-100 mb-4">Diff</h2>
      <p class="text-gray-100 mb-4">
        inputDelay and virtualScroll option are set for large text diff.
      </p>
      <Diff
        :mode="mode"
        :theme="theme"
        :language="selected.language"
        :prev="prev"
        :current="current"
        :folding="folding"
        :input-delay="selected.inputDelay"
        :virtual-scroll="selected.virtualScroll"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Mode, Theme } from '../src/types';
import { defineComponent, Ref, ref, watch } from 'vue';

import template from './template';

interface ListItem {
  key: string;
  title: string;
  language: string;
  inputDelay: number;
  virtualScroll:
    | false
    | {
        height: number;
        lineMinHeight: number;
        delay: number;
      };
}

export default defineComponent({
  setup() {
    const modes = ref<Mode[]>(['split', 'unified']);
    const mode = ref<Mode>('split');
    const selected = ref<ListItem | null>(null);
    const themes = ref<Theme[]>(['dark', 'light', 'custom']);
    const theme = ref<Theme>('dark');
    const folding = ref(false);
    const list = ref<ListItem[]>([
      {
        key: 'javascript',
        title: 'javascript',
        language: 'javascript',
        inputDelay: 0,
        virtualScroll: false,
      },
      {
        key: 'html',
        title: 'html',
        language: 'html',
        inputDelay: 0,
        virtualScroll: false,
      },
      {
        key: 'css',
        title: 'css',
        language: 'css',
        inputDelay: 0,
        virtualScroll: false,
      },
      {
        key: 'yaml',
        title: 'yaml',
        language: 'yaml',
        inputDelay: 0,
        virtualScroll: false,
      },
      {
        key: 'jquery',
        title: 'large text',
        language: 'javascript',
        inputDelay: 100,
        virtualScroll: {
          height: 500,
          lineMinHeight: 24,
          delay: 100,
        },
      },
    ]);

    const prev = ref('');
    const current = ref('');
    selected.value = list.value[0];

    watch(
      () => selected.value,
      () => {
        // @ts-ignore
        prev.value = template[`${selected?.value.key}1`];
        // @ts-ignore
        current.value = template[`${selected?.value.key}2`];
      },
      {
        immediate: true,
      },
    );

    return {
      modes,
      mode,
      themes,
      theme,
      folding,
      list,
      selected,
      prev,
      current,
    };
  },
});
</script>

<style lang="scss">
.editor {
  section {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    h2 {
      width: 100%;
    }

    div {
      width: calc(50% - 10px);
    }

    textarea {
      width: 100%;
      height: 200px;
    }
  }
}

.vue-diff-theme-custom {
  @import 'highlight.js/scss/vs2015.scss'; // import theme

  background-color: #000; // Set background color
}
</style>
