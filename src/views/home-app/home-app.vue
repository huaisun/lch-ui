<template>
  <v-app>
    <v-content>
      <div class="app-content">
        <home-search></home-search>
      </div>
      <link-main></link-main>
    </v-content>
  </v-app>
</template>
<script>
import homeSearchVue from "./search/home-search.vue";
import linkMainVue from "./link-main/link-main.vue";

export default {
  name: "home-app",
  components: {
    "home-search": homeSearchVue,
    "link-main": linkMainVue
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
