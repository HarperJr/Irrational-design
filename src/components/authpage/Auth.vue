<template>
  <v-layout>
    <v-flex class="auth-form">
      <v-card>
        <h3 class="headline mb-0">Войти</h3>
        <v-form>
          <div class="auth-form-align">
            <v-flex xs12 sm6>
              <v-text-field
                      v-model="authCredentials.name"
                      label="Name"
                      single-line
                      required
                      solo></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                      v-model="authCredentials.password"
                      required
                      label="Password"
                      type="password"
                      single-line
                      solo></v-text-field>
            </v-flex>
          </div>
          <v-card-actions>
            <v-btn flat @click="submit">Войти</v-btn>
            <v-btn flat class="form-register-bnt">Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  const axios = require('axios');
  export default {
    name: "Auth",
    data() {
      return {
        authCredentials: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      submit() {
        this.$store.dispatch('authorize', {
          credentials: this.authCredentials,
          callback: () => {
            this.$router.push('/')
          }
        })
      }
    }
  }
</script>

<style scoped>
  @import 'style/auth.css';
</style>
