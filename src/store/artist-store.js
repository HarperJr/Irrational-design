export default {
  state: {
    artist: null,
    credentials: null,
    followed: false
  },
  getters: {
    artist: state => state.artist,
    credentials: state => state.credentials,
    followed: state => state.followed
  },
  mutations: {
    set_credentials: (state, payload) => state.credentials = payload,
    set_artist: (state, payload) => state.artist = payload,
    set_followed: (state, payload) => state.followed = payload
  },
  actions: {
    //Запрос к личным данным
    get_credentials: ({commit}) => {
      http.get('/credentials')
          .then(res => {
            let data = res.data
            commit('set_credentials', data)
          })
          .catch(ex => console.log(ex))
    }
  }
}
