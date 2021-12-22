import  Vue from 'vue';
import Router from 'vue-router';

import Home from './components/views/Home.vue';
import Portfolio from './components/views/Portfolio.vue';
import Resume from './components/views/Resume.vue';
import DevLog from './components/views/Dev-Log.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: '/westonbridson33.github.io/home'},
        {path: '/westonbridson33.github.io/home', component: Home},
        {path: '/westonbridson33.github.io/portfolio', component: Portfolio},
        {path: '/westonbridson33.github.io/resume', component: Resume},
        {path: '/westonbridson33.github.io/dev-log', component: DevLog }
    ]
    
})