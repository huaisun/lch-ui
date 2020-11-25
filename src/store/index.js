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
      }
    ],
    nav_links: [{
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }, {
      title: "百度一下，你就知道",
      link: "https://www.baidu.com/?tn=62095104_26_oem_dg"
    }]
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
    },
    getNavLinks(state) {
      return state.nav_links;
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
