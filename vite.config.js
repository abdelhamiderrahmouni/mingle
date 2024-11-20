import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue';
import react from '@vitejs/plugin-react';
import path from 'path'
import findMingles from './resources/js/mingle/autoImport.js'

// Fetch mingle files dynamically
const mingles = findMingles('resources/js');
console.log('Auto-importing mingles:', mingles);

export default defineConfig({
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
            '@mingle': path.resolve(__dirname, 'resources/js/mingle'),
            '@components': path.resolve(__dirname, 'resources/js/components'),
        },
    },
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                ...mingles,
            ],
            refresh: [
                ...refreshPaths,
                'app/**',
                'resources/js/**',
            ],
        }),
    ],
});
