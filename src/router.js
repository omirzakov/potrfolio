import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/about',
            component: AboutMe
        },
        {
            path: '/contact',
            component: Contact
        }
    ],
})