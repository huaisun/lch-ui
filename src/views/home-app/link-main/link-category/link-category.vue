<template>
  <div class="link-category">
    <div class="hidden-sm-and-up div-align-right">
      <v-btn icon @click="$emit('categoryClick', iconShow)">
        <v-icon>
          {{
          iconShow ? "keyboard_arrow_left" : "keyboard_arrow_right"
          }}
        </v-icon>
      </v-btn>
    </div>
    <v-divider class="hidden-sm-and-up"></v-divider>
    <v-list dense>
      <v-list-item link class="add-list-item" @click="addUserCategory()">
        <div class="icon-add">
          <v-icon>add</v-icon>
        </div>
        <v-list-item-content>
          <v-list-item-title>添加分类</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link v-if="addShow" style="margin-left: -10px">
        <v-list-item-content class="add-input-list content-list">
          <div style="display: flex">
            <input
              v-model="name"
              name="name"
              style="width: 80%"
              @keyup.enter="submitCategory()"
            />
            <v-btn icon x-small color="error" @click="submitCategory()">
              <v-icon>done</v-icon>
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
      <div style="max-height: 550px; overflow: auto">
        <v-list-item
          v-for="item in categories"
          :key="item.categoryId"
          link
          @click="categoryClick(item.categoryId)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.categoryName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script>
export default {
  name: "link-category",
  props: ["iconShow", "categories"],
  data: () => ({
    addShow: false,
    name: ""
  }),
  methods: {
    /** 增加用户分类 */
    addUserCategory() {
      this.addShow = true;
    },
    /** 分类点击 */
    categoryClick(categoryId) {
      this.$emit("categoryClick", true, categoryId);
    },
    /** 添加分类 */
    submitCategory() {
      this.addShow = false;
      console.log(this.name);
    }
  }
};
</script>
<style scoped>
.add-input-list {
  border: 2px solid #eee;
}

.add-list-item {
  border-bottom: 2px solid #e8e8e8;
  top: -8px;
}

@media screen and (min-width: 960px) {
  .link-category {
    width: 200px;
  }
}

.content-list {
  margin-left: 10px;
}
</style>
