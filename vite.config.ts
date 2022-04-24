/// <reference types="vitest" />
const path = require('path');
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'vue-diff',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        assetFileNames: assetInfo => {
          if (assetInfo.name == 'style.css') return 'index.css';
          return assetInfo.name;
        },
      },
    },
  },
  plugins: [vue(), dts()],
  test: {
    environment: 'happy-dom',
  },
});
