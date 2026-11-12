import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import type { Plugin } from 'vite'

// 作品總覽只展示編號與名稱：打包時把 cases.json 的網址（多為公司 demo 連結）拿掉，
// 原始資料仍保留在 src/data/cases.json，只是不會出現在網站裡
const stripCaseUrls = (): Plugin => ({
  name: 'strip-case-urls',
  enforce: 'pre',
  transform(code, id) {
    if (!id.split('?')[0].endsWith('/src/data/cases.json')) return
    const list = JSON.parse(code) as Array<{ id: string; title: string }>
    return { code: JSON.stringify(list.map(({ id, title }) => ({ id, title }))), map: null }
  },
})

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 確保打包後資源從根目錄載入
  plugins: [stripCaseUrls(), react()],
  build: {
    rollupOptions: {
      // 多頁輸出：/ 為入口頁、/resume/ 為個人履歷、/resume/cases.html 為作品總覽（工作室在另一個 repo：fishtoyo/studio）
      input: {
        main: resolve(__dirname, 'index.html'),
        resume: resolve(__dirname, 'resume/index.html'),
        cases: resolve(__dirname, 'resume/cases.html'),
      },
    },
  },
})
