import Vue from 'vue'
import VueRouter from 'vue-router'
import LoadGrid from './plugins/load-grid.js'
import App from './App.vue'
// These are the routes we're going to create.
import ourRoutes from './our-routes.js';


window.Event = new Vue();
Vue.use(LoadGrid);

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

Vue.use(VueRouter);

// We create the router instance here.
const router = new VueRouter({
  routes: ourRoutes
});

// The usual app stuff goes here.
const app = new Vue({
  //
  router,
  render: h => h(App)
}).$mount('#app');