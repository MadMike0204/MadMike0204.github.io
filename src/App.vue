<template>
  <nav>
    <RouterLink to="/home">Go to Home.</RouterLink>
  </nav>
  <RouterView/>
</template>

<script lang="ts" setup name="App">
import {useThemeStore} from "../stores/theme.ts";

const themeStore = useThemeStore();
</script>

