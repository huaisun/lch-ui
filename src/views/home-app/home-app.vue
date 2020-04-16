<template>
  <v-app>
    <v-content>
      <v-row>
        <v-col cols="4">
          <HomeSearch></HomeSearch>
        </v-col>
        <v-col cols="8"></v-col>
      </v-row>
    </v-content>
  </v-app>
</template>
<script>
import HomeSearch from "./search/home-search.vue";

export default {
  name: "home-app",
  components: {
    HomeSearch
  }
};
</script>
