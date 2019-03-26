<template>
  <div class="comment-holder">
    <div>
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
          avatar: {
            link: String,
            width: Number,
            height: Number
          },
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
