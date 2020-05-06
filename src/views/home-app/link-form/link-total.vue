<template>
  <div class="link-total">
    <div class="hidden-sm-and-up div-align-right">
      <v-btn icon @click="$emit('totalClick', iconShow)">
        <v-icon>{{
          iconShow ? "keyboard_arrow_left" : "keyboard_arrow_right"
        }}</v-icon>
      </v-btn>
    </div>
    <v-divider class="hidden-sm-and-up"></v-divider>
    <v-list dense>
      <v-list-item link class="add-list-item" @click="addUserCatalogue()">
        <div class="icon-add">
          <v-icon>add</v-icon>
        </div>
        <v-list-item-content>
          <v-list-item-title>添加目录</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        v-for="item in catalogues"
        :key="item.catalogueId"
        link
        @click="$emit('totalClick', true)"
      >
        <div class="icon-div">
          <v-icon class="icon-total" :color="item.color">label</v-icon>
        </div>
        <v-list-item-content>
          <v-list-item-title>{{ item.catalogueName }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link v-if="addShow">
        <div class="icon-div">
          <v-icon class="icon-total" :color="addColor">label</v-icon>
        </div>
        <v-list-item-content class="add-input-list">
          <div style="display: flex">
            <input v-model="name" name="name" style="width: 80%" />
            <v-btn icon x-small color="error" @click="submitCatalogue()">
              <v-icon>done</v-icon>
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { addCatalogue } from "./link-form.service";
import { mapGetters } from "vuex";

export default {
  name: "link-total",
  props: ["iconShow", "catalogues"],
  data: () => ({
    addShow: false,
    addColor: "#000",
    name: ""
  }),
  methods: {
    ...mapGetters(["getUser"]),
    /** 添加用户目录 */
    addUserCatalogue() {
      this.addShow = true;
      this.addColor = this.$common.getRandomColor();
    },

    /** 提交用户目录 */
    submitCatalogue() {
      if (this.name !== "") {
        addCatalogue({
          name: this.name,
          userId: this.getUser().id
        }).then(res => {
          if (res.data.code === 0) {
            this.$snackbar.success("创建成功");
          } else {
            this.$snackbar.error(res.data.message);
          }
        });
      }
      this.addShow = false;
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
