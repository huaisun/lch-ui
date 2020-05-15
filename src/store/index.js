import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      domain: "",
      email: ""
    },
    colors: ["indigo", "orange", "primary", "green", "teal", "pink", "cyan"]
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getColor(state) {
      return state.colors[parseInt(Math.random() * 7)];
    }
  },
  mutations: {
    SET_UUSER(state, v) {
      state.user = v;
    }
  },
  actions: {
    updateUser(state, v) {
      state.commit("SET_UUSER", v);
    }
  },
  modules: {}
});
