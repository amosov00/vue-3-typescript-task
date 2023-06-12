import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vue3-test-task/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      $fonts: resolve('./public/fonts')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/assets/styles/common.scss";
            `
      }
    }
  },
  build: {
    emptyOutDir: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/img/[name]-[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]'
          }

          if (/\.(ttf|woff|woff2)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'assets/[name]-[hash][extname]'
        }
      }
    }
  }
})
