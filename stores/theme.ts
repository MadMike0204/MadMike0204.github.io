import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useThemeStore = defineStore('theme', () => {
    // 两种背景图的路径
    const backgrounds = {
        day: 'url(/public/day.png)',
        night: 'url(/public/night.png)',
    };
    // 当前主题状态 默认为白天
    const currentTheme = ref<'day' | 'night'>('day');

    // 获取当前背景图路径
    function currentBackground() {
        return backgrounds[currentTheme.value];
    }

    // 切换主题
    function toggleTheme() {
        currentTheme.value = currentTheme.value === 'day' ? 'night' : 'day';
    }
    // 背景图路径不是外部所需的数据或方法，所以不需要返回
    return {
        currentTheme,
        currentBackground,
        toggleTheme,
    };
})