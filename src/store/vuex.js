import Vue from 'vue'
import Vuex from 'vuex'

import Artists from './artist-store'
import Auth from './auth-store'
import Comments from './comment-store'
import Feed from './feed-store'
import Posts from './post-store'


Vue.use(Vuex)
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    Artists, Auth, Comments, Feed, Posts
  }
})
