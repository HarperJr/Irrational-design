<template>

  <v-container>
    <v-layout align-center row wrap>
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
        filter: 'all',
        from: 0,
        to: 100
      })
    },
    computed: {
      feed: function () {
        //console.log(this.$store.getters.feed);
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
