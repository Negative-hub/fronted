import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fronted/',
  server: {
    proxy: {
      '/api': {
        target: 'localhost:8000',
        changeOrigin: true
      }
    }
  }
})
