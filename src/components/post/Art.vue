<template>
  <img class="art" :src="art.link">
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
