import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],

  // Performance optimizations
  build: {
    // Code splitting strategy
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for better caching
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-animation': ['gsap'],
          'vendor-3d': ['ogl'],
        },
      },
    },

    // Optimize chunk size
    chunkSizeWarningLimit: 1000,

    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },

    // CSS code splitting
    cssCodeSplit: true,

    // Source maps for debugging (disable in production if needed)
    sourcemap: false,
  },

  // Development server optimizations
  server: {
    port: 5173,
    strictPort: true,

    // Enable compression
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },

  // Preview server settings
  preview: {
    port: 4173,
    strictPort: true,
  },

  // Dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'gsap'],
    exclude: [],
  },
});
