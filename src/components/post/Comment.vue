<template>
  <v-container class="comment-holder">
    <v-flex>
      <v-avatar size="56px">
          <img :src="comment.author.avatar.link" class="avatar">
      </v-avatar>
      <p class="comment-title">{{comment.author.name}}</p>
    </v-flex>

    <v-flex>
      <p>{{comment.content}}</p>
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      comment: {
        author: {
          name: String,
          required: true
        },
        content: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  @import './style/comment.css';
</style>
