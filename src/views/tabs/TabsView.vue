<!--
 * @FileDescription: 导航栏组件
 *
 * @Author: Lizb
 * @Date: 2023-02-24 14:26:59
 -->
<template>
  <div class="center">{{ active }}</div>
  <Tabbar v-model="active">
    <TabbarItem name="home" icon="home-o">首页</TabbarItem>
    <TabbarItem name="order" icon="bars">订单</TabbarItem>
    <TabbarItem name="mine" icon="contact">我的</TabbarItem>
  </Tabbar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Tabbar, TabbarItem } from "vant";


// 记录当前选择的tab
const active = ref('home')


</script>

<style scoped>
.center {
  text-align: center;
}
</style>