import Vue from 'vue'
import Router from './router'
import Vuex from './vuex'
import Vuetify from './vuetify'
import Vueco from './vueco'
import App from './components/App.vue'

Vue.use(Vueco)
new Vue({
  el: '#app',
  router: Router,
  vuex: Vuex,
  vuetify: Vuetify,
  render: (h) => h(App)
})
