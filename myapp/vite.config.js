/// <reference types="vitest" />
/// <reference types="vite/client" />


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   test: {
      environment: 'jsdom',
      setupFiles: ['./src/tests/setup.js'],
      testMatch: ['./src/tests/*.test.js'],
     globals: true
     }
})
