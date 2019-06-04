<template>

  <v-container grid-list-md>
    <v-layout  row wrap >
      <v-flex xs12>

        <v-card class="profile__header" >
          <div class="profile__background" :style="'background-image: url('+avatarUrl+')'"></div>
          <v-flex xs3 class="profile__avatar">
            <v-avatar
                    :size="250"
                    color="grey lighten-4"
            >
              <v-img
                      :src="avatarUrl"
              ></v-img>
            </v-avatar>
          </v-flex>
          <v-flex xs6 class="profile__card">
            <v-card-text class="profile__name"><h1>{{artist.name}}</h1></v-card-text>
            <v-card-text class="profile__email"><span>email: </span><a :href="'mailto:'+artist.email">{{artist.email}}</a></v-card-text>
            <div class="profile__actions">
              <v-btn v-if="!isAuthor && !artist.followed" depressed class="post-btn post-btn-follow" @click="follow">
                + Подписаться
              </v-btn>
              <v-btn v-else-if="!isAuthor" depressed class="post-btn post-btn-followed" @click="follow">- Отписаться</v-btn>
              <v-btn v-if="!isAuthor" depressed class="post-btn post-btn-likes" v-on:click="navigateTo('donate')">Отправить пожертвование </v-btn>
            </div>
          </v-flex>
          <v-flex xs3 class="profile__stats">
            <v-flex>
              <img src="src/assets/img/follower.png"/>
              <v-card-text>
                Подписчиков:
                <span class="">{{artist.followers}}</span>
              </v-card-text>
            </v-flex>
            <v-flex>
              <img src="src/assets/img/follower.png"/>
              <v-card-text>
                Подписок:
                <span class="">{{artist.follows}}</span>
              </v-card-text>
            </v-flex>

          </v-flex>
        </v-card>

      </v-flex>
      <v-flex xs12>
        <v-layout class="" row wrap>
          <PreviewPost v-for="post in posts" :key="post.id" :post="post" />
        </v-layout>
      </v-flex>
    </v-layout>


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
      },
      navigateTo(where, id, item) {
        this.$router.push({name: where, params: {id}, query: item});
      }
    },

    computed: {
      artist: function () {
        return this.$store.getters.artist;
      },
      avatarUrl() {
        if (this.artist) {
          return `${API_BASE_URL}/avatars/${this.artist.avatar.link}`
        } else {
          return null
        }
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