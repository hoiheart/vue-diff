import Diff from './Diff.vue'
import hljs from './highlight'
import './style.scss'

import type { App } from 'vue'

interface PluginOptions {
  componentName: string;
}

export default {
  install: (app: App, options = {}) => {
    const {
      componentName = 'Diff'
    } = options as PluginOptions

    app.component(componentName, Diff)
  },
  hljs
}
