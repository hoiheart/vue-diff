import Prism from 'prismjs'
import 'prismjs/plugins/keep-markup/prism-keep-markup'

import Diff from './Diff.vue'

import type { App } from 'vue'

// @ts-ignore
Prism.manual = true

interface PluginOptions {
  componentName: string;
}

export default {
  install: (app: App, options = {}) => {
    const {
      componentName = 'Diff'
    } = options as PluginOptions

    app.component(componentName, Diff)
  }
}

export { Prism }
