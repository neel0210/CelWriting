import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Using '.' instead of process.cwd() avoids type errors if @types/node is missing or misconfigured.
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    // Inject the API Key globally as process.env.API_KEY
    define: {
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    },
    // base: './' ensures assets are loaded correctly on GitHub Pages (subpath)
    base: './',
    build: {
      outDir: 'dist',
    }
  };
});