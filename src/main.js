import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "@/store/store";
import routes from "@/routing/routes";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

new Vue({
  store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
