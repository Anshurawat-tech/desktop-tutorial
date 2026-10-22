import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'pwa-192.svg', 'pwa-512.svg'],
      manifest: {
        name: 'Licence Saathi', short_name: 'Licence Saathi',
        description: 'A simple, offline-friendly guide for a first driving licence.',
        theme_color: '#075e54', background_color: '#f4f8f6', display: 'standalone',
        start_url: '/', scope: '/',
        icons: [
          { src: '/pwa-192.svg', sizes: '192x192', type: 'image/svg+xml', purpose: 'any maskable' },
          { src: '/pwa-512.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'any maskable' }
        ]
      },
      workbox: { globPatterns: ['**/*.{js,css,html,svg,ico,png,json}'], navigateFallback: '/index.html' }
    })
  ]
})
