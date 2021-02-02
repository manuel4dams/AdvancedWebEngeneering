import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import HowTo from './views/HowTo.vue';
import Learning from './views/Learning.vue';
import Privacy from './views/Privacy.vue';
import Category from './views/Category';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/learning',
            name: 'Lernen',
            component: Learning
        },
        {
            path: '/how-to',
            name: 'How to?',
            component: HowTo
        },
        {
            path: '/privacy',
            name: 'Datenschutz',
            component: Privacy
        },
        {
            path: '/category',
            name: 'Kategorie',
            component: Category,
        }
    ]
})
