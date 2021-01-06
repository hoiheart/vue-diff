<template>
  <link rel="stylesheet" :href="`/src/themes/${theme}.css`">
  <h1>Vue Diff</h1>
  language
  type
  theme
  <div class="editor">
    <section>
      <h2>Editor</h2>
      <div>
        <h3>Prev</h3>
        <textarea v-model="prev"></textarea>
      </div>
      <div>
        <h3>Current</h3>
        <textarea v-model="current"></textarea>
      </div>
    </section>
  </div>
  <div class="viewer">
    <section>
      <h2>Split</h2>
      <Diff
        type="split"
        language="javascript"
        :prev="prev"
        :current="current"
      />
    </section>
    <section>
      <h2>Unified</h2>
      <Diff
        type="unified"
        language="javascript"
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
    const theme = 'okaidia'

    const prev = ref(
`var a = {
  "name": "vue-diff",
  "version": "0.0.0",
  "description": "Vue diff viewer",
  "private": true
}`)

    const current = ref(
`var b = {
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

    return { prev, current, theme }
  }
})
</script>

<style scoped lang="scss">
.editor {
  section {
    display: flex;
    flex-wrap: wrap;

    h2 {
      width: 100%;
    }

    div {
      width: 50%;
    }

    textarea {
      width: 100%;
      height: 100px;
    }
  }
}
</style>
