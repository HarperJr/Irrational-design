<template>

  <v-container>
    <v-layout align-center justify-center row wrap>
      <PreviewPost v-for="post in feed" :key="post.id" :post="post"></PreviewPost>
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
      this.$store.dispatch('get_feed', {
        filter: 'all'
      })
    },
    computed: {
      feed: function () {
        return this.$store.getters.feed
      }
    },
    components: {
      PreviewPost
    }

  }
</script>

<style scoped>

</style>
