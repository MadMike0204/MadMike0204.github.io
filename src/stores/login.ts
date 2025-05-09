import {ref} from 'vue';
import {defineStore} from "pinia";
// pinia管理登录状态，控制导航守卫
export const useLoginStore = defineStore('login', () => {
    const loginUserName = ref<string>("defaultUserName");
    const loginState = ref<boolean>(false);

    function loginFunc(userName: string) {
        loginUserName.value = userName;
        loginState.value = true;
    }

    function exitFunc() {
        loginUserName.value = "defaultUserName";
        loginState.value = false;
    }

    // let info = JSON.parse(localStorage.getItem("talkList") as string) || [];
    return {
        loginUserName,
        loginState,
        exitFunc,
        loginFunc,
    }
})