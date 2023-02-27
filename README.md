# 前端项目: elm_app

### 本项目我自用pnpm   译: I used pnpm for this project

### 项目采用

- vue3 + vite + TypeJavaScrip
- vant组件库(按需引入); command: `pnpm add vant`; URL: https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart
- axios发送请求; command: `npm add axios`; URL: https://github.com/axios/axios;
- autoprefixer: 自动管理CSS属性的浏览器前缀; 
  postcss-pxtorem: px转换rem;
  command: `pnpm install postcss autoprefixer postcss-pxtorem -D`;
  URL: https://github.com/autoprefixer/autoprefixer.github.io; URL: https://github.com/postcss/postcss
- 利用unplugin-vue-components, 来自动管理**按需引入Vant**的组件; command: `pnpm install unplugin-vue-components -D`

### 导包等操作

```sh
pnpm install
```

```sh
pnpm run dev
```

```sh
pnpm run build
```

```sh
pnpm run lint
```

# 模拟后端项目: elm_app-h5-server

### 模拟后端请求  译: Simulate back-end requests

json-server URL: https://github.com/typicode/json-server

```sh
cd elm_app-h5-server
```

```sh
npm install json-server --save-dev
```

```sh
pnpm run serve
```