<script setup lang="ts">
  defineProps(["id","headline","content"]);
</script>

<template>
  <div>
    <ul class="posts-list">
      <li>编号:{{id}}</li>
      <li>标题:{{headline}}</li>
      <li>内容:{{content}}</li>
    </ul>
  </div>

</template>

<style scoped>

</style>