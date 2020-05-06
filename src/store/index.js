import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      domain: "",
      email: ""
    }
  },
  getters: {
    getUser(state) {
      return state.user;
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
