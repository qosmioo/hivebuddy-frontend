import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import PostPage from "@/pages/PostPage.vue";
import About from "@/pages/About.vue";
import TeamPage from "@/pages/TeamPage.vue";
import LoginPage from "@/pages/Login.vue";
import SignupPage from "@/pages/Signup.vue";
import PostIdPage from "@/pages/PostIdPage.vue";
import postItem from "@/components/PostItem.vue";
import TaskBoard from "@/pages/TaskBoard.vue";
import ProfileSettings from "@/pages/ProfileSettings.vue";
import TeamSettings from "@/pages/TeamSettings.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/feed',
        component: PostPage,
    },
    {
        path: '/teams',
        component: TeamPage
    },
    {
        path: '/login',
        component: LoginPage
    },
    {
        path: '/signup',
        component: SignupPage
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
        name: 'postId',
    },
    {
        path: '/taskboard',
        component: TaskBoard,
    },
    {
        path: '/profile',
        component: ProfileSettings
    },
    {
        path: '/team-settings',
        component: TeamSettings
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})
export default router