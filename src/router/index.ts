import {createWebHistory, createRouter,type RouteLocationNormalized} from "vue-router";
import Detail from "../pages/Detail.vue";
import Posts from "../pages/Posts.vue";
import Home from "../pages/Home.vue";
import Search from "../pages/Search.vue";


const routes = [
    {path: '/', redirect: '/home'},// 重定向
    // 主路由
    {   path: '/posts',
        component: Posts,
        children: [
            {
                path:'detail/:id/:headline/:content',
                name:'neirong',
                component:Detail,
                props(route:RouteLocationNormalized){
                    return route.params;
                }
            }
        ]
    },
    {path: '/home', component: Home},
    {path: "/search", component: Search},
];
export const router = createRouter({
    history: createWebHistory(),
    routes,
})