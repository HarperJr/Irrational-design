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
    },
    //Загрузка нового поста
    upload_post: (context, payload) => {
      let multipart = new FormData()
      multipart.append("post-part",
          new Blob([JSON.stringify(payload.post)], {
            type: 'application/json'
          })
      )
      payload.arts.forEach((art, i, arr) => {
        multipart.append(`image_${i}`, art)
      })
      http.post('/upload', multipart)
          .then(res => {

          })
          .catch(ex => console.log(ex))
    }
  }
}
