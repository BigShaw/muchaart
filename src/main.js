import Vue from 'vue'
import LoadGrid from './plugins/load-grid.js'
import App from './App.vue'


window.Event = new Vue();
Vue.use(LoadGrid);

new Vue({
  el: '#app',
  render: h => h(App)
})
