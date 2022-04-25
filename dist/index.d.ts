/// <reference types="highlight.js" />
import Diff from './Diff.vue';
import type { App } from 'vue';
declare module '@vue/runtime-core' {
    interface GlobalComponents {
        Diff: typeof Diff;
    }
}
declare const _default: {
    install: (app: App, options?: {}) => void;
    hljs: import("highlight.js").HLJSApi;
};
export default _default;
export { Diff };
