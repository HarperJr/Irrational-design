export default {
  state: {
    authorized: localStorage.token !== undefined
  },
  getters: {
    authorized: state => state.authorized
  },
  mutations: {
    set_token: (state, payload) => {
      localStorage.token = payload
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
    register: (context, payload) => {
      http.post('/register', payload.credentials)
      .then(res => {
        payload.callback(res)
      })
      .catch(ex => console.log(ex))
    }
  }
}
