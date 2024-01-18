import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardVue from '@/views/Dashboard.vue'
import AboutVue from '@/views/About.vue'
import UserVue from '@/views/User.vue'
import UserDetailVue from '@/views/UserDetail.vue'


const routes = [
    {
        path: '',
        component: DashboardVue,
    },
    {
        path: '/about',
        component: AboutVue,
    },
    {
        path: '/user',
        component: UserVue,
    },
    {
        path: '/user/:id',
        component: UserDetailVue,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router