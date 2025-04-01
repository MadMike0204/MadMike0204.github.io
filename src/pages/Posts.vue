<script setup lang="ts">
  import {type Articles,type ArticleInfo} from "../types/article.ts";
  import {reactive} from "vue";

  const articles = reactive<Articles>([]);

</script>

<template>
  <div class="posts-info">
    <h3>Post No.1</h3>
    <h3>Post No.2</h3>
    <h3>Post No.3</h3>
    <h3>Post No.4</h3>
  </div>
</template>

<style scoped>

</style>
