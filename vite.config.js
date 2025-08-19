import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ganti "sekolah-web" dengan nama repo kamu
export default defineConfig({
  plugins: [react()],
  base: "/Jagoan-hosting/",
})
