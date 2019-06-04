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
        <v-btn v-if="!isAuthor && !artist.followed"  depressed class="post-btn post-btn-follow" @click="follow">+Подписаться</v-btn>
        <v-btn v-else-if="!isAuthor" depressed class="post-btn post-btn-followed" @click="follow">-Отписаться</v-btn>
        <v-card-text>Подписчиков: {{artist.followers}}</v-card-text>
        <v-card-text>Подписок: {{artist.follows}}</v-card-text>
      </v-flex>
        </v-card>
    </v-layout>
    <v-flex align-center row wrap>
      <PreviewPost v-for="post in posts" :key="post.id" :post="post"></PreviewPost>
    </v-flex>
  </v-container>
</template>

<script>
  import PreviewPost from "../mainpage/PreviewPost"
  const axios = require('axios');

  export default {
    name: "Profile",
    data() {
      return {
        user: {
          type: Object,
          required: true
        },
        posts: []
      }
    },
    created() {
      console.log(this.$route.params.id);
      this.$store.dispatch('get_artist', {
        artistId: this.$route.params.id
      })
      http.get(`posts/${this.$route.params.id}`)
          .then(res => this.posts = res.data)
    },

    methods: {
      follow() {
        http.post(`artist/${this.artist.id}/follow`, null, {
          params: {
            initial: !this.artist.followed
          }
        }).then(res => {
          this.artist.followed = res.data.followed
          if (this.artist.followed) {
            this.artist.followers = this.artist.followers + 1
          } else {
            this.artist.followers = this.artist.followers - 1
          }
        })
      }
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
      },
      isAuthor() {
        if (this.artist) {
          let credentials = this.$store.getters.credentials
          return credentials.id === this.artist.id
        } else return false
      }
    },
    mounted() {

    },
    components: {
      PreviewPost
    }
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
  @import '../Post/style/post.css';
</style>