import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1': 'http://localhost:8000'
      }
  },
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure this matches your Vercel configuration
  },
})
