<script setup lang="ts">
  import {useRoute} from "vue-router";
  let route = useRoute();
  console.log(route);
</script>

<template>
  <div class="content">
    <ul class="news-list">
      <li>编号:{{route.query.id}}</li>
      <li>标题:{{route.query.headline}}</li>
      <li>内容:{{route.query.text}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>