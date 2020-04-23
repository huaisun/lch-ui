<template>
  <div class="link-category">
    <div class="hidden-sm-and-up div-align-right">
      <v-btn icon @click="$emit('categoryClick', iconShow)">
        <v-icon>{{iconShow ? 'keyboard_arrow_left': 'keyboard_arrow_right'}}</v-icon>
      </v-btn>
    </div>
    <v-divider class="hidden-sm-and-up"></v-divider>
    <v-list dense>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        @click="$emit('categoryClick', true)"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "link-category",
  props: ["iconShow"],
  data: () => ({
    items: [
      { title: "Home", icon: "dashboard", color: "primary" },
      { title: "About", icon: "question_answer", color: "blue" }
    ]
  })
};
</script>
<style scoped>
@media screen and (min-width: 960px) {
  .link-category {
    width: 200px;
  }
}
</style>
