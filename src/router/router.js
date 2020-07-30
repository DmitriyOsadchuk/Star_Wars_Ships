import Vue from 'vue'
import Router from 'vue-router'
import StarWarsHome from "../pages/StarWarsHome";
import Profile from "../pages/Profile";


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: StarWarsHome
        },
        {
            path: '/profile/:id',
            name: 'profile',
            component: Profile
        }
    ]
})
