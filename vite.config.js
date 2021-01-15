import vue from '@vitejs/plugin-vue'

export default {
  build: {
    outDir: 'demo',
    assetsDir: './',
    base: '/vue-diff/demo/'
  },
  optimizeDeps: {
    include: [
      'highlight.js/lib/core',
      'highlight.js/lib/languages/css',
      'highlight.js/lib/languages/xml',
      'highlight.js/lib/languages/markdown',
      'highlight.js/lib/languages/javascript',
      'highlight.js/lib/languages/json',
      'highlight.js/lib/languages/plaintext',
      'highlight.js/lib/languages/typescript',
      'highlight.js/lib/languages/yaml' // extend language test
    ]
  },
  plugins: [
    vue()
  ]
}
