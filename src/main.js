import Vue from 'vue'
import VueRouter from 'vue-router'
// import $ from 'jquery'
import LoadGrid from './plugins/load-grid.js'
import App from './App.vue'

import ourRoutes from './our-routes.js';
Vue.use(VueRouter);

// var $ = window.jQuery = require('jquery') 

window.Event = new Vue();
Vue.use(LoadGrid);

const router = new VueRouter({
  routes: ourRoutes
});

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});