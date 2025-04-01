import {createWebHistory, createRouter} from "vue-router";
import Posts from "../pages/Posts.vue";
import Home from "../pages/Home.vue";
import Search from "../pages/Search.vue";

const routes = [
    {path: '/', redirect: '/home'},// 重定向

    {path: '/posts', component: Posts},
    {path: '/posts/:postId', component: Posts},
    {path: '/home', component: Home},
    {path: "/search", component: Search},
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
})