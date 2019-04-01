<template>
  <div id="app">
    <navbar></navbar>
    <!--subnavbar></subnavbar-->
    <router-view/>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'
  import SubNavBar from './SubNavBar.vue'

  export default {

    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      navbar: NavBar,
      subnavbar: SubNavBar
    }
  }
</script>

<style lang="scss" scoped>
  @import './style/app.css';
</style>
