import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: Number(process.env.FRONTEND_PORT) || 3006,
    proxy: {
      '/api': {
        target: process.env.BACKEND_URL || 'http://localhost:3007',
        changeOrigin: true,
      },
    },
  },
})

