<template>
  <div class="app">
    <div class="loginState">
      <p>登录状态:{{getLoginState}} </p>
      <button @click="loginFunc"></button>
      <p></p>
    </div>
    <div class="head">
      <h2>MadMike的小站</h2>
    </div>
    <!--导航区-->
    <div class="navigate">
      <RouterLink :to="{path:'/home'}">
        <el-button type="primary" size="default">
          to Home
        </el-button>
      </RouterLink>
      <RouterLink :to="{path:'/posts'}">
        <el-button type="primary" size="default">
          to Posts
        </el-button>
      </RouterLink>
      <RouterLink :to="{path:'/counter'}">
        <el-button type="primary" size="default">
          to Counter
        </el-button>
      </RouterLink>
    </div>
    <!--展示区-->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup name="App">
import {useLoginStore} from "./stores/login.ts";
import {storeToRefs} from "pinia";
import {computed} from "vue";

  let loginStore = useLoginStore();
  let{loginState,loginFunc,exitFunc,loginUserName} = storeToRefs(loginStore);

  const getLoginState = computed(()=>{
    return loginState?("用户 "+loginUserName.value+" 已登录"):"未登录";
  })
</script>
<style scoped>
.head {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigate {
  display: flex;
  flex-direction: row;
  gap: 4em;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>

