import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes, // short for routes: routes
    linkActiveClass: 'active',
    base: '/photo_site/',
});

export default router;