import Diff from './Diff.vue';
import hljs from './highlight';
import './style.scss';

import type { App } from 'vue';
import type { PluginOptions } from './types';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Diff: typeof Diff;
  }
}

export default {
  install: (app: App, options = {}) => {
    const { componentName = 'Diff' } = options as PluginOptions;

    app.component(componentName, Diff);
  },
  hljs,
};

export { Diff }
