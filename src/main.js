import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueRouter from 'vue-router'
import LoadGrid from './plugins/load-grid.js'
import App from './App.vue'
import ourRoutes from './our-routes.js';


Vue.use(VueRouter);
Vue.use(VueAwesomeSwiper)

// require('swiper/dist/css/swiper.css')


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