<template>

  <v-flex xs12 md4>

    <v-card class="pre-post-position">

      <v-img class="pre-post-img"
             :src="post.preview.link"
      ></v-img>
      <div class="overlay">
        <v-layout class="info1" justify-space-around>
          <v-flex class="pre-post__autor-img">
            <img class="avatar"
                 ng-src="https://cdnb.artstation.com/p/users/avatars/000/277/319/medium/38f95e3050042f9d506d4f2b1dcd66eb.jpg"
                 src="https://cdnb.artstation.com/p/users/avatars/000/277/319/medium/38f95e3050042f9d506d4f2b1dcd66eb.jpg"/>
          </v-flex>
          <v-flex class="pre-post__autor-name">
            <div class="title pre-post-text">Red Boat Stylized</div>
            <div class="pre-post-text">Janos Tokity</div>
          </v-flex>


        </v-layout>
      </div>
      <v-card-title primary-title>
        <h3 class="headline mb-3">{{post.title}}</h3>
        <h3> {{ post.subtitle }} </h3>
      </v-card-title>
      <v-card-actions>
        <v-btn depressed class="pre-post-btn-like">Like</v-btn>
        <v-btn depressed class="pre-post-btn-follow">+Follow</v-btn>
      </v-card-actions>
    </v-card>

  </v-flex>

</template>

<script>
  export default {
    name: "Post.vue",

    props: {
      post: {
        required: true
      }
    }
  }
</script>

<style scoped>
  @import 'style/preview-post.css';
</style>