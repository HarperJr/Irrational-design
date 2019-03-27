<template>
  <div id="app" class="wrapper">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  @import './style/app.css';
</style>
