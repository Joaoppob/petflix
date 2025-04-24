// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    base: '/petflix/', // ← nome do repositório no GitHub
    server: {
        port: 3000,
        open: true, // ← Isso aqui abre o navegador automaticamente
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
