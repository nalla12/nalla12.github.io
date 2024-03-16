import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

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
})
