import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/AlAarif.ca/',   // 👈 VERY IMPORTANT
  plugins: [react()],
})
