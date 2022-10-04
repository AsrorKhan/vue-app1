<template>
  <div class="login-page">
    <form class="login-page__form" @submit="login">
      <div class="mb-3" style="text-align: left">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4" v-model="userData.email">
        <span style="color: red" v-if="!stateOfValidationUserData.email">{{errorMessages.email}}</span>
        <span v-else></span>
      </div>
      <div class="mb-3" style="text-align: left">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4" v-model="userData.password">
        <span style="color: red" v-if="!stateOfValidationUserData.password">{{errorMessages.password}}</span>
        <span v-else></span>
      </div>
      <div class="mb-3" style="text-align: left">
        <label for="inputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputName" v-model="userData.name">
        <span style="color: red" v-if="!stateOfValidationUserData.name">{{errorMessages.name}}</span>
        <span v-else></span>
      </div>
      <div class="mb-3 form-check" style="text-align: left">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
      </div>
      <button type="submit" class="btn btn-primary" @click="login">Sign up</button>
    </form>
  </div>
</template>


<script>
import {store} from "@/store/store";


export default {
  data() {
    return {
      stateOfValidationUserData: {
        name: true,
        email: true,
        password: true
      },
      errorMessages: {
        name: 'Name - special symbols and numeric value not allowed and it must at least 2 characters, ',
        password: 'Password - must contain alphanumeric characters, at least 8',
        email: 'Email - must be a valid email address'
      },
      userData: {
        name: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    setUserdata: function () {
      store.methods.setUser({...this.userData, isAuth: true})
    },
    login: function (e) {
      e.preventDefault();
      let checkerName = new RegExp('[a-zA-Z]{2,}$', 'gm');
      let checkerPassword = new RegExp('^[a-zA-Z0-9!@#$%^&*]{8,16}$', 'gm');
      let checkerEmail = new RegExp('^[\\w\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$', 'gm');

      if (checkerName.test(this.userData.name)) {
        this.stateOfValidationUserData.name = true
      } else {
        this.stateOfValidationUserData.name = false
      }
      if (checkerPassword.test(this.userData.password)) {
        this.stateOfValidationUserData.password = true
      } else {
        this.stateOfValidationUserData.password = false
      }
      if (checkerEmail.test(this.userData.email)) {
        this.stateOfValidationUserData.email = true
      } else {
        this.stateOfValidationUserData.email = false
      }
      const {email, password, name} = this.stateOfValidationUserData;
      if(email, password, name) {
        localStorage.setItem('isAuth', 'true');
        this.setUserdata();
        this.$router.push('/')
      }
      console.log("isValidName:", this.stateOfValidationUserData.name)
      console.log("isValidPassword:", this.stateOfValidationUserData.password)
      console.log("isValidEmail:", this.stateOfValidationUserData.email)
      console.log("this.userData.email", this.userData.email);
      console.log("this.userData.password", this.userData.password);
      console.log("this.userData.name", this.userData.name);

    }
  },
}
</script>
<style lang="scss">
@import "login.scss";
</style>
