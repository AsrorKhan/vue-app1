<template>
  <div class="login-page">
    <form class="login-page__form" >
      <div class="mb-3" style="text-align: left">
        <label for="inputEmail4" class="form-label">Email</label>
        <input type="email" class="form-control" id="inputEmail4">
      </div>
      <div class="mb-3" style="text-align: left">
        <label for="inputPassword4" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword4">
      </div>
      <div class="mb-3" style="text-align: left">
        <label for="inputName" class="form-label">Name</label>
        <input type="text" class="form-control" id="inputName">
      </div>
      <div class="mb-3 form-check" style="text-align: left">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary">Sign up</button>
    </form>
  </div>
</template>


<script>

</script>
<style lang="scss">
@import "login.scss";
</style>
