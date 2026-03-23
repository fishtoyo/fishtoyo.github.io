import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // 確保打包後資源從根目錄載入
  plugins: [react()],
})
