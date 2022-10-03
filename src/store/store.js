import { reactive } from "vue";

export const store = reactive({
  state: {
    user: {
      name: "Alex",
      email: "",
      password: "",
      isAuth: false,
    },
  },
  methods: {
    setUser: function (userData) {
      console.log("userData", userData);
      store.state.user = userData;
      console.log("store.state.user", store.state.user);
    },
  },
});
