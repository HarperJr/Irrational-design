<template>
  <v-container fluid>
    <v-layout align-start>
      <v-flex xs12 md5 class="post-card">
        <v-card class="v-post-card">

            <v-layout column class="post-card-text">
              <v-flex>
                <v-flex>
                  <v-avatar size="100px" style="margin-bottom: 7px">
                    <img :src="avatarUrl" >
                  </v-avatar>
                </v-flex>
                <v-flex align-center offset-xs1>
                  <strong><a class="permalink" :href="'/#/profile/'+post.artist.id">{{post.artist.name}}</a></strong>
                </v-flex>
              </v-flex>
              <v-flex>
                <h2>{{post.artist.email}}</h2>
              </v-flex>

              <v-card-actions class="post-actions">
                <v-btn depressed class="post-btn post-btn-follow" @click="follow">+Подписаться</v-btn>
                <!--div>кнопка должна быть активна, если пользователь уже подписался</div-->
                <!--v-btn depressed class="post-btn post-btn-followed" @click="follow">Followed</v-btn-->
                <!--div>эту кнопку пока опустим<div-->
                <!--v-btn depressed class="post-btn post-btn-likes" @click="bookmark">Bookmark</v-btn-->
                <v-btn depressed class="post-btn post-btn-likes" @click="like">Like</v-btn>
              </v-card-actions>

              <h1 class="v-card-h">{{post.title}}</h1>
              <h2 class="v-card-h">{{post.subtitle}}</h2>
              <p class="v-card-h v-card-tarea">{{post.description}}</p>
              <v-textarea class="v-card-h"
                      v-model="comment"
                      required
                      label="Добавить комментарий"
                      single-line

                      solo></v-textarea>

              <v-card-actions class="post-actions">

                <v-btn v-if="isAuthor" depressed class="post-btn post-btn-delete" @click="remove">Удалить</v-btn>
                <!--v-btn v-else depressed class="post-btn post-btn-report" @click="report">Пожаловаться</v-btn-->
                <!--v-btn v-else depressed class="post-btn post-btn-report" @click="report">Вы пожаловались</v-btn-->
              </v-card-actions>
              <!--v-card-actions class="post-actions">
                <v-btn depressed class="post-btn post-btn-block" @click="block">Блокировать</v-btn>
                <v-btn depressed class="post-btn post-btn-unblock" @click="unblock">Разблокировать</v-btn>
              </v-card-actions-->

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
  import {mapActions, mapGetters} from 'vuex'
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
      ...mapActions(['like', 'bookmark', 'follow', 'remove', 'block', 'unblock','report'])
    },
    created() {
      this.$store.dispatch('get_post', {
        postId: this.$route.params.id
      })
    },
    computed: {
      ...mapGetters(['post']),
      avatarUrl() {
        if (this.post.artist.avatar) {
          return `${API_BASE_URL}avatars/${this.post.artist.avatar.link}`
        }
        else {return null}
      },
      isAuthor(){
        let credentials = this.$store.getters.credentials
        if (this.post) {
          return this.post.artist.id === credentials.id
        } else return false
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
