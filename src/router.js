import  Vue from 'vue';
import Router from 'vue-router';

import Home from './components/views/Home.vue';
import Portfolio from './components/views/Portfolio.vue';
import Resume from './components/views/Resume.vue';
import DevLog from './components/views/Dev-Log.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/portfolio', component: Portfolio},
        {path: '/resume', component: Resume},
        {path: '/dev-log', component: DevLog }
    ]
    
})