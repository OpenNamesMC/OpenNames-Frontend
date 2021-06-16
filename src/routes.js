import { createWebHistory, createRouter } from "vue-router";
// Components
import User from './components/User.vue'
import Home from './components/Home.vue'

const routes = [
    {
        path: '/user/:id',
        name: 'user',
        component: User,
    },
    {
        path: '/',
        name: 'home',
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router