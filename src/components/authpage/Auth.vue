<template>
  <v-layout>
    <v-flex class="auth-form">
      <v-card>
        <v-form>
          <div class="auth-form-align">
            <v-flex xs12 sm6>
              <v-text-field
                      v-model="name"
                      label="Name"
                      single-line
                      required
                      solo></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field
                      v-model="name"
                      required
                      label="Password"
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
        name: '',
        password: ''
      }
    },
    methods: {
      submit() {
        http.post('/auth', {
          name: this.name, password: this.password
        })
            .then(response => {

            })
            .catch(e => console.log(e))
      }
    }
  }
</script>

<style scoped>
  @import 'style/auth.css';
</style>