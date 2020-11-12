import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login'
import error from '../components/error'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '*',
        component: error
    },

    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dyList',
                name: 'dyList',
                component: () => import(/* webpackChunkName: "about" */ '../views/dyList.vue')
            },
            {
                path: '/About',
                component: About
            },
            {
                path:'/Log',
                name:'Log',
                component: () =>import('../views/Log.vue')
            },
            {
                path: '*',
                component: error
            }
        ]
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    routes
})
//导航守卫
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        return next();
    } else {
        const token = window.sessionStorage.getItem('token');
        if (token !== null) {
            return next();
        } else {
            Vue.prototype.$message({
                message: '请先登录后在访问！',
            })
            return next('/login')
        }
    }
})

export default router
