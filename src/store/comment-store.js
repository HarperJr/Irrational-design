export default {
  state: {
    comments: []
  },
  getters: {
    comments: state => state.comments,
  },
  mutations: {
    set_comments: (state, payload) => state.comments = payload,
    add_comment: (state, payload) => state.comments.push(payload)
  },
  actions: {
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
  }
}
