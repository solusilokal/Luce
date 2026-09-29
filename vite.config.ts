import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    port: 3000,
    host: true
  },
  build: {
    assetsInlineLimit: 1000000 // Inline assets up to 1MB as base64 for self-contained portability
  }
});
