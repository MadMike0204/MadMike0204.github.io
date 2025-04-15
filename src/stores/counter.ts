// 测试用
import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    // 数据 data
    const n = ref(0);
    // 计算属性 computed
    const double = computed(() => n.value * 2);
    // 方法 methods
    function increment(){
        n.value++;
    }
    return {n, double, increment};
})