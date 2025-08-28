import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detecta si estás en GitHub Pages o en otro hosting (ej. Amplify)
const isGitHubPages = process.env.GITHUB_PAGES === 'true'

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? '/carrillo_final_project/' : '/',  // 👈 Ajusta base según hosting
})
