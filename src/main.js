import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import {store} from './store.js';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  render: h => h(App)
});
