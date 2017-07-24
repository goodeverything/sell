// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import './common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.prototype.$http = axios.create({
  baseURL: 'http://www.easy-mock.com/mock/596ee5e1a1d30433d837634c/sell'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

