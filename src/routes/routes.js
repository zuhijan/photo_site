import Layout from '@/views/Layout/Layout.vue';

import Home from "@/components/Home";
import Portfolio from "@/components/Portfolio";
import Contacts from "@/components/Contacts";
import Instagram from "@/components/Instagram";
import About from "@/components/About";

import One from "@/components/Portfolio/One";

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home

            },
            {
                path: '/about',
                name: 'About',
                component: About

            },
            {
                path: '/portfolio',
                name: 'portfolio',
                component: Portfolio,
            },
            {
                path: '/contacts',
                name: 'Contacts',
                component: Contacts

            },
            {
                path: '/Instagram',
                name: 'instagram',
                component: Instagram
            },
            {
                path: '/one',
                name: 'One',
                component: One
            },

        ]
    },
];

export default routes;
