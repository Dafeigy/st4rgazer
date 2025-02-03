import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import prismjsPlugin from 'vite-plugin-prismjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    prismjsPlugin({
      languages: 'all', // 语言
      plugins: ['line-numbers', 'copy-to-clipboard'], //官网有其他功能,这里开启行数和复制按钮功能
      theme: 'okaidia', // 主题
      css: true,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
