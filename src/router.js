import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: AboutMe
        },
        {
            path: '/about',
            component: AboutMe
        },
        {
            path: '/contact',
            component: Contact
        },
        {
            path: '/skills',
            component: Skills
        }
    ],
})