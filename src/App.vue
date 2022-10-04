<template>
  <div id="app">
    <header-component v-if="auth"></header-component>
    <div v-else></div>
    <router-view></router-view>
  </div>
</template>

<script>
import headerComponent from "@/components/header-component";
export default {
  name: "App",
  data() {
    return {
      auth: Boolean(localStorage.getItem('isAuth'))
    }
  },
  components: {
    'header-component': headerComponent
  },

  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push('login')
    }
  },

  beforeCreate() {
    console.log('beforeCreate')
    let isAuth  = localStorage.getItem('isAuth')
    this.auth = Boolean(isAuth)
  },
  updated() {
    console.log('updated')
    let isAuth  = localStorage.getItem('isAuth')
    this.auth = Boolean(isAuth)
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-link {
  color: white;
  border-radius: 10px;
}

.router-link-exact-active {
  color: teal;
  border: 1px solid white;
  border-radius: 10px;
  background-color: #fff;
}

@import "~bootstrap/dist/css/bootstrap.css";
</style>
