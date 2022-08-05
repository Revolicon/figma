import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { viteSingleFile } from 'vite-plugin-singlefile'
import { createHtmlPlugin } from 'vite-plugin-html'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    viteSingleFile(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    reportCompressedSize: false,
    outDir: './dist',
  },
})
