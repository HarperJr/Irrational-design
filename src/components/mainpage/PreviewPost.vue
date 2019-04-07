<template>
  <v-flex xs12 md4>
      <v-card class="pre-post-position">
        <v-img class="pre-post-img"
                :src="post.preview.link"
        ></v-img>

        <v-card-title primary-title >
          <div>
            <h5 class="headline mb-0">{{post.title}}</h5>
            <div> {{ post.subtitle }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn depressed class="pre-post-btn-like" >Like</v-btn>
          <v-btn depressed class="pre-post-btn-follow">+Follow</v-btn>
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