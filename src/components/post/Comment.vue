<template>
  <div class="comment-holder">
    <div>
      <img :src="comment.author.avatar.link" class="avatar">
      <p class="comment-title">{{comment.author.name}}</p>
    </div>
    <div>
      <p>{{comment.content}}</p>
    </div>
  </div>
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
