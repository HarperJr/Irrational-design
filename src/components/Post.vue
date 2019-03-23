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
        <p>{{post.description}}</p>

        <div>
          <ul id="tagHolder">
            <li class="tag-element" v-for="tag in post.tags">
              {{tag.name}}
            </li>
          </ul>
        </div>

        <div id="messagesHolder">
          <div v-for="message in post.messages">
            <!--todo make messsage component-->
            <p>{{message.user}}</p>
            <p>{{message.content}}</p>
          </div>
        </div>
      </div>

    </div>

    <div id="content">
      <!--todo make multimedia component-->
      <div class="multimedia-holder" v-for="art in post.multimedia">
        <img v-bind:src="art.link" v-bind:alt="art.name">
      </div>
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
          email: 'michaelGreen@post.com',
          link: '#'
        },
        post: {
          title: 'Facepack Monster',
          description: 'Post decription',
          messages: [
            { user: 'Nik Harper', content: 'Nice work dude!'},
            { user: 'Ivo', content: 'Yah so nice.'}
          ],
          multimedia: [
            // ALl multimedia here is located at assets folder
            { name: 'Dishonored Solder', link: '../assets/dishonored-solder.jpg'},
            { name: 'Dishonored Solder Light', link: '../assets/dishonored-solder-light.jpg'}
          ],
          tags: [
            { name: 'Digital' },
            { name: 'Art' },
            { name: 'Aliens' }
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

<style media="screen" scoped>
  @import '../style/post.css';
</style>
