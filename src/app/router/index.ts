import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '../components/shared/Layout/AppLayout.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () =>
                        import(/* webpackChunkName: "HomeView" */ '../views/HomeView/HomeView.vue')
                },
                {
                    path: 'products',
                    name: 'product-list',
                    component: () =>
                        import(
                            /* webpackChunkName: "ProductListView" */ '../views/ProductListView/ProductListVue.vue'
                        )
                }
            ]
        },
        {
            path: '/auth',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'auth',
                    component: () =>
                        import(/* webpackChunkName: "AuthView" */ '../views/AuthView/AuthView.vue')
                }
            ]
        }
    ]
})

export default router
