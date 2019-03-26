<template>
  <div class="container">
    <div id="sidebar" class="card">

      <div class="artist">
        <div class="artist-touch">
          <img :src="artist.avatar.link" class="avatar">
          <h2><a class="artist-link" :href="artist.link">{{artist.name}}</a></h2>
        </div>
        <p class="artist-email"><b>{{artist.email}}</b></p>
        <button id="followBtn" class="btn blue" @click="onFollowBtnClicked">+FOLLOW</button>
      </div>

      <div id="post">
        <div class="fav-like-btn-group">
          <button id="favoriteAddBtn" class="btn blue" @click="onFavoriteAddBtnClicked">ADD TO FAVORITES</button>
          <button id="likeBtn" class="btn green" @:click="onLikeBtnClicked">LIKE</button>
        </div>

        <h1>{{post.title}}</h1>
        <h2>{{post.subtitle}}</h2>
        <p>{{post.description}}</p>

        <div>
          <ul id="tagHolder">
            <li class="tag-element" v-for="it in post.tags">
              {{it.tag}}
            </li>
          </ul>
        </div>

        <div id="messagesHolder">
          <Comment v-for="comment in comments" :comment="comment" :key="comment.id"></Comment>
        </div>
      </div>

    </div>

    <div id="content">
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
        artist: {
          type: Object,
          required: true
        },
        post: {
          type: Object,
          required: true
        },
        comments: {
          type: Object,
          required: true
        }
      }
    },
    watch: {
      post: function() {
        axios.get('http://localhost:8080/api/user.json')
        .then(response => {
          this.artist = response.data
        })
        .catch(e => console.log(e))
        axios.get('http://localhost:8080/api/comments.json')
        .then(response => {
          this.comments = response.data
        })
        .catch(e => console.log(e))
      }
    },
    methods: {
      onFollowBtnClicked: function() {
          alert('onFollowBtnClicked')
      },
      onFavoriteAddBtnClicked: function() {
          alert('onFavoriteAddBtnClicked')
      },
      onLikeBtnClicked: function() {
          alert('onLikeBtnClicked')
      }
    },
    mounted() {
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
