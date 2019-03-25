import Vue from 'vue'
import Router from './router'
import Vuex from './vuex'
import App from './components/App.vue'

new Vue({
  el: '#app',
  router: Router,
  vuex: Vuex,
  template: '<App/>',
  components: { App }
})
