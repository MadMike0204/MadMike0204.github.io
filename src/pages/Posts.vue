<script setup lang="ts">
import {reactive} from "vue";

const posts = reactive([
      {id: "post001", headline: "如何一夜看完一本书...", text: "我怎么知道"},
      {id: "post002", headline: "如何一夜趋势...", text: "我知道"},
      {id: "post003", headline: "如何一夜通关安慕希...", text: "我可能知道"},
      {id: "post004", headline: "如何一夜暴富...", text: "我不知道"},
    ]
)
</script>

<template>

  <div class="posts">
    <!--  导航区-->
    <h1>帖子</h1>
    <p>当前页面路由path: <strong>{{ $route.fullPath }}</strong></p>
    <hr>
    <ul>
      <li v-for="item in posts" :key="item.id">
        <router-link :to="`/post?id=${item.id}&headline=${item.headline}&text=${item.text}`">{{
            item.headline
          }}
        </router-link>
      </li>
    </ul>
    <!--  展示区-->
    <div class="post-content">
      <RouterView></RouterView>
    </div>
    <br>
    <router-link to="/home" active-class="zz">返回主页</router-link>
  </div>
</template>

<style scoped>

</style>