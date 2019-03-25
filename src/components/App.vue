<template>
  <div id="app" class="wrapper">
    <navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'

export default {
  name: 'app',
  components: {
    navbar: Navbar
  }
}
</script>

<style lang="scss" scoped>
  @import './style/app.css';
</style>
