<script setup lang="ts">
  import {useLoginStore} from "../stores/login.ts";
  import {storeToRefs} from "pinia";
  import {computed,ref} from "vue";
  let loginStore = useLoginStore();
  let{loginState,loginUserName} = storeToRefs(loginStore);

  const getLoginState = computed(()=>{
    return loginState?("用户 "+loginUserName.value+" 已登录"):"未登录";
  })

  // let message = ref<string>("edit Me");
  let userName = ref<string>("");
  console.log(storeToRefs(loginStore));
</script>

<template>
<!--  <div class="test">-->-->
  <!--    <p>{{message}}</p>-->
  <!--    <input v-model="message" placeholder="type something" />-->
  <!--  </div>-->
    <div class="loginState">
      <p>登录状态:{{getLoginState}} </p>
      <input v-model="userName" placeholder="Type your name..">
      <button v-on:click="loginStore.loginFunc(userName)">LoginFunction</button>
      <p></p>
    </div>
  </template>

  <style scoped>

  </style>