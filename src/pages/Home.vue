<script setup lang="ts">

</script>

<template>
  <h1>主页</h1>
  <p>当前页面路由path: <strong>{{ $route.fullPath }}</strong></p>
  <br>
  <router-link to="/posts">前往 Posts</router-link>
</template>

<style scoped>

</style>