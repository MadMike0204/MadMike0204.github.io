<template>
  <nav>
    <RouterLink to="/posts/joker">Go to Home.</RouterLink>
  </nav>
  <h1>以下为导航到path后显示的组件</h1>
  <RouterView />
</template>

<script lang="ts" setup name="App">
import {useThemeStore} from "../stores/theme.ts";

const themeStore = useThemeStore();
</script>

