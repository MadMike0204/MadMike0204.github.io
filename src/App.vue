<template>
  <div class="app">
    <div class="head">
      <h2>MadMike的小站</h2>
    </div>
    <!--导航区-->
    <div class="navigate">
      <RouterLink to="/home">
        <el-button type="primary" size="default">
          to Home
        </el-button>
      </RouterLink>
      <RouterLink to="/posts">
        <el-button type="primary" size="default">
          to Posts
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

