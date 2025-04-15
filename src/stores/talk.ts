import {defineStore} from "pinia";
import {reactive, ref} from "vue";
import {nanoid} from "nanoid";
import axios from 'axios';

export const useTalkStore = defineStore("talk", () => {
    const talkList = reactive([
        {id: "yuyuz_1", content: "鱼鱼子玉玉了"},
        {id: "yuyuz_2", content: "鱼鱼子今天没有玉玉"},
        {id: "yuyuz_3", content: "鱼鱼子玉玉加剧了"},
    ])
    const curTalkIndex = ref(0);

    function nextTalk() {
        curTalkIndex.value = (curTalkIndex.value + 1) % talkList.length;
    }

    async function getARandomTalk() {
        // axios.get('/api/rand.qinghua?format=json')
        //     .then(function (response) {
        //         console.log(response.data);
        //     }).catch(function (error) {
        //     console.log(error);
        // }).finally(function () {
        //     console.log("本次get接收完毕");
        // })
        //
        let dataaa = await axios.get('/api/rand.qinghua?format=json').then(function (response) {
            console.log(response.data)
        });
        console.log("dataaa", dataaa);
        // console.log(data);
        // console.log(content);
        // let allDataReceived = await axios.get('/api/api/rand.qinghua?format=json');
        // console.log(allDataReceived);
        // let obj = {id: nanoid(), content: content};
        // talkList.unshift(obj);
    }

    return {talkList, nextTalk, curTalkIndex, getARandomTalk};
})