import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    base: '/carrillo_final_project/', 
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
