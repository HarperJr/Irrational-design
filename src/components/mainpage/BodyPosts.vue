<template>


  <v-container grid-list-md text-xs-center class="posts-position-in-row">
    <v-layout align-space-around justify-center row fill-height>
      <v-flex v-for="post in posts" :key="post.id" xs4>
        <v-card>
          <v-card-text class="px-0">{{post.id}}</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Post from "../post/Post";

  const axios = require('axios');

  export default {
    name: "BodyPosts",
    data() {
      return {
        posts: {
          type: Object,
          required: true
        },
      }
    },
    created() {
      axios.get('http://localhost:8080/api/posts.json', { headers: {'Access-Control-Allow-Origin': '*'} })
          .then(response => {
            this.posts = response.data;
            //console.log(this.posts);
          })
          .catch(e => console.log(e))
    },
    components: {
      Post
    }

  }
</script>

<style scoped>
  @import 'style/bodyposts.css';

</style>