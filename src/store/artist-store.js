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
    }
  }
}
