import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import TeamPage from "@/pages/TeamPage.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/teams',
        component: TeamPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router