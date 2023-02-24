<!--
 * @FileDescription: 导航栏组件
 * @Author: Lizb
 * @Date: 2023-02-24 14:26:59
 -->
<template>
  <Tabbar v-model="active">
    <TabbarIteme name="home" icon="home-o">首页</TabbarIteme>
    <TabbarIteme name="order" icon="bars">订单</TabbarIteme>
    <TabbarIteme name="mine" icon="contact">我的</TabbarIteme>
  </Tabbar>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {Tabbar} from "vant";


// 记录当前选择的tab
const active = ref('')


</script>

<style scoped>

</style>