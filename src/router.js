import  Vue from 'vue';
import Router from 'vue-router';

import Home from './components/views/Home.vue';
import DevLog from './components/views/Dev-Log.vue';
import Resume from './components/views/Resume.vue';
import AboutMe from './components/views/AboutMe.vue';
import DetailedLetThereBeLightView from './components/views/ProjectViews/DetailedLetThereBeLightView.vue';
import DetailedMonsterSlayerView from './components/views/ProjectViews/DetailedMonsterSlayerView.vue';
import DetailedTownBuilderView from './components/views/ProjectViews/DetailedTownBuilderView.vue';
import DetailedCanteenView from './components/views/ProjectViews/DetailedCanteenView.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', redirect: '/home'},
        {path: '/home', component: Home},
        {path: '/dev-log', component: DevLog },
        {path: '/resume', component: Resume},
        {path: '/aboutMe', component: AboutMe},
        {path: '/let-there-be-light-details', component: DetailedLetThereBeLightView},
        {path: '/monster-slayer-details', component: DetailedMonsterSlayerView},
        {path: '/town-builder-details', component: DetailedTownBuilderView},
        {path: '/canteen-view-details', component: DetailedCanteenView},
    ]
    
})