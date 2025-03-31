<script setup lang="ts">
  import {useThemeStore} from "../../stores/theme.ts";
  let {currentTheme,
    currentBackground,
    toggleTheme} = useThemeStore();

</script>

<template>
  <h1>主页</h1>
  <p>当前页面路由path: <strong>{{ $route.fullPath }}</strong></p>
  <hr>
  <button @click="toggleTheme()">更换主题</button>
  <br>
  <router-link to="/posts">前往 Posts</router-link>
</template>

<style scoped>

</style>