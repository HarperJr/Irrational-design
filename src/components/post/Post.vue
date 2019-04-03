<template>
  <div class="container">
    <div class="sidebar card">

      <div class="artist">
        <div class="artist-touch">
          <img :src="post.artist.avatar.link" class="artist-avatar">
          <h2><a class="artist-link" :href="post.artist.link">{{post.artist.name}}</a></h2>
        </div>
        <p class="artist-email"><b>{{post.artist.email}}</b></p>
        <button class="btn btn-follow" @click="onFollowBtnClicked">+FOLLOW</button>
      </div>

      <div class="post-info">
        <div class="grid-horizontal">
          <button class="btn btn-favorites" @click="onFavoriteAddBtnClicked">ADD TO FAVORITES</button>
          <button class="btn btn-like" @click="onLikeBtnClicked">LIKE</button>
        </div>

        <h1>{{post.title}}</h1>
        <h3>{{post.subtitle}}</h3>
        <p>{{post.description}}</p>

        <div>
          <ul class="tag-holder">
            <li class="tag-item" v-for="it in post.tags">
              {{it.tag}}
            </li>
          </ul>
        </div>
        <div class="comment-holder">
          <Comment v-for="comment in comments" :comment="comment" :key="comment.id"></Comment>
        </div>
      </div>

    </div>

    <div class="art-content">
        <Art v-for="art in post.multimedia" :art="art" :key="art.id"></Art>
    </div>

  </div>
</template>

<script>
  const axios = require('axios')
  import Comment from './Comment.vue'
  import Art from './Art.vue'

  export default {
    name: 'Post',
    data() {
      return {
        post: {
          type: Object,
          artist: {
            type: Object,
            required: true
          },
          required: true
        },
        comments: {
          type: Object,
          required: true
        }
      }
    },
    methods: {
      onFollowBtnClicked: function() {
        console.log("onFollowBtnClicked")
      },
      onFavoriteAddBtnClicked: function() {
        console.log("onFavoriteAddBtnClicked")
      },
      onLikeBtnClicked: function() {
        console.log("onLikeBtnClicked")
      }
    },
    created() {
      axios.get('http://localhost:8080/api/comments.json')
      .then(response => {
        this.comments = response.data
      })
      .catch(e => console.log(e))
      axios.get('http://localhost:8080/api/post.json')
      .then(response => {
        this.post = response.data
      })
      .catch(e => console.log(e))
    },
    components: {
      Comment, Art
    }
  }
</script>

<style scoped>
  @import './style/post.css';
</style>
