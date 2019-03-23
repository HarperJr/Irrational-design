<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.btn{
  position: relative;
  display: block;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border-width: 0;
  border-radius: 8px;
  background-color: #5dd0ee;
  color: #ffffff;
}

.btn.blue {
  background-color: #5dd0ee;
}

.btn.green {
  background-color: #5deec6;
}

.btn:hover {
  background-color: #23b6dc;
}

.btn.blue:hover {
  background-color: #23b6dc;
}

.btn.green:hover {
  background-color: #4cd4ae;
}

.card {

}

</style>
