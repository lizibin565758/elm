<template>
  <RouterView/>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { fetchTest } from "@/api/test";

fetchTest()
</script>

