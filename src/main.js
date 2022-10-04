import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";

import Routes from "@/routing/routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: Routes,
});

router.beforeEach((to, from, next) => {
  const isAuth = localStorage.getItem("isAuth");
  // If logged in, or going to the Login page.
  if (isAuth || to.name === "Login") {
    // Continue to page.
    next();
  } else {
    // Not logged in, redirect to login.
    next({ name: "Login" });
  }
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
