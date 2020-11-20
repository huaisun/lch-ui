<template>
  <v-app-bar absolute color="#6A76AB" dark scroll-target="#scrolling-techniques-1" >
    <v-avatar>
      <img src="https://cdn.vuetifyjs.com/images/john.jpg" :alt="user.domain">
    </v-avatar>

    <v-toolbar-title style="padding-left: 1em" v-text="user.domain.toUpperCase()"></v-toolbar-title>

    <v-spacer></v-spacer>

    <v-text-field class="search-text" hide-details solo dense solo-inverted color="#9e9e9e" placeholder="搜索 (按 回车)"
      v-model="searchContent" filled label="Filled" clearable>
      <v-icon slot="prepend-inner" color="#9e9e9e">search</v-icon>
    </v-text-field>

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn dark icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list dense flat>
        <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-power</v-icon>
          </v-list-item-icon>
          <v-list-item-title> 退出登录 </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  import {
    mapActions
  } from "vuex";

  export default {
    name: "m-header",
    props: ["user"],
    data: () => ({
      searchContent: ""
    }),
    methods: {
      ...mapActions(["updateUser"]),
      /**
       * 退出登录
       */
      logout: function() {
        localStorage.clear();
        this.updateUser({
          domain: "",
          email: ""
        })
        this.$router.push({
          name: "login"
        })
      }
    }
  }
</script>

<style scoped>
  .search-text {
    max-width: 450px;
    margin-top: 4px !important;
  }

  .m-tab span {
    margin-left: 1em;
  }
</style>
