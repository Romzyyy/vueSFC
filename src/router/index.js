import { createRouter, createWebHashHistory } from 'vue-router'
import DashboardVue from '@/views/Dashboard.vue'
import AboutVue from '@/views/About.vue'
import UserVue from '@/views/User.vue'
import UserDetailVue from '@/views/UserDetail.vue'
import UserProfileVue from '@/views/UserProfile.vue'
import UserPostVue from '@/views/UserPost.vue'
import UserIndexVue from '@/views/UserIndex.vue'

const routes = [
    { path: '', component: DashboardVue },
    { path: '/about', component: AboutVue },
    { path: '/user', component: UserVue },
    // { path: '/user/:id', component: UserDetailVue }, from cara fajar
    // { path: '/user/:id/posts', component: UserPostVue }, from cara fajar
    // { path: '/user/:id/profile', component: UserProfileVue }, from cara fajar
    // from documentation vue 
    {
        path: '/user/:id',
        component: UserIndexVue,
        children: [
            { path: '', component: UserDetailVue },
            { path: '/user/:id/posts', component: UserPostVue },
            { path: '/user/:id/profile', component: UserProfileVue },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})

export default router
