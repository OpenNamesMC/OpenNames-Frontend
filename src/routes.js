import { createWebHistory, createRouter } from "vue-router";
// Components
import User from './components/User.vue'
import Home from './components/Home.vue'
import Thanks from './components/Thanks.vue'

const routes = [
    {
        path: '/user/:id',
        name: 'user',
        component: User,
    },
    {
        path: '/thanks/',
        name: 'thanks',
        component: Thanks,
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