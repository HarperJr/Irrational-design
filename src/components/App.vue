<template>
  <div id="app" class="wrapper">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './NavBar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss" scoped>
  @import './style/app.css';
  @import '~vuetify/dist/vuetify.min.css';
</style>
