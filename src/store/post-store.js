export default {
  state: {
      post: null,
      categories: []
  },
  getters: {
        post: state => state.post,
        categories: state => state.categories
  },
  mutations: {
    set_post: (state, payload) => state.post = payload,
    set_categories: (state, payload) => state.categories = payload
  },
  actions: {
    //Детальная информация о посте
    get_post: (context, payload) => {
      http.get(`/post/${payload.postId}`)
      .then(res => context.commit('set_post', res.data))
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
    },
    //Список категорий
    get_categories: (context, payload) => {
      http.get('/categories')
      .then(res => {
        context.commit('set_categories', res.data)
      })
      .catch(ex => console.log(ex))
    },
    like: (c) => {
      http.post(`post/${payload.postId}/like`, {
        params: {
          initial: payload.initial
        }
      })
      .then(res => {

      })
      .catch(ex => console.log(ex))
    }
  }
}
