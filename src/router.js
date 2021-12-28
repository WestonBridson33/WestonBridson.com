import  Vue from 'vue';
import Router from 'vue-router';

import Home from './components/views/Home.vue';
import Portfolio from './components/views/Portfolio.vue';
import Resume from './components/views/Resume.vue';
import DevLog from './components/views/Dev-Log.vue';
import DetailedMonsterSlayerView from './components/views/ProjectViews/DetailedMonsterSlayerView.vue';
import DetailedTownBuilderView from './components/views/ProjectViews/DetailedTownBuilderView.vue';
import DetailedCanteenView from './components/views/ProjectViews/DetailedCanteenView.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/portfolio', component: Portfolio},
        {path: '/resume', component: Resume},
        {path: '/dev-log', component: DevLog },
        {path: '/monster-slayer-details', component: DetailedMonsterSlayerView},
        {path: '/town-builder-details', component: DetailedTownBuilderView},
        {path: '/canteen-view-details', component: DetailedCanteenView},
    ]
    
})