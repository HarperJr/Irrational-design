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
    //Авторизация
    authorize: (context, payload) => {
      http.post('/auth', payload.credentials)
      .then(res => {
        context.commit('set_token', res)
        payload.callback()
      })
      .catch(ex => console.log(ex))
    },
    //Регистрация
    register: (context, payload) => {
      http.post('/register', payload.credentials)
      .then(res => {
        payload.callback(res)
      })
      .catch(ex => console.log(ex))
    },
    //Список постов на главной странице
    get_feed: (context, payload) => {
      http.get(`/posts/${payload.filter}`)
      .then(res => {
        context.commit('set_feed', res)
      })
      .catch(ex => console.log(ex))
    },
    //Детальная информация о посте
    get_post: (context, payload) => {
      http.get(`/posts/${payload.postId}`)
      .then(res => context.commit('set_post', res))
      .catch(ex => console.log(ex))
    },
    //Загрузка нового поста
    upload_post: (context, payload) => {
      let multipart = new FormData()
      multipart.append("post_data",
        new Blob([JSON.stringify(payload.post)], {
          type: 'application/json'
        })
      )
      payload.arts.forEach(art, i, arr => {
        multipart.append(`image_${i}`,
          new Blob([art], {
            type: 'image/*'
          })
        )
      })
      http.post('/upload', multipart)
      .then(res => {

      })
      .catch(ex => console.log(ex))
    },
    //Добавление комментария
    comment: (context, payload) => {

    }
  }
})
