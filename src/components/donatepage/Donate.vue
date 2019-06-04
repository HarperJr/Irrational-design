<template>
  <v-container>
    <v-form>
      <v-card class="create-post">
        <v-card-title>
          <h3 class="headline mb-0">Отправить пожертвование</h3>
        </v-card-title>
        <v-card-text>
          <v-layout p5>
            <v-flex md6>
              <v-layout column>
                <v-text-field
                        v-model="amount"
                        required
                        label="Сумма"
                        single-line
                        solo></v-text-field>
                <!--v-autocomplete
                        v-model="postPayload.post.categories"
                        :items="categories"
                        label="Категории"
                        multiple
                        single-line
                        clearable
                        persistent-hint
                        solo
                >
                </v-autocomplete-->
              </v-layout>
              <v-flex>
                <v-avatar
                        :size="250"
                        color="grey lighten-4"
                >
                  <v-img
                          :src="avatarUrl"
                  ></v-img>
                </v-avatar>
              </v-flex>
            </v-flex>
            <v-flex align-center offset-xs1>
              <strong>{{nameUrl}}</strong>
            </v-flex>


          </v-layout>


        </v-card-text>
        <v-card-actions>
          <v-btn flat class="form-register-bnt" @click="submit">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    name: "Donate",
    data() {
      return {
        amount: 0
      }

    },

    computed: {
      artist() {
        return this.$store.getters.artist
      },
      avatarUrl() {
        if (this.artist) {
          return `${API_BASE_URL}/avatars/${this.artist.avatar.link}`

        } else {
          return null
        }
      },
      nameUrl() {
        if (this.artist) {
          return this.artist.name

        } else {
          return null
        }
      }
    },
    mounted() {
      this.$store.dispatch('get_artist', {
        artistId: this.$route.params.id
      })
    },
    methods: {
      submit() {
        http.post('payment/request-payment', {amount: this.amount, to: this.artist.id})
            .then(res => {
              if (res.data.status === 'success') {
                this.$router.push('donate-submit', res.data.payment_id)
              } else {
                this.$router.push('/')
              }
            })
        }
      }
  }
</script>

<style scoped>
  @import '../createpost/style/createpost.css';
</style>