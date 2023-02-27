import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

/* 引入unplugin-vue-components, 按需引入vant所配置的组件 */
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        /**
         * 按需引入vant所配置的组件
         * 配置好后运行项目, 会生成一个components.d.ts文件(用来管理按需引入的vant)
         */
        Components({
            resolvers: [VantResolver()]
        })
    ],
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
