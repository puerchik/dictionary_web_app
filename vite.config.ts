import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/dictionary-web-app',
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      components: path.resolve(__dirname, './src/components'),
      shared: path.resolve(__dirname, './src/shared'),
    },
  },
  plugins: [react()],
})
