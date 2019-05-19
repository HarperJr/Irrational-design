import Vue from 'vue'
import Router from 'vue-router'
//Components
import Feed from './components/mainpage/Feed.vue'
import Post from './components/post/Post.vue'
import Profile from './components/personalpage/Profile.vue'
import Auth from './components/authpage/Auth.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'feed',
      component: Feed
    }, {
      path: '/post/:id',
      name: 'post',
      component: Post
    }, {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },{
      path: '/auth',
      name: 'auth',
      component: Auth
    }
  ]
})
