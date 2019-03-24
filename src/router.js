import Vue from 'vue'
import Router from 'vue-router'
//Components
import Feed from './components/Feed.vue'
import Post from './components/post/Post.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/feed',
      name: 'feed',
      component: Feed
    }, {
      path: '/post',
      name: 'post',
      component: Post
    }
  ]
})
