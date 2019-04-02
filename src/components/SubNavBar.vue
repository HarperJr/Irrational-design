<template>
  <v-toolbar class="sub-nav-orientation">
    <div class="sub-nav-bar">
    <v-btn flat>Горячее</v-btn>
    <v-btn flat>Лучшее</v-btn>
    <v-btn flat>Свежее</v-btn>
    <v-btn flat>Популярные художники</v-btn>
    </div>
  </v-toolbar>
</template>

<script>
  export default {
    name: "SubNavBar"
  }
</script>

<style>
  @import './style/navbar.css';
</style>