import {createApp} from "vue";
import {createPinia} from "pinia"; // 状态管理
import ElementPlus from "element-plus"; // 组件库
import {zhCn} from "element-plus/es/locale"; // 国际化中文
import {router} from "./router.ts"; // 路由管理
import './styles/style.css' // 样式
import App from './App.vue'
// 先创建app和pinia实例
const app = createApp(App);
const pinia = createPinia();
// 路由
app.use(router);
// 使用pinia状态管理app
app.use(pinia);
// ElementPlus组件库
app.use(ElementPlus,
    {size: 'small', zIndex: 3000, locale: zhCn},);
// 挂载app (启用)
app.mount('#app');
