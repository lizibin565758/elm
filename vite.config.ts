import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // 配置vite代理
    server: {
        port: 3000, // 把前端项目端口改成3000
        proxy: { // proxy是用来配置代理的
            '/api': 'http://localhost:8000',
            '/imgs': 'http://localhost:8000',
        }
    }
})
