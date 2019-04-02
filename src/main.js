import Vue from 'vue'
import Router from './router'
import Vuex from './vuex'
import Vueco from './vueco'
import App from './components/App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

Vue.use(Vueco)
new Vue({
  el: '#app',
  router: Router,
  vuex: Vuex,
  template: '<App/>',
  components: { App }
})
