<template>
  <v-container grid-list-md text-xs-center class="posts-position-in-row">
    <v-layout row wrap>
  <v-flex v-for="i in 3" :key="`4${i}`" xs4 >
    <v-card>
      <v-card-text class="px-0">4</v-card-text>
    </v-card>
  </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "BodyPosts"
  }
</script>

<style scoped>
  @import './style/bodyposts.css';
</style>