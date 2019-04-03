<template>
  <div id="app" class="wrapper">
    <Navbar/>
    <SubNavbar class="irrd-sub-nav-bar"/>
    <BodyPosts/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './mainpage/NavBar.vue'
import SubNavbar from './mainpage/SubNavBar.vue'
import BodyPosts from './mainpage/BodyPosts.vue'

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
