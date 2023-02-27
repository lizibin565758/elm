import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'   // 引入路由

import 'vant/lib/index.css'
// import './assets/main.css'  // 自带样式, 弃用

/* 移动端适配 */
const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = deviceWidth * rootValue / rootWidth + 'px'

const app = createApp(App)

app.use(createPinia())
app.use(router) // 注册路由
app.mount('#app')
