import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

//https://github.com/caiobobbiofisica-maker/radiacao-de-corpo-negro.git
export default defineConfig({
  plugins: [react()],
  base: '/radiacao-de-corpo-negro/',
  resolve: { 
  alias: { "@": path.resolve(__dirname, "./src") } }
})
