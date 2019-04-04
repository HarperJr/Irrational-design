<template>

  <v-container>
    <v-layout align-center justify-center row wrap>
        <Post v-for="post in posts" :key="post.id" :post="posts[0]"></Post>

    </v-layout>
  </v-container>
</template>

<script>
  import Post from "../mainpage/Post";

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