<template>
  <v-container class="comment-holder">
    <v-flex class="comment__avatar">
      <router-link :to="{name:'profile', params: { id: comment.author.author_id }} ">
      <v-avatar size="56px">
          <img :src="avatarUrl" class="avatar">
      </v-avatar>
      </router-link>
    </v-flex>
    <v-flex class="comment__text">
      <router-link :to="{name:'profile', params: { id: comment.author.author_id }} ">
        <p class="comment-title">{{comment.author.name}}</p>
      </router-link>
      <p>{{comment.content}}</p>
<!--
      <span>{{commentDate}}</span>
-->
    </v-flex>
  </v-container>
</template>

<script>
  export default {
    name: 'Comment',
    props: {
      comment: null,
      date: null
    },
    computed: {
      avatarUrl() {
        if (this.comment) {
          let avatar = this.comment.author.avatar
          if (avatar) {
            return `${API_BASE_URL}avatars/${avatar.link}`
          } else return ''
        }
      },
      /*commentDate() {
        if (this.comment.date) {
          console.log(this.comment.date);
          let data = new Date(this.comment.date);
          console.log(date);
          return data.toString();
        }
      }*/
    }
  }
</script>

<style scoped>
  @import './style/comment.css';
</style>
