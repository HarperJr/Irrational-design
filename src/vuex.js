import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    feed: null,
    post: null
  },
  getters: {
    feed: state => state.feed,
    post: state => state.post
  },
  mutations: {
    set_token: (state, payload) => {
      localStorage.token = payload.data.jwt_token
    },
    set_feed: (state, payload) => state.feed = payload,
    set_post: (state, payload) => state.post = payload
  },
  actions: {
    authorize: (context, payload) => {
      http.post('/auth', payload.credentials)
      .then(res => {
        context.commit('set_token', res)
        payload.callback()
      })
      .catch(ex => console.log(ex))
    },
    register: (context, payload) => {
      http.post('/register', payload.credentials)
      .then(res => {
        payload.callback(res)
      })
      .catch(ex => console.log(ex))
    },
    get_feed: (context, payload) => {
      http.get(`/posts/${payload.filter}`)
      .then(res => {
        context.commit('set_feed', res)
      })
      .catch(ex => console.log(ex))
    },
    get_post: (context, payload) => {
      http.get(`/posts/${payload.postId}`)
      .then(res => context.commit('set_post', res))
      .catch(ex => console.log(ex))
    },
    upload_post: (context, payload) => {
      http.post('/upload', payload.post_multipart)
      .then(res => {

      })
      .catch(ex => console.log(ex))
    },
    comment: (context, payload) => {

    }
  }
})
