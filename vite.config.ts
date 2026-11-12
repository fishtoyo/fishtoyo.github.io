import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 確保打包後資源從根目錄載入
  plugins: [react()],
  build: {
    rollupOptions: {
      // 多頁輸出：/ 為入口頁、/resume/ 為個人履歷（工作室在另一個 repo：fishtoyo/studio）
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume/index.html'),
      },
    },
  },
})
