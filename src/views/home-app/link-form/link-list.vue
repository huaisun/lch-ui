<template>
  <div class="link-list">
    <div class="hidden-sm-and-up div-align-right"></div>
    <v-divider class="hidden-sm-and-up"></v-divider>
    <v-list dense rounded>
      <v-list-item v-for="item in links" :key="item.id" link @click="openUrl(item.url)">
        <v-list-item-icon>
          <img style="height: 20px; width: 20px;" :src="'data:image/png;base64,' + item.ico" />
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="link-url">{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "link-list",
  props: ["links"],
  data: () => ({}),
  methods: {
    openUrl(url) {
      window.open(url);
    }
  }
};
</script>
<style scoped>
.link-list {
  border: 2px solid #e8e8e8;
  border-left: 0;
  width: calc(100% - 376px);
}

.link-url {
  color: #1976d2;
  text-decoration: underline;
}
</style>
