import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //proxy cors error fix or fix less write url
  server:{
    proxy:{
      "/api" : "http://localhost:3000", 
    },
  },
  plugins: [react()],
})
