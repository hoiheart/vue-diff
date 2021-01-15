declare module 'highlight.js/lib/core'
declare module 'highlight.js/lib/languages/css'
declare module 'highlight.js/lib/languages/xml'
declare module 'highlight.js/lib/languages/markdown'
declare module 'highlight.js/lib/languages/javascript'
declare module 'highlight.js/lib/languages/json'
declare module 'highlight.js/lib/languages/plaintext'
declare module 'highlight.js/lib/languages/typescript'
declare module '*.css'

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}
