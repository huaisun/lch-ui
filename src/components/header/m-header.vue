<template>
  <v-app-bar absolute dense color="#6A76AB" dark shrink-on-scroll prominent src="https://picsum.photos/1920/1080?random"
    fade-img-on-scroll scroll-target="#scrolling-techniques-1" scroll-threshold="500">
    <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>
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

    <template v-slot:extension>
      <v-spacer></v-spacer>
      <v-tabs class="m-tab" align-with-title>
        <v-tab>
          <v-icon small>mdi-dialpad</v-icon>
          <span> 仓库 </span>
        </v-tab>
        <v-tab>
          <v-icon small>mdi-thumb-up</v-icon>
          <span> 收藏 </span>
        </v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
    </template>
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
