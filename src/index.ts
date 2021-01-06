import Prism from 'prismjs'

import Diff from './Diff.vue'

import type { App } from 'vue'

interface PluginOptions {
  componentName: string;
}

// @ts-ignore
Prism.manual = true

export default {
  install: (app: App, options = {}) => {
    const {
      componentName = 'Diff'
    } = options as PluginOptions

    app.component(componentName, Diff)
  }
}

export { Prism }
