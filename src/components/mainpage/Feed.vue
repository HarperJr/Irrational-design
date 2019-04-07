<template>
  <v-layout column >
  <FilterNavBar class="irrd-sub-nav-bar"/>
  <BodyPosts/>
  </v-layout>
</template>

<script type="text/javascript">
  import FilterNavBar from './FilterNavBar.vue'
  import BodyPosts from './BodyPosts.vue'

  export default {
    name: 'Feed',
    components: {
      FilterNavBar,
      BodyPosts
    }
  }
</script>
