<script setup lang="ts">
import {reactive} from 'vue';
const postList = reactive([
  {
    id: "dfghji001",
    headline: "HEADLINEEEE",
    content: "This is a test post.",
  },
  {
    id: "dfghji002",
    headline: "HEADLINEEEEE",
    content: "This is a second test post.",
  },
  {
    id: "dfghji003",
    headline: "HEADLINEEEEEE",
    content: "This is a third test post.",
  },
])
</script>

<template>
  <div class="posts-info">
    <ul>
      <li v-for="post in postList" :key="post.id">
<!--        第一种写法-->
        <RouterLink
            :to="{
              name:'neirong',
              // query:{
              //   id:post.id,
              //   headline:post.headline,
              //   content:post.content,
              // },
              params:{
                id:post.id,
                headline:post.headline,
                content:post.content,
              }
            }">
          {{ post.headline }}
        </RouterLink>
<!--        第二种写法-->
<!--        <RouterLink :to="`/posts/detail/${post.id}/${post.headline}/${post.content}`">-->
<!--          {{post.headline}}-->
<!--        </RouterLink>-->
      </li>
    </ul>
  </div>
  <div class="posts-detail">
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
