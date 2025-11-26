import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/', // 👈 This line fixes blank screen on Netlify
  plugins: [react(), tailwindcss()],
})
