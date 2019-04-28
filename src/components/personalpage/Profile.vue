<template>
  <v-container>
    <v-layout class="profile__raspolozheniye">

      <v-flex class="profile__avatar">
        <v-avatar
                :tile="tile"
                :size="250"
                color="grey lighten-4"
        >
          <v-img
                  :src="user.avatar"
          ></v-img>
        </v-avatar>
      </v-flex>
      <v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "Profile",
    data() {
      return {
        user: {
          type: Object,
          required: true
        },
      }
    }
  }

</script>

<style scoped>
  @import 'style/profile.css';
</style>