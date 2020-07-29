import Vue from 'vue'
import Router from 'vue-router'
import StarWarsList from "../pages/StarWarsList";
import Profile from "../pages/Profile";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: StarWarsList
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: Profile
        }
    ]
})
