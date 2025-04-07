<script setup lang="ts">
  import {useRoute} from "vue-router";
  const route = useRoute();
  console.log(route.params);
</script>

<template>
  <div>
    <ul class="posts-list">
      <li>编号</li>
      <li>标题</li>
      <li>内容</li>
    </ul>
  </div>

</template>

<style scoped>

</style>