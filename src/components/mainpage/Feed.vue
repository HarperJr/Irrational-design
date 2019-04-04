<template>
  <v-layout column >
  <SubNavbar class="irrd-sub-nav-bar"/>
  <BodyPosts/>
  </v-layout>
</template>

<script type="text/javascript">
  import SubNavbar from './SubNavBar.vue'
  import BodyPosts from './BodyPosts.vue'

  export default {
    name: 'Feed',
    components: {
      SubNavbar,
      BodyPosts
    }
  }
</script>
