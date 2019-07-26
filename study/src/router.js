import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from './page/a.vue'
import pageB from './page/b.vue'


Vue.use( VueRouter)

//路由配置
const routes=[
    {
        path:'/pagea',
        component:pageA
    },
    {
        
        path:'/pageb',
        component:pageB

    }
]

const router = new VueRouter({
    routes
})

export default router