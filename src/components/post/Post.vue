<template>
  <v-container fluid>
    <v-layout align-start>
      <v-flex xs12 md5 class="post-card">
        <v-card class="v-post-card">
          <v-layout column class="post-card-text">
            <v-flex>
              <v-flex>
                <v-avatar size="100px" style="margin-bottom: 7px">
                  <img :src="avatarUrl">
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
              <v-btn  v-if="!isAuthor" depressed class="post-btn post-btn-follow" @click="follow">+Подписаться</v-btn>
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
            <!--v-layout column-->
              <v-card-text v-for="comment in comments"><Comment v-bind:comment="comment"></Comment></v-card-text>
            <!--/v-layout-->
          </v-layout>

          <v-btn depressed class="post-btn post-btn-unblock" @click="submit">Отправить</v-btn>

            <v-card-actions class="post-actions">
              <v-btn v-if="isAuthor" depressed class="post-btn post-btn-delete" @click="remove">Удалить</v-btn>
              <!--v-btn v-else depressed class="post-btn post-btn-report" @click="report">Пожаловаться</v-btn-->
              <!--v-btn v-else depressed class="post-btn post-btn-report" @click="report">Вы пожаловались</v-btn-->
            </v-card-actions>
            <!--v-card-actions class="post-actions">
              <v-btn depressed class="post-btn post-btn-block" @click="block">Блокировать</v-btn>
              <v-btn depressed class="post-btn post-btn-unblock" @click="unblock">Разблокировать</v-btn>
            </v-card-actions-->


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
  import Comment from './Comment.vue'
  import Art from './Art.vue'

  export default {
    name: 'Post',
    data() {
      return {
        comment: '',
        post: null,
        comments: []
      }
    },
    computed: {
      avatarUrl() {
        if (this.post) {
          let avatar = this.post.artist.avatar
          if (avatar) {
            return `${API_BASE_URL}avatars/${avatar.link}`
          } else return ''
        }
      },
      isAuthor() {
        if (this.post) {
          let credentials = this.$store.getters.credentials
          return credentials.id === this.post.artist.id
        } else return false
      }
    },

    components: {
      Comment, Art
    },
    methods: {
      submit() {
        http.post(`post/${this.post.id}/comment`, {
              content: this.comment
            }
        ).then(res => {
          this.comments.push(res.data)
        }).catch(ex => console.log(ex))
      }
    },
    mounted() {
      http.get(`post/${this.$route.params.id}`)
          .then(res => {
            this.post = res.data
          })
          .catch(ex => console.log(ex))
      http.get(`post/${this.$route.params.id}/comments`)
          .then(res => {
            this.comments = res.data
          })
          .catch(ex => console.log(ex))
    }
  }
</script>

<style scoped>
  @import './style/post.css';
</style>
