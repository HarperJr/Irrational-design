<template>

  <v-container>
    <v-layout align-center justify-center row wrap>
        <PreviewPost v-for="post in posts" :key="post.id" :post="posts"></PreviewPost>
    </v-layout>
  </v-container>
</template>

<script>
  import PreviewPost from "./PreviewPost"

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
      http.get('posts/all')
          .then(response => {
            this.posts = response.data;
            console.log(this.posts);
          })
          .catch(e => console.log(e))
    },
    computed: {

    },
    components: {
      PreviewPost
    }

  }
</script>

<style scoped>

</style>
