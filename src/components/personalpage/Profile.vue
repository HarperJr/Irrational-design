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
                  :src="user.avatar.link"
          ></v-img>
        </v-avatar>
      </v-flex>
      <v-flex class="profile__raspolozheniye">
        <v-card-text>Nickname: {{user.name}}</v-card-text>
        <v-card-text>email: {{user.email}}</v-card-text>
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
      axios.get('http://localhost:8080/api/user.json', { headers: {'Access-Control-Allow-Origin': '*'} })
          .then(response => {
            this.user = response.data;
            console.log(this.user);
          })
          .catch(e => console.log(e))
    }
  }

</script>

<style scoped>
  @import 'style/profile.css';
</style>