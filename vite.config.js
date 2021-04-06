import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue-diff/demo/',
  build: {
    outDir: 'demo',
    assetsDir: './'
  },
  plugins: [vue()]
})
