<template>
  <div id="app" class="wrapper">
    <Navbar/>
    <SubNavbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import SubNavbar from './SubNavbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SubNavbar
  }
}
</script>

<style lang="scss" scoped>
  @import './style/app.css';
</style>
