// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    server: {
        port: 3000,
        open: true, // ← Isso aqui abre o navegador automaticamente
    },
});
