<template>

  <v-container>
    <v-layout align-center justify-center row wrap>
        <PreviewPost v-for="post in posts" :key="post.id" :post="posts[0]"></PreviewPost>

    </v-layout>
  </v-container>
</template>

<script>
  import PreviewPost from "./PreviewPost";

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
      PreviewPost
    }

  }
</script>

<style scoped>

</style>