import Layout from '@/views/Layout/Layout.vue';

import Gallary from "@/components/Gallary";
import Portfolio from "@/components/Portfolio";
import Contacts from "@/components/Contacts";
import Instagram from "@/components/Instagram";

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/gallary',
        name: 'Home',
        children: [
            {
                path: '/gallary',
                name: 'Gallary',
                component: Gallary

            },
            {
                path: '/portfolio',
                name: 'portfolio',
                component: Portfolio

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
        ]
    },
];

export default routes;