export default {
  state: {
    authorized: localStorage.token !== undefined
  },
  getters: {
    authorized: state => state.authorized
  },
  mutations: {
    set_token: (state, payload) => {
      if (payload === undefined) {
        localStorage.removeItem('token')
      } else {
        localStorage.token = payload
      }
    }
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
    register({commit}, {credentials, avatar}) {
      let multipart = new FormData()
      multipart.append("reg-part", new Blob(
        [JSON.stringify(credentials)], {
        type: "application/json"
      }))
      if (avatar) {
        multipart.append("avatar", new Blob(
            [avatar], {
              type: "image/*"
            }))
      }
      http.post('/register', multipart)
      .then(res => {

      })
      .catch(ex => console.log(ex))
    },
    logout({commit}) {
      commit('set_token', undefined)
    }
  }
}
