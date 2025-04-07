<script setup lang="ts">
<<<<<<< HEAD
import {reactive} from "vue";
=======
import {allParsedArticles} from "../services/articleService.ts";
import {type ArticleInfo} from "../types/article.ts";
import {onMounted, onUnmounted} from "vue";
import {reactive} from "vue";
import MarkdownIt from 'markdown-it';
import axios from "axios";

const markdownIt = new MarkdownIt();
const articles = reactive(allParsedArticles);
const testArticle: ArticleInfo = {
  id: "233",
  headline: "这是什么",
  content: "希腊奶",
  tags: ["tag1", "tag2"],
};

const data = axios.get('/articles/*.md')
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log(markdownIt);
    })
console.log(data)
onMounted(() => {
  articles.push(testArticle);
})
onUnmounted(() => {
  articles.pop();
})
>>>>>>> c829e2ae2b894a1e7f05223a3d24d9131ec73bf4

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
<<<<<<< HEAD
    <ul>
      <li v-for="post in postList" :key="post.id">
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
      </li>
    </ul>
  </div>
  <div class="posts-detail">
    <RouterView></RouterView>
=======
    <p>测试测试测试</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h3>test{{ article.headline }}</h3>
        <p>{{ article.content }}</p>
      </li>
    </ul>
>>>>>>> c829e2ae2b894a1e7f05223a3d24d9131ec73bf4
  </div>
</template>

<style scoped>

</style>
