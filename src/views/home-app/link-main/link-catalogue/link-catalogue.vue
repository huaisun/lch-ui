<template>
  <div class="link-total">
    <div class="hidden-sm-and-up div-align-right">
      <v-btn icon @click="$emit('catalogueClick', iconShow)">
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
      <v-list-item link v-if="addShow" style="margin-left: -10px">
        <div class="icon-div">
          <v-icon class="icon-total" :color="addColor">label</v-icon>
        </div>
        <v-list-item-content class="add-input-list content-list">
          <div style="display: flex">
            <input
              v-model="name"
              name="name"
              style="width: 80%"
              @keyup.enter="submitCatalogue()"
            />
            <v-btn icon x-small color="error" @click="submitCatalogue()">
              <v-icon>done</v-icon>
            </v-btn>
          </div>
        </v-list-item-content>
      </v-list-item>
      <div style="max-height: 550px; overflow-y: auto; margin-left: -10px">
        <v-list-item
          v-for="item in catalogues"
          :key="item.catalogueId"
          link
          @click="$emit('catalogueClick', true, item.categories)"
        >
          <div class="icon-div">
            <v-icon class="icon-total" :color="item.color">label</v-icon>
          </div>
          <v-list-item-content class="content-list">
            <v-list-item-title>{{ item.catalogueName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list>
  </div>
</template>

<script>
import { addCatalogue } from "../link-main.service";
import { mapGetters } from "vuex";

export default {
  name: "link-catalogue",
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
          color: this.addColor,
          userId: this.getUser().id
        }).then(res => {
          if (res.data.code === 0) {
            this.$snackbar.success("创建成功");
            this.$emit("refreshCatalogue");
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
  left: -18px;
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

.content-list {
  margin-left: 10px;
}
</style>
