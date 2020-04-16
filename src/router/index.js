import Vue from "vue";
import VueRouter from "vue-router";
/** system */
import SingIn from "@/views/system/sign-in/sign-in.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: SingIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
