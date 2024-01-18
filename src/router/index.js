import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardVue from '@/views/Dashboard.vue'
import AboutVue from '@/views/About.vue'

const routes = [
    {
        path: '',
        component: DashboardVue,
    },
    {
        path: '/about',
        component: AboutVue,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router