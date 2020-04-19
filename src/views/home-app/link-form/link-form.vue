<template>
  <div>
    <v-list dense nav class="py-0 avator-background">
      <v-list-item two-line>
        <v-list-item-avatar size="64">
          <img :src="userImage" />
        </v-list-item-avatar>

        <v-list-item-content style="height: 64px">
          <v-list-item-title style="font-size: 18px">{{
            user != null ? user.domain : ""
          }}</v-list-item-title>
          <v-list-item-subtitle>{{
            user != null ? user.email : ""
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-row>
      <v-col cols="6">
        <div class="lch-row">
          <div class="list-form">
            <v-list dense rounded>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon :color="item.color">local_library</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div class="link-form">
            <v-list dense rounded>
              <v-list-item v-for="item in items" :key="item.title" link>
                <v-list-item-icon>
                  <v-icon :color="item.color">local_library</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </div>
      </v-col>
      <v-col cols="6">
        <link-love></link-love>
        <link-history></link-history>
      </v-col>
    </v-row>
    <lch-tool></lch-tool>
  </div>
</template>
<script>
import linkLoveVue from "../link-love/link-love.vue";
import linkHistoryVue from "../link-history/link-history.vue";
import lchToolVue from "../tool/lch-tool.vue";

export default {
  name: "link-form",
  components: {
    "link-love": linkLoveVue,
    "link-history": linkHistoryVue,
    "lch-tool": lchToolVue
  },
  data: () => ({
    userImage:
      "https://c-ssl.duitang.com/uploads/item/202004/19/20200419105028_mlybh.jpg",
    user: {
      domain: "huaisun",
      email: "420007900@qq.com"
    },
    items: [
      { title: "Home", icon: "dashboard", color: "primary" },
      { title: "About", icon: "question_answer", color: "blue" }
    ]
  })
};
</script>
<style scoped>
.list-form {
  border: 2px solid #e8e8e8;
  width: 200px;
}
.link-form {
  border: 2px solid #e8e8e8;
  border-left: 0;
  width: calc(100% - 200px);
}
</style>

<style>
.list-form .theme--light.v-list {
  background: #f9f9f9;
}
</style>
