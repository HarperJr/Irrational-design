<template>
  <v-container fluid>
    <v-layout align-start>

      <v-flex xs12 md5 class="post-card">
        <v-card class="v-post-card">

            <v-layout column class="post-card-text">
              <v-flex>
                <v-flex>
                  <v-avatar size="100px" style="margin-bottom: 7px">
                    <!--img :src="post.artist.avatar.link" :alt="post.artist.avatar.name"-->
                  </v-avatar>
                </v-flex>
                <v-flex align-center offset-xs1>
                  <!--strong><a class="permalink" :href="post.artist.permalink">{{post.artist.name}}</a></strong-->
                </v-flex>
              </v-flex>
              <v-flex>
                <h2>{{post.artist.email}}</h2>
              </v-flex>

              <v-card-actions class="post-actions">
                <v-btn depressed class="post-btn post-btn-follow" @click="follow">+Follow</v-btn>
                <!--v-btn depressed class="post-btn post-btn-likes" @click="bookmark">Bookmark</v-btn-->
                <v-btn depressed class="post-btn post-btn-likes" @click="like">Like</v-btn>
              </v-card-actions>

              <h1 class="v-card-h">{{post.title}}</h1>
              <h2 class="v-card-h">{{post.subtitle}}</h2>
              <p class="v-card-h">{{post.description}}</p>

              <v-layout column>
                <Comment v-for="comment in comments" :key="comment.id" :comment="comment"></Comment>
              </v-layout>
            </v-layout>

        </v-card>
      </v-flex>

      <v-flex xs12>
        <v-layout column>
          <Art v-for="art in post.arts" :key="art.id" :art="art"></Art>
        </v-layout>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  import {mapActions} from 'vuex'
  import Comment from './Comment.vue'
  import Art from './Art.vue'

  export default {
    name: 'Post',
    data() {
      return {
        comments: {
          type: Object,
          required: true
        }
      }
    },
    methods: {
      ...mapActions(['like', 'bookmark', 'follow'])
    },
    created() {
      this.$store.dispatch('get_post', {
        postId: this.$route.params.id
      })
    },
    computed: {
      post: function() {
        return this.$store.getters.post;
      }
    },
    components: {
      Comment, Art
    }
  }
</script>

<style scoped>
  @import './style/post.css';
</style>
