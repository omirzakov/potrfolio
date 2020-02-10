import Vue from 'vue'
import Router from 'vue-router'
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Websites from "./components/Websites";

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
        },
        {
            path: '/jobs',
            component: Works
        },
        {
            path: '/jobs/websites',
            component: Works
        },
        {
            path: '/jobs/websites',
            component: Websites
        }
    ],
})