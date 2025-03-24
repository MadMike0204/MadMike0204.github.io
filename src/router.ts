import {createWebHistory, createRouter} from "vue-router";
import Posts from "./pages/Posts.vue";
import App from "./App.vue";
import Home from "./pages/Home.vue";

const routes = [
    {path: '/', component: App},
    {path: '/posts', component: Posts},
    {path: '/posts/:postId', component: Posts},
    {path: '/home', component: Home},
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
})