<template>
  <div class="container">
    <div id="sidebar" class="card">

      <div id="user">
        <div class="user-top">
          <img src="" alt="" class="avatar">
          <h2><a class="user-link" v-bind:href="user.link">{{user.name}}</a></h2>
        </div>
        <div class="user-bot">
          <p class="email"><b>{{user.email}}</b></p>
          <button id="followBtn" class="btn blue" v-on:click="onFollowBtnClicked">+FOLLOW</button>
        </div>
      </div>

      <div id="post">
        <div class="fav-like-btn-group">
          <button id="favoriteAddBtn" class="btn blue" v-on:click="onFavoriteAddBtnClicked">ADD TO FAVORITES</button>
          <button id="likeBtn" class="btn green" v-on:click="onLikeBtnClicked">LIKE</button>
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
          <comment v-for="comment in comments" :comment="comment" :key="comment.id"></comment>
        </div>
      </div>

    </div>

    <div id="content">
      <!--todo make multimedia component-->
      <div class="multimedia-holder" v-for="art in post.multimedia">
        <img class="art" v-bind:src="art.link" v-bind:alt="art.name">
      </div>
    </div>

  </div>
</template>

<script>
  const axios = require('axios')
  import Comment from './Comment.vue'

  export default {
    name: 'detail',
    data() {
      return {
        user: {
          type: Object
        },
        post: {
          type: Object
        },
        comments: {
          type: Object
        }
      }
    },
    watch: {
      post: function() {
        axios.get('http://localhost:8080/api/user.json')
        .then(response => {
          this.user = response.data
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
      comment: Comment
    }
  }
</script>

<style media="screen" scoped>
  @import './style/post.css';
</style>
