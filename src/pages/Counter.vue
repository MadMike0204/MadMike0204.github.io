<script setup lang="ts">
import {useCounterStore} from "../stores/counter.ts";
import {useTalkStore} from "../stores/talk.ts";

const counterStore = useCounterStore();
const talkStore = useTalkStore();
</script>

<template>
  <div class="counter">
    <button @click="counterStore.increment()">Increment</button>
    <p>当前值:{{counterStore.n}}</p>
    <p>双倍值:{{counterStore.double}}</p>
  </div>
  <div>
    <button @click="talkStore.nextTalk()">Next talk</button>
    <button @click="talkStore.getARandomTalk()">Add a random talk to list</button>
    <p>当前鱼鱼子语录:{{talkStore.talkList[talkStore.curTalkIndex].content}}</p>
  </div>

</template>

<style scoped>

</style>