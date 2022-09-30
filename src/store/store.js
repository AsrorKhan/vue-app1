import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      password: "",
      email: "",
    },
  },
  mutations: {
    setUser(state, item) {
      state.user.email = item.email;
      state.user.password = item.password;
      state.user.name = item.name;
    },
  },
});
