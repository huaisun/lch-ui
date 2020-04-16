import Vue from "vue";
import VueRouter from "vue-router";
/** system */
import SingIn from "@/views/system/sign-in/sign-in.vue";
import SingUp from "@/views/system/sign-up/sign-up.vue";
/** home */
import HomeApp from "@/views/home-app/home-app.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "homeApp",
    component: HomeApp
  },
  {
    path: "/login",
    name: "login",
    component: SingIn
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: SingUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
