import commonjs from '@rollup/plugin-commonjs'

export default {
  rollupInputOptions: {
    plugins: [
      commonjs()
    ]
  },
  optimizeDeps: {
    include: [
      // 'prismjs/components/index',
      // 'prismjs/plugins/autoloader/prism-autoloader',
      // 'prismjs/plugins/diff-highlight/prism-diff-highlight',
      // 'prismjs/plugins/line-numbers/prism-line-numbers'
    ]
  }
}
