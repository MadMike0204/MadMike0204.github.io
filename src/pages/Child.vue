<script setup lang="ts">
  import {ref} from 'vue';
  defineProps(['car','sendToy'])
  const toy = ref("变形金刚玩具");
</script>

<template>
  <div class="child">
    <h4>子组件收到的信息:{{car}}</h4>
    <button @click="sendToy(toy)">把玩具给父组件</button>
  </div>
</template>

<style scoped>
.child {
  /* 圆角边框 */
  border-radius: 10px;

  /* 与父组件的外边距 */
  margin: 10px;

  /* 可选的其他样式 */
  padding: 10px;
  border: 1px solid #ddd;
  background-color: rgba(195, 255, 248, 0.73);
}
</style>