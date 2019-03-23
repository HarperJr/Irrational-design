<template>
  <div class="container">
    <div id="sidebar" class="card">

      <div id="user">
        <div id="userHeader">
          <img src="" alt="" class="avatar">
          <h1><a v-bind:href="user.link"></a>{{user.name}}</h1>
        </div>
        <div id="userFooter">
          <p class="email"><b>{{user.email}}</b></p>
          <button id="followBtn" class="btn blue" v-on:click="onFollowBtnClicked">+FOLLOW</button>
        </div>
      </div>

      <div id="post">
        <div id="btnGroup">
          <button id="favoriteAddBtn" class="btn blue" v-on:click="onFavoriteAddBtnClicked">ADD TO FAVORITES</button>
          <button id="likeBtn" class="btn green" v-on:click="onLikeBtnClicked">LIKE</button>
        </div>


        <h2>{{post.title}}</h2>
        <p>{{post.description}}</p>

        <div>
          <ul id="tagHolder">
            <li class="tag-element" v-for="tag in post.tags">
              {{tag.name}}
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div id="content">

    </div>

  </div>
</template>

<script>
  export default {
    name: 'detail',
    data() {
      return {
        user: {
          name: 'Michael Greenwood',
          email: 'michaelGreen@post.com'
        },
        post: {
          title: 'Facepack Monster',
          description: 'Post decription',
          tags: [
            { name: "art" },
            { name: "alien" },
            { name: "coolthing" }
          ]
        }
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
    }
  }
</script>

<style media="screen">
  div {
    display: flex;
  }

  .email {
    font-size: 20px;
  }

  .tag-element {
    margin: 5px;
  }

  #sidebar {
    flex-basis: 512px;
    flex-direction: column;
  }

  #content {

  }

  #user {
    flex-direction: column;
    margin: 45px;
  }

  #userHeader {
    flex-direction: row;
  }

  #userFooter {
    flex-direction: column;
  }

  #post {
    margin: 40px;
    flex-direction: column;
  }

  #btnGroup {
    align-items: center;
    margin: auto;
  }

  #tagHolder {
    display: flex;
    flex-flow: wrap;
    list-style: none;
  }
</style>
