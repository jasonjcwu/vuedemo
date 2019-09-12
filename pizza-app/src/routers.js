import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'

//二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

//三级路由
import Phone from './components/about/contact/Phone.vue'
import PersonName from './components/about/contact/PersonName.vue'

export const routes = [{
        path: '/',
        name: 'homeLink',
        components: {
            default: Home,
            'orderingGuide': OrderingGuide,
            'delivery': Delivery,
            'history': History
        }
    },
    { path: '/menu', component: Menu },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '/about',
        component: About,
        redirect: '/about/contact',
        children: [{
                path: '/about/contact',
                name: "contactLink",
                redirect: '/about/contact/personName',
                component: Contact,
                children: [
                    { path: '/about/contact/phone', name: "phoneNumber", component: Phone },
                    { path: '/about/contact/personName', name: "personName", component: PersonName },

                ]
            },
            { path: '/about/history', name: "historyLink", component: History },
            { path: '/about/delivery', name: "deliveryLink", component: Delivery },
            { path: '/about/orderingGuide', name: "orderingGuideLink", component: OrderingGuide }
        ]
    },
    { path: '/admin', component: Admin },
    { path: '*', redirect: "/" }
]