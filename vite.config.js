import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Dfc - Dyrane's Farm Cast",
        short_name: 'Dfc',
        description: 'Empowering agriculture with weather data and insights.',
        start_url: '/',
        background_color: '#D1D5DB', // Customize to your background color (e.g., slate-200)
        theme_color: '#121212', // Customize to your accent color (e.g., slate-900)
        display: 'standalone',
        icons: [
          {
            src: '/dfc_dark.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/dfc_dark.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Customize your service worker behavior here if needed
      },
    }),
  ],
});
