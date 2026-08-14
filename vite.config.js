import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // relative base so the build works whether it's served from a domain root
  // or a GitHub Pages project subpath like username.github.io/portfolio/
  base: './',
})
