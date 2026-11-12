import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Tailwind CSS v4 se integra como plugin de Vite: no hace falta
// tailwind.config.js ni PostCSS. El tema (colores, fuentes) vive en src/index.css.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
