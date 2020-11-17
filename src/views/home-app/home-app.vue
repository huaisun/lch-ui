<template>
  <v-app>
    <v-app-bar absolute hide-on-scroll dark scroll-target="#scrolling-techniques-1">
      <v-avatar>
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" :alt="user.domain">
      </v-avatar>

      <v-toolbar-title style="padding-left: 1em" v-text="user.domain"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field style="max-width: 450px" hide-details solo dense solo-inverted color="#9e9e9e" placeholder="搜索 (按 回车)"
        v-model="searchContent" filled label="Filled" clearable>
        <v-icon slot="prepend-inner" color="#9e9e9e">search</v-icon>
      </v-text-field>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container style="padding: 64px 0 0 0; height: 100%">
      <link-body></link-body>
    </v-container>
    <v-footer>
      <m-foot></m-foot>
    </v-footer>
  </v-app>
</template>
<script>
  import linkBody from "./body/link-body"
  import mFoot from "../system/footer/m.footer"
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: "home-app",
    components: {
      "m-foot": mFoot,
      "link-body": linkBody
    },
    data: () => ({
      user: {
        domain: "",
        email: ""
      },
      searchContent: ""

    }),
    created() {
      const jsonUser = localStorage.getItem("LCH__UUSER");
      if (jsonUser !== null && jsonUser !== undefined) {
        const parseUser = JSON.parse(jsonUser);
        this.user = parseUser;
        this.updateUser(parseUser);
      }
    },
    methods: {
      ...mapGetters(["getUser"]),
      ...mapActions(["updateUser"])
    }
  };
</script>

<style scoped>
  .app-content {
    padding: 41px 100px 0 100px;
  }

  @media screen and (max-width: 960px) {
    .app-content {
      padding: 20px 0 0;
    }
  }
</style>
