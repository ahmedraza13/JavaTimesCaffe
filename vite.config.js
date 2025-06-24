import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ← allows access from network (e.g. mobile)
    port: 5173, // ← optional: set a fixed port
  },
})
