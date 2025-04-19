<script setup lang="ts">
import {ref, watch} from "vue";
import Child from "./Child.vue";

const car = ref("汽车人");
const infoToInput = ref<string>("");
const toy = ref<string>("我没有玩具");

function changeFatherInfomation(infomation: string) {
  car.value = infomation;
}

function getToy(value: string) {
  console.log("父组件收到玩具:",value);
  toy.value = value;
}

watch(car, (newValue, oldValue) => {
  console.log("父组件信息汽车人被改变了.")
  console.log("新:", newValue);
  console.log("旧:", oldValue);
  infoToInput.value = "";
});
</script>

<template>
  <div class="father">
    <h3>父组件</h3>
    <input type="text" v-model="infoToInput"/>
    <div class="change">
      <button @click="changeFatherInfomation(infoToInput)">点击触发更新组件内容</button>
    </div>
    <h4>汽车人:{{ car }}</h4>
    <h4>玩具:{{toy}}</h4>
    <Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<style scoped>
.father {
  /* 圆角边框 */
  border-radius: 10px;
  /* 与父组件的外边距 */
  margin: 10px;

  /* 可选的其他样式 */
  padding: 15px;
  border: 1px solid #ddd;
  background-color: rgba(21, 177, 206, 0.33);
}
</style>