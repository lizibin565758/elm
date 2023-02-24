<!--
 * @FileDescription: 导航栏组件
 *
 * @Author: Lizb
 * @Date: 2023-02-24 14:26:59
 -->
<template>
  <RouterView/>

  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="mine" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>

<script setup lang="ts">
import { ref, watch, } from 'vue'
import { Tabbar, TabbarItem, } from "vant";
import { RouterView, useRoute, useRouter, } from "vue-router";

// 引入路由
const route = useRoute()
const router = useRouter()
// 记录当前选择的tab
const active = ref(route.name as string)

// 监听改变的name(页面)
watch(active, (newValue) => {
  router.push({
    name: newValue
  })
})
</script>

<style scoped>
.center {
  text-align: center;
}
</style>