import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  define: {
    __STATIC_API__: JSON.stringify(mode === 'pages' || mode === 'development'),
  },
  base: './',
}));
