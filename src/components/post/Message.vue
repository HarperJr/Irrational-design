<template>
  <div class="message-holder">
    <div>
      <p class="message-title">{{message.title}}</p>
    </div>
    <div>
      <p>{{message.content}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'message',
    props: {
      message: {
        required: true
      }
    }
  }
</script>

<style>
  @import './style/message.css';
</style>
