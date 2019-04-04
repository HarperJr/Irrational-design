<template>
  <v-flex xs12 lg4>
    <v-flex>
      <v-card>
        <v-img
                :src="post.preview.link"
                aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h5 class="headline mb-0">{{post.title}}</h5>
            <div> {{ post.subtitle }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
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

</style>