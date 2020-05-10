<template>
  <div class="link-list">
    <div class="hidden-sm-and-up div-align-right">
    </div>
    <v-divider class="hidden-sm-and-up"></v-divider>
    <v-list dense rounded>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>rss_feed</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "link-list",
  data: () => ({
    items: [
      { title: "Home", icon: "dashboard", color: "primary" },
      { title: "About", icon: "question_answer", color: "blue" }
    ]
  })
};
</script>
<style scoped>
.link-list {
  border: 2px solid #e8e8e8;
  border-left: 0;
  width: calc(100% - 376px);
}
</style>
