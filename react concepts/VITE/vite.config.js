import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server:
  // {
  //   port:3200,
  //   },
  // we r changing the port number
})
