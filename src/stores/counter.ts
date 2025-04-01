// 测试用
import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore('counter', () => {
    // 数据
    const n = ref(0);
    // 计算属性
    const double = computed(() => n.value * 2);
    // 方法
    function increment(){
        n.value++;
    }
    return {n, double, increment};
})