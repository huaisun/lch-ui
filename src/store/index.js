import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      domain: "",
      email: ""
    },
    colors: ["indigo", "orange", "primary", "green", "teal", "pink", "cyan"],
    nav_menu: [{
        title: "Dashboard",
        icon: "mdi-view-dashboard"
      },
      {
        title: "Photos",
        icon: "mdi-image"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      },
      {
        title: "About",
        icon: "mdi-help-box"
      }
    ]
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getColor(state) {
      return state.colors[parseInt(Math.random() * 7)];
    },
    getNavMenu(state) {
      return state.nav_menu;
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
