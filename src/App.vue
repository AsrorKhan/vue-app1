<template>
  <div id="app">
    <p>Pagination</p>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import 'antd/dist/antd.css'

export default {
  name: "App",
  components: {},
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
