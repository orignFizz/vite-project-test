import { createRouter, createWebHashHistory } from "vue-router";
const Layout = import('@/layout/index.vue')
const routes = [
    {
        path: '/',
        redirect: '/welcome'
    },
    {
        path: '/welcome',
        component: Layout
    },
    {
        path: '/father',
        component: () => import('@/components/father.vue')
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})