<template>
  <div class="link-total">
    <div class="hidden-sm-and-up div-align-right">
      <v-btn icon @click="$emit('totalClick', iconShow)">
        <v-icon>{{iconShow ? 'keyboard_arrow_left': 'keyboard_arrow_right'}}</v-icon>
      </v-btn>
    </div>
    <v-divider class="hidden-sm-and-up"></v-divider>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link @click="$emit('totalClick', true)">
        <div class="icon-div">
          <v-icon class="icon-total" :color="item.color">label</v-icon>
        </div>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "link-total",
  props: ["iconShow"],
  data: () => ({
    items: [
      { title: "Home", icon: "dashboard", color: "primary" },
      { title: "About", icon: "question_answer", color: "red" }
    ]
  })
};
</script>
<style>
.icon-div {
  position: relative;
}

.icon-total {
  position: absolute !important;
  left: -30px;
  top: -12px;
}

.link-total {
  border-right: 2px solid #e8e8e8;
}
@media screen and (min-width: 960px) {
  .link-total {
    width: 176px;
  }
}
</style>
