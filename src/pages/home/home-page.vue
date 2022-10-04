<template>
  <div class="container">
    <h1>Dear {{store.state.user.name}}</h1>
    <div class="row">
      Welcome to our company! We're so excited to have you as part of our team.
      We're glad you've chosen us, and we want to show our appreciation by giving you a special incentive.
      We're delighted to have you as our customer. ...
      Thank you for joining us!
    </div>
  </div>
</template>


<script>
import {store} from "@/store/store";


export default {
  data() {
    return {
      store
    }
  }
}
</script>

