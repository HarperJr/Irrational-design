export default {
  state: {
      feed: []
  },
  getters: {
      feed: state => state.feed
  },
  mutations: {
      set_feed: (state, payload) => state.feed = payload
  },
  actions: {
    //Список постов на главной странице
    get_feed: (context, payload) => {
      http.get(`/posts/${payload.filter}?from=${payload.from}&to=${payload.to}`)
      .then(res => {
        context.commit('set_feed', res.data)
      })
      .catch(ex => console.log(ex))
    }
  }
}
