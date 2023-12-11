import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Layout/index.vue'),
            children: [{
                path: "",
                component: import("@/views/Home/index.vue")
            }, {
                path: 'category/:id',
                name: 'category',
                component: import("@/views/Category/index.vue")
            }, {
                path: 'category/sub/:id',
                name: 'subCategory',
                component: import("@/views/SubCategory/SubCategory.vue")
            }, {
                path: 'detail/:id',
                component: import("@/views/Detall/index.vue")
            }, {
                path: 'cartlist',
                component: import("@/views/CartList/index.vue")
            }, {
                path: "checkout",
                component: import("@/views/Checkout/index.vue")
            }, {
                path: '/pay',
                component: () => import("@/views/Pay/index.vue")
            }, {
                path: 'paycallback', // 注意路径，必须是paycallback
                component: import("@/views/Pay/PayBack.vue")
            }, {
                path: '/member',
                component: import("@/views/meber/index.vue"),
                children: [
                    {
                        path: 'user',
                        component: import("@/views/meber/userinfo.vue")
                    },
                    {
                        path: 'order',
                        component: import("@/views/meber/userOrder.vue")
                    }
                ]
            },{
                path: '/about',
                name: 'about',
                component: () => import('../views/AboutView.vue')
            }]
        },
        {
            path: '/login',
            component: import("@/views/Login/index.vue")
        },

    ], scrollBehavior() {
        return {
            top: 0
        }
    }
})

export default router
