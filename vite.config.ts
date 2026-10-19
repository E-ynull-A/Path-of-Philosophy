import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative paths: the built site works from any folder or sub-path (GitHub Pages, a Claude link, a USB stick).
  base: './',
  build: {
    // Most of the bundle is bilingual text (story, library, the God section):
    // ~600 kB raw, ~200 kB gzipped. That is fine for one app, so no warning.
    chunkSizeWarningLimit: 900,
  },
})
