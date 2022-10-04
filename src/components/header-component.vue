<template>
    <div class="navbar navbar-expand-lg bg-dark" style="text-align: center">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
          </div>
        </div>
        <button class="btn btn-info" @click="logout">Log out</button>
      </div>
    </div>

</template>

<script>


export default {
  data() {
  },
  methods: {
    logout: function () {
      localStorage.clear();
      this.$router.push('/login')
    }
  },

};
</script>

<style scoped>

</style>
