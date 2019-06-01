<template>
  <v-toolbar>
    <v-toolbar-title class="nav-logo">IrrationalDesign</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat v-on:click="navigateTo('feed')">Главная</v-btn>
      <v-btn flat>Новости</v-btn>
      <v-btn flat>О нас</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!--v-flex v-if="credentials !== null"-->
      <v-flex v-if="authorized">
        <!--Show component-->
        <div class="btn-nickname">
          <v-btn flat class="btn-options">
            Nickname
          </v-btn>
          <div class="nickname__dropdown">
            <v-btn flat class="btn-settings">
              Account
            </v-btn>
            <v-btn flat class="btn-settings">
              Settings
            </v-btn>
            <v-btn flat class="btn-settings">
              Log Out
            </v-btn>

          </div>
        </div>
        <v-flex xs12 sm6 md8 align-center justify-center layout text-xs-center>
          <v-avatar :tile="tile" :size="avatarSize" color="grey lighten-4">
            <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
          </v-avatar>
        </v-flex>
      </v-flex>
      <v-flex v-else>
        <v-btn flat v-on:click="navigateTo('auth')">Войти</v-btn>
        <v-btn flat v-on:click="navigateTo('reg')">Зарегистрироваться</v-btn>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {
        authorized: this.$store.getters.authorized
      }
    },
    computed: {
      credentials: function() {
        return this.$store.getters.credentials
      }
    },
    methods:{
      navigateTo(where, id, item){
        this.$router.push({name: where, params: {id}, query: item});
      }
    },
    watch: {
      authorized(newVal, oldVal) {
        if (newVal !== oldVal) this.$store.dispatch('get_credentials')
      }
    },
    mounted() {
      this.$store.subscribe((mutation, state) => {
        switch(mutation.type) {
          case 'set_token': {
            this.authorized = state !== undefined
          }
        }
      })
    }
  }
</script>

<style>
  @import 'mainpage/style/navbar.css';
</style>
