import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { store } from './store/store.js';
import VueTypedJS from 'vue-typed-js';

Vue.config.productionTip = false
Vue.use(VueTypedJS);

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app');
