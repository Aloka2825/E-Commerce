import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1': 'https://e-commerce-xq9x.onrender.com'
      }
  },
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure this matches your Vercel configuration
  },
})
