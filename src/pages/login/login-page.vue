<template>
  <div class="login-page">
    <form class="login-page__form">
      <div class="mb-3" style="text-align: left">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" v-model="userData.email">
      </div>
      <div class="mb-3" style="text-align: left">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" v-model="userData.password">
      </div>
      <div class="mb-3" style="text-align: left">
        <label for="inputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputName" v-model="userData.name">
      </div>
      <div class="mb-3 form-check" style="text-align: left">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary" @click="setUserdata">Sign up</button>
    </form>
  </div>
</template>


<script>
import {store} from "@/store/store";


export default {
  data() {
    return {
      // regExp: {
      //   name: '/[a-zA-Z\s]$/g',
      //   password: '/^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/g',
      //   email: '/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/g'
      // },
      userData: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    setUserdata: function () {
      store.methods.setUser(this.userData)
    }
  }
}
</script>
<style lang="scss">
@import "login.scss";
</style>
