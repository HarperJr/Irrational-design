<template>
  <div class="comment-holder">
    <div>
      <p class="comment-title">{{comment.title}}</p>
    </div>
    <div>
      <p>{{comment.content}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comment',
    props: {
      comment: {
        required: true
      }
    }
  }
</script>

<style>
  @import './style/comment.css';
</style>
