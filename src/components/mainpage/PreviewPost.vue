<template>

  <v-flex xs12 md4>

    <v-card class="pre-post-position">
      <router-link :to="{name:'post'}">
        <!--router-link :to="{name:'post'} params: { id: currentUserId }"-->
        <v-img class="pre-post-img"
               :src="post.preview.link"
        ></v-img>
        <div class="overlay">
          <v-layout class="info1" justify-space-around>
            <v-flex class="pre-post__autor-img">
              <img class="avatar" :src="post.owner.avatar.link" :alt="post.owner.name">
            </v-flex>
            <v-flex class="pre-post__autor-name">
              <div class="title pre-post-text">{{post.title}}</div>
              <div class="pre-post-text">{{post.owner.name}}</div>
            </v-flex>
          </v-layout>
        </div>
      </router-link>
      <!--v-card-title primary-title>
        <h3 class="headline mb-3">{{post.title}}</h3>
        <h3> {{ post.subtitle }} </h3>
      </v-card-title-->
      <v-card-actions>
        <v-layout>
          <div v-for="tag in post.tags">
            <v-btn class="pre-post__tag">{{tag.tag}}</v-btn>
          </div>
        </v-layout>
      </v-card-actions>
      <hr style="margin-bottom: 5px;" color="#D7D7D7"/>
      <v-card-actions>
        <v-btn depressed class="pre-post-btn-like">Нравится</v-btn>
        <v-btn depressed class="pre-post-btn-follow">+Подписаться</v-btn>
      </v-card-actions>
      <v-card-actions class="pre-post__bottom-info">
        <v-card-text class="pre-post__info-likes">{{post.likes}} нравится</v-card-text>
        <v-card-text>560 просмотры</v-card-text>
        <v-card-text class="pre-post__info-comments">{{post.comments}} комментарии</v-card-text>
      </v-card-actions>
    </v-card>

  </v-flex>

</template>

<script>
  export default {
    name: "Post.vue",

    props: {
      post: {
        required: true
      }
    }
  }
</script>

<style scoped>
  @import 'style/preview-post.css';
</style>