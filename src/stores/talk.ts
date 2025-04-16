import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {nanoid} from "nanoid";
import axios from 'axios';
import {type Quotes} from "../types/quote.ts";
import {throttle} from "lodash";

export const useTalkStore = defineStore("talk", () => {
    // 土味情话列表，初始化为三个鱼鱼子
    const talkList = reactive<Quotes>([
        {id: "yuyuz_1", content: "“鱼鱼子玉玉了”"},
        {id: "yuyuz_2", content: "“鱼鱼子今天没有玉玉”"},
        {id: "yuyuz_3", content: "“鱼鱼子玉玉加剧了”"},
    ])
    // 控制当前展示哪一个土味
    const curTalkIndex = ref(0);

    // 方法，切到下一个土味情话
    function nextTalk() {
        curTalkIndex.value = (curTalkIndex.value + 1) % talkList.length;
    }

    // const throttledGetARandomTalk = throttle(() => {getARandomTalk()},2000);
    // 通过api，向列表中加入随机土味情话，不能频繁访问
     function fetchRandomTalk() {
        axios.get('/uomg/api/rand.qinghua?format=json')
            .then(function (response) {
                console.log("----元数据", response);
                console.log("----data部分数据", response.data);
                let quoteObj = {id: nanoid(), content: response.data.content};
                talkList.unshift(quoteObj);
            }).catch(function (error) {
            console.log(error);
        }).finally(function () {
            console.log("土味情话接收完毕");
        })
    }
    const getARandomTalk = throttle(fetchRandomTalk, 2000);
    return {
        talkList,
        nextTalk,
        curTalkIndex,
        getARandomTalk,
    };
})