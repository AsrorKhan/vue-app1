<template>
  <div id="app">
    <div class="navbar navbar-expand-lg bg-dark" style="text-align: center">
      <div class="container-fluid" >
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
          </div>
        </div>
      </div>

    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

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
