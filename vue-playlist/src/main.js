// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import helloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
//import Users from './components/User.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
    //Vue.components("users", Users)
    /* eslint-disable no-new */
    //配置理由
const router = new VueRouter({
    routes: [
        { path: "/", component: Home },
        { path: "/helloworld", component: helloWorld }
    ],
    mode: "history"
})
new Vue({
    router,
    el: '#app',
    components: { App },
    template: '<App/>'
})