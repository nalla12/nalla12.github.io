import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'docs'
    },
    plugins: [
        {
            enforce: 'pre',
            ...mdx()
        },
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '#root': path.resolve(__dirname)
        }
    },
})
