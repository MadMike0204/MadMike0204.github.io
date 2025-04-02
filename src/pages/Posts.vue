<script setup lang="ts">
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

</script>

<template>
  <div class="posts-info">
    <p>测试测试测试</p>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h3>test{{ article.headline }}</h3>
        <p>{{ article.content }}</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
