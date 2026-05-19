import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['Images/Logo.png', 'Images/*.webp'],
      manifest: {
        name: 'Kevin Jerome — Full-Stack Developer',
        short_name: 'Kevin Jerome',
        description: 'Portfolio of Kevin Jerome, Full-Stack Developer.',
        theme_color: '#800020',
        background_color: '#0f1118',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: '/Images/Logo.png', sizes: '192x192', type: 'image/png' },
          { src: '/Images/Logo.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,webp,svg,ico}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: { cacheName: 'google-fonts', expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 } },
          },
        ],
      },
    }),
  ],
});
