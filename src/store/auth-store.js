export default {
  state: {
    token: localStorage.getItem('token')
  },
  getters: {
    authenticated: state => !!state.token
  },
  mutations: {
    set_token: (state, token) => {
      if (token == null) {
        localStorage.removeItem('token')
      } else {
        localStorage.setItem('token', token)
      }
      state.token = token
    }
  },
  actions: {
    //Авторизация
    authorize: ({dispatch, commit}, payload) => {
      http.post('/auth', payload.credentials)
      .then(res => {
        commit('set_token', res.data.jwt_token)
        dispatch('get_credentials')
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
    logout({dispatch, commit}) {
      commit('set_token', null)
      dispatch('get_credentials')
    }
  }
}
