import VueRouter from 'vue-router'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('../views/index')
        }
    ]
})

router.beforeEach((to, from ,next) => {
    next()
})

export default router