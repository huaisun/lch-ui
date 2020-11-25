<template>
  <v-app-bar app color="white" flat>
    <v-container class="py-0 fill-height">
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>
      <v-toolbar-title v-text="user.domain.toUpperCase()"></v-toolbar-title>

      <!-- <v-btn v-for="link in links" :key="link" text v-text="link"></v-btn> -->

      <v-spacer></v-spacer>

      <v-responsive max-width="320">
        <v-text-field filled dense flat hide-details rounded solo class="m-search" prepend-inner-icon="mdi-magnify"></v-text-field>
      </v-responsive>
    </v-container>
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
      searchContent: "",
      links: [
        "首页"
      ]
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

<style>
  .theme--light.v-text-field--solo>.v-input__control>.v-input__slot {
    background-color: #f4f4f4 !important;
  }
</style>
