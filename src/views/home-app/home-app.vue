<template>
  <v-app>
    <v-content>
      <div class="app-content">
        <home-search></home-search>
        <link-form></link-form>
      </div>
    </v-content>
  </v-app>
</template>
<script>
import homeSearchVue from "./search/home-search.vue";
import linkFormVue from "./link-form/link-form.vue";

export default {
  name: "home-app",
  components: {
    "home-search": homeSearchVue,
    "link-form": linkFormVue
  }
};
</script>

<style scoped>
.app-content {
  padding: 41px 100px;
}
</style>
