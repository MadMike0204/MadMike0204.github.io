import {createPinia} from "pinia";
import {createApp} from "vue";
import './styles/style.css'
import App from './App.vue'
// 先创建app和pinia实例
const app = createApp(App)
const pinia = createPinia()
// 使用pinia状态管理app
app.use(pinia)
// 挂载app (启用)
app.mount('#app')
