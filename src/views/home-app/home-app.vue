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
import HomeSearch from "./search/home-search.vue";
import LinkForm from "./link-form/link-form.vue";
export default {
  name: "home-app",
  components: {
    "home-search": HomeSearch,
    "link-form": LinkForm
  }
};
</script>

<style scoped>
.app-content {
  padding: 41px 100px;
}
</style>
