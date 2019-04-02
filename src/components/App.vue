<template>
  <div id="app" class="wrapper">
    <Navbar/>
    <SubNavbar class="irrd-sub-nav-bar"/>
    <BodyPosts/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import SubNavbar from './SubNavbar.vue'
import BodyPosts from './BodyPosts.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    SubNavbar,
    BodyPosts
  }
}
</script>

<style lang="scss" scoped>
  @import './style/app.css';
</style>
