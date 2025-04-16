<script setup lang="ts">
  import {useCounterStore} from "../stores/counter.ts";
  import {useTalkStore} from "../stores/talk.ts";
  import {storeToRefs} from "pinia";
  // import {toRefs} from "vue";

  const counterStore = useCounterStore();
  const talkStore = useTalkStore();

  let {n,double} = storeToRefs(counterStore);

  // ?????
  // 这种方式会把store中的所有成员都包成响应式对象返回
  // let {talkList,curTalkIndex} = toRefs(talkStore);
  // 这种方式只会把store中的state包成响应式对象返回
  let {talkList,curTalkIndex} = storeToRefs(talkStore);

  function editCounterStore1() {
    counterStore.$patch({
     // editTime:0,
      n:0
    })

  }
  function editCounterStore2() {
    // counterStore.editTime=0;
    counterStore.n=0;
  }
  function logCounterStore(){
    console.log("23333----: ",storeToRefs(counterStore));
  }
</script>
<template>
  <div class="counter">
    <button @click="logCounterStore">Logging</button>
    <button @click="counterStore.increment()">Increment</button>
    <button @click="editCounterStore1()">Reset1</button>
    <button @click="editCounterStore2()">Reset2</button>
    <p>当前值:{{n}}</p>
    <p>双倍值:{{double}}</p>
  </div>
  <div>
    <button @click="talkStore.nextTalk()">Next talk</button>
    <button @click="talkStore.getARandomTalk()">Add a random talk to list</button>
    <p>当前鱼鱼子语录:<br>{{talkList[curTalkIndex].content}}</p>
  </div>

</template>

<style scoped>

</style>