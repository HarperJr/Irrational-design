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
      <v-btn flat>Войти</v-btn>
      <v-btn flat>Зарегистрироваться</v-btn>
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
