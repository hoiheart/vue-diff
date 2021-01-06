<template>
  <link rel="stylesheet" :href="`/src/themes/${theme}.css`">
  <h1 class="text-3xl font-extrabold text-gray-100">Vue Diff</h1>
  <div class="form text-gray-100 mt-8">
    <label for="language" class="mr-2">Language:</label>
    <select v-model="language" id="language" class="bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300">
      <option :key="val" v-for="val in languages">{{ val }}</option>
    </select>
    <label for="mode" class="mr-2">Mode:</label>
    <select v-model="mode" id="mode" class="bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300">
      <option :key="val" v-for="val in modes">{{ val }}</option>
    </select>
    <label for="theme" class="mr-2">Theme:</label>
    <select v-model="theme" id="theme" class="bg-gray-900 w-40 py-1 px-3 mr-4 rounded border border-gray-500 text-gray-300">
      <option :key="val" v-for="val in themes">{{ val }}</option>
    </select>
  </div>
  <div class="editor text-gray-100 mt-8">
    <section>
      <h2 class="text-2xl font-bold mb-4">Editor</h2>
      <div>
        <h3 class="text-xl mb-4">Prev</h3>
        <textarea v-model="prev" class="bg-gray-900 p-4 rounded-lg border-2 border-gray-500 text-gray-300"></textarea>
      </div>
      <div>
        <h3 class="text-xl mb-4">Current</h3>
        <textarea v-model="current" class="bg-gray-900 p-4 rounded-lg border-2 border-gray-500 text-gray-300"></textarea>
      </div>
    </section>
  </div>
  <div class="viewer">
    <section class="mt-8">
      <h2 class="text-2xl font-bold text-gray-100 mb-4">Diff</h2>
      <Diff
        :mode="mode"
        :language="language"
        :prev="prev"
        :current="current"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const modes = ref(['split', 'unified'])
    const mode = ref('split')
    const languages = ref(['javascript', 'html', 'css'])
    const language = ref('javascript')
    const themes = ref(['coy', 'dark', 'funky', 'okaidia', 'solarizedlight', 'tomorrow', 'twilight'])
    const theme = ref('okaidia')

    const prev = ref(
`var a1 = {
  "name": "vue-diff",
  "version": "0.0.0",
  "description": "Vue diff viewer",
  "private": true
}`)

    const current = ref(
`const b2 = {
  "name": "vue-diff",
  "version": "0.0.1",
  "description": "Vue diff viewer",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  }
}`)

    return {
      modes,
      mode,
      languages,
      language,
      themes,
      theme,
      prev,
      current
    }
  }
})
</script>

<style scoped lang="scss">
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
</style>
