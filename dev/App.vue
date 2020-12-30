<template>
  <h1>Vue Diff</h1>
  <Diff
    language="javascript"
    :left="left"
    :right="right"
  />
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup () {
    const left = reactive({
      code:
`var a = {
  "name": "vue-diff",
  "version": "0.0.0",
  "description": "Vue diff viewer",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  }
}`
    })

    const right = reactive({
      code:
`var b = {
  "name": "vue-diff",
  "version": "0.0.1",
  "private": true,
  "description": "Vue diff viewer",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test:unit": "vue-cli-service test:unit",
    "test:e2e": "vue-cli-service test:e2e",
    "lint": "vue-cli-service lint"
  }
}`
    })

    return { left, right }
  }
})
</script>
