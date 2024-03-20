import Vue from 'vue';

import 'reset-css';

import App from './App.vue';
import VueRouter from 'vue-router';
import { Button, Input } from 'element-ui';
import router from './router';

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Button)
Vue.use(Input)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
