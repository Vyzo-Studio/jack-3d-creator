import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project repositories are hosted at /repository-name/.
  // The deploy workflow sets this; local development continues to work at /.
  base: process.env.VITE_BASE_PATH || '/',
});
