import Vue from 'vue'
import Router from 'vue-router'
import StarWarsList from "../pages/StarWarsList";
import Profile from "../pages/Profile";

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'StarWarsList',
        component: StarWarsList
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]
const router = new Router({
    routes
})
const app = new Vue({
    router
}).$mount('#app')
export default router;