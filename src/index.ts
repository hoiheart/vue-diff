import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components'
import 'prismjs/plugins/diff-highlight/prism-diff-highlight'
import 'prismjs/plugins/diff-highlight/prism-diff-highlight.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import Diff from './Diff.vue'

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
  }
}

export { Prism }
