<template>
  <v-flex>
    <img class="art" :src="art.link">
  </v-flex>
</template>

<script>
  export default {
    name: "Art",
    props: {
      art: {
        link: String,
        name: String,
        required: true
      }
    }
  }
</script>

<style>
  @import './style/art.css';
</style>
