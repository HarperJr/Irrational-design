<template>
  <v-toolbar>
    <div class = navIcon><v-toolbar-title>IrrationalDesign</v-toolbar-title></div>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Главная</v-btn>
      <v-btn flat>Новости</v-btn>
      <v-btn flat>О нас</v-btn>

      <v-flex md12 class="navField">
        <v-text-field
                label="Поиск"
                solo
        ></v-text-field>
      </v-flex>

    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Войти</v-btn>
      <v-btn flat>Регистрация</v-btn>
    </v-toolbar-items>
  </v-toolbar>

</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  @import './style/navbar.css';
</style>