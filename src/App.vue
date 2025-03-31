<template>
  <AppHeader />
  <router-view />

</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'  
</script>


<style>
/* 全局基础样式 */
body {
  margin: 0;
  font-family: 'Arial Rounded MT Bold', sans-serif;
}


@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
</style>
