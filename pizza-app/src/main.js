import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routers'
Vue.use(VueRouter)


const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 100 }
        //return { selector: '.btn' }
    }
})

//全局守卫
/* router.beforeEach((to, from, next) => {
    //  alert("还没有登陆，请先登陆！")
    // next() 
    if (to.path == '/login' || to.path == '/register') {
        next()
    } else {
        alert("还没有登陆，请先登陆！")
        next('/login')
    }
}) */

// 后置钩子
/* router.afterEach((to, from) => {

}) */

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})