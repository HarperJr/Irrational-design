<template>
  <v-toolbar>
    <v-toolbar-title class="nav-logo">IrrationalDesign</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Главное</v-btn>
      <v-btn flat>Новости</v-btn>
      <v-btn flat>О нас</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <!--v-btn flat>Войти</v-btn-->
      <!--v-btn flat>Зарегистрироваться</v-btn-->
      <div class="btn-nickname">
        <v-btn flat>
          Nickname
        </v-btn>
        <div class="nickname__dropdown">
          <v-btn flat>
            Account
          </v-btn>
          <v-btn flat>
            Account
          </v-btn>
          <v-btn flat>
            Account
          </v-btn>
          <v-btn flat>
            Account
          </v-btn>
          <v-btn flat>
            Account
          </v-btn>
        </div>
      </div>
      <v-flex
              xs12
              sm6
              md8
              align-center
              justify-center
              layout
              text-xs-center
      >
        <v-avatar
                :tile="tile"
                :size="avatarSize"
                color="grey lighten-4"
        >
          <img src="https://vuetifyjs.com/apple-touch-icon-180x180.png" alt="avatar">
        </v-avatar>
      </v-flex>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style>
  @import 'mainpage/style/navbar.css';
</style>
