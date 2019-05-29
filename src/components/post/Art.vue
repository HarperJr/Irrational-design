<template>
  <v-flex>
    <img class="art" :src="artUrl">
  </v-flex>
</template>

<script>
  export default {
    name: "Art",
    props: {
      art: {
        link: String,
        required: true
      }
    },
    computed: {
      artUrl: function() {
        return `${API_BASE_URL}/arts/${this.art.link}`
      }
    }
  }
</script>

<style>
  @import './style/art.css';
</style>
