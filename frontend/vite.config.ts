import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// 本番(build)のみ /portfolio/ 配下に。dev は / のまま。
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
  server: { port: 5177, strictPort: true, fs: { allow: ['..'] } },
  resolve: { alias: { '@data': path.resolve(__dirname, '../data') } },
}))
