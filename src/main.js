import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// css
import "@/assets/css/style.css";
// js
import CommonJs from "@/assets/common/common.js";

// component
import Snackbar from "@/components/snackbar/index";

Vue.config.productionTip = false;
Vue.prototype.$snackbar = Snackbar;
Vue.prototype.$common = CommonJs;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
