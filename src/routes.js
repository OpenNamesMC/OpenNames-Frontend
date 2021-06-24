import { createWebHistory, createRouter } from "vue-router";
// Components
import User from './components/User.vue'
import Home from './components/Home.vue'
import Thanks from './components/Thanks.vue'
import Dropping from './components/Dropping.vue'
import Popular from './components/Popular.vue'

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
        path: '/dropping/',
        name: 'dropping',
        component: Dropping,
    },
    {
        path: '/popular/',
        name: 'popular',
        component: Popular,
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