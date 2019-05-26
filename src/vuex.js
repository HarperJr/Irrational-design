import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    feed: null,
    post: null,
    comments: [],
    artist: null,
    credentials: null,
    followed: false,
    categories: []
  },
  getters: {
    feed: state => state.feed,
    post: state => state.post,
    comments: state => state.comments,
    artist: state => state.artist,
    credentials: state => state.credentials,
    followed: state => state.followed,
    categories: state => state.categories
  },
  mutations: {
    set_token: (state, payload) => {
      localStorage.token = payload
    },
    set_feed: (state, payload) => state.feed = payload,
    set_post: (state, payload) => state.post = payload,
    set_comments: (state, payload) => state.comments = payload,
    add_comment: (state, payload) => state.comments.push(payload),
    set_credentials: (state, payload) => state.credentials = payload,
    set_artist: (state, payload) => state.artist = payload,
    set_followed: (state, payload) => state.followed = payload,
    set_categories: (state, payload) => state.categories = payload
  },
  actions: {
    //Авторизация
    authorize: (context, payload) => {
      http.post('/auth', payload.credentials)
      .then(res => {
        context.commit('set_token', res.data.jwt_token)
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
      multipart.append("post-part",
        new Blob([JSON.stringify(payload.post)], {
          type: 'application/json'
        })
      )
      payload.arts.forEach((art, i, arr) => {
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
    //Получение комментариев к посту
    get_comments: (context, payload) => {
      http.get(`/posts/${payload.postId}/comments`)
      .then(res => {
        context.commit('set_comments', payload.data)
      })
      .catch(ex => console.log(ex))
    },
    //Добавление комментария
    comment: (context, payload) => {
      http.post(`/posts/${payload.postId}/comment`, payload)
      .then(res => {
        context.commit('add_comment', payload.data)
      })
      .catch(ex => console.log(ex))
    },
    //Запрос к личным данным
    get_credentials: (context, payload) => {
      http.get('/credentials')
      .then(res => {
        context.commit('set_credentials', res.data)
      })
      .catch(ex => console.log(ex))
    },
    //Детальные данные артиста
    get_artist: (context, payload) => {
      http.get(`/artist/${payload.artistId}`)
      .then(res => {
        context.commit('set_artist', res.data)
      })
      .catch(ex => console.log(ex))
    },
    //Подписан на артиста или нет
    followed: (context, payload) => {
      http.get(`/artist/${payload.artistId}/followed`)
      .then(res => {
        context.commit('set_followed', res.data)
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
    }
  }
})
