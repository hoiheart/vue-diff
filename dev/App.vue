<template>
  <h1>Vue Diff</h1>
  <Diff
    language="javascript"
    :prev="prev"
    :current="current"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
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

    return { prev, current }
  }
})
</script>
