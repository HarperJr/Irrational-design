<template>

  <v-container>
    <v-layout class="profile__raspolozheniye">
      <v-card style="padding: 50px;">
      <v-flex class="profile__avatar">
        <v-avatar
                :size="250"
                color="grey lighten-4"
        >
          <v-img
                  :src="avatarUrl"
          ></v-img>
        </v-avatar>
      </v-flex>
      <v-flex class="profile__raspolozheniye">
        <v-card-text>Nickname: {{artist.name}}</v-card-text>
        <v-card-text>email: {{artist.email}}</v-card-text>
      </v-flex>
        </v-card>
    </v-layout>
  </v-container>
</template>

<script>

  const axios = require('axios');

  export default {
    name: "Profile",
    data() {
      return {
        user: {
          type: Object,
          required: true
        },
      }
    },
    created() {
      console.log(this.$route.params.id);
      this.$store.dispatch('get_artist', {
        artistId: this.$route.params.id
      })
    },
    computed: {
      artist: function() {
        return this.$store.getters.artist;
      },
      avatarUrl() {
        if (this.artist) {
          return `${API_BASE_URL}/avatars/${this.artist.avatar.link}`
        }
        else {return null}
      }
    },
    //created() {
      // axios.get('http://localhost:8080/api/user.json', { headers: {'Access-Control-Allow-Origin': '*'} })
      //     .then(response => {
      //       this.user = response.data;
      //       console.log(this.user);
      //     })
      //     .catch(e => console.log(e))
    //}
  }

</script>

<style scoped>
  @import 'style/profile.css';
</style>