<template>
  <v-container class="comment-holder">
    <v-flex>
      <v-avatar size="56px">
          <img :src="avatarUrl" class="avatar">
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
      comment: null
    },
    computed: {
      avatarUrl() {
        if (this.comment) {
          let avatar = this.comment.author.avatar
          if (avatar) {
            return `${API_BASE_URL}avatars/${avatar.link}`
          } else return ''
        }
      }
    }
  }
</script>

<style scoped>
  @import './style/comment.css';
</style>
