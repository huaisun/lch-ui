<template>
  <div>
    <v-list dense nav class="py-0 avator-background">
      <v-list-item two-line>
        <v-list-item-avatar size="48">
          <img
            src="https://imgsa.baidu.com/forum/w%3D580/sign=07ae2a9f8d26cffc692abfba89004a7d/322c5bb5c9ea15ce8638bc0fb9003af33b87b2fd.jpg"
          />
        </v-list-item-avatar>
        <v-list-item-content style="height: 64px">
          <v-list-item-title style="font-size: 18px">
            {{
            user != null ? user.domain : ""
            }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{
            user != null ? user.email : ""
            }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-row class="form-row">
      <v-col cols="12" md="6" sm="12">
        <div class="lch-row left-form">
          <div
            class="list-form"
            :class="showForm ? 'transition-width-large': 'transition-width-small'"
          >
            <v-list dense rounded>
              <v-list-item v-for="item in items" :key="item.title" link @click="listClick()">
                <v-list-item-icon>
                  <v-icon :color="item.color">local_library</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
          <div
            class="link-form"
            :class="!showForm ? 'transition-width-large': 'transition-width-small'"
          >
            <v-list dense rounded>
              <v-subheader class="hidden-sm-and-up">
                <v-btn color="primary" icon @click="backList()">
                  <v-icon>undo</v-icon>
                </v-btn>
              </v-subheader>
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
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">
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
    user: {
      domain: "huaisun",
      email: "420007900@qq.com"
    },
    items: [
      { title: "Home", icon: "dashboard", color: "primary" },
      { title: "About", icon: "question_answer", color: "blue" }
    ],

    showForm: true
  }),

  methods: {
    listClick() {
      this.showForm = false;
    },
    backList() {
      this.showForm = true;
    }
  }
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

@media screen and (max-width: 960px) {
  .list-form {
    transition: width 1s;
    -moz-transition: width 1s; /* Firefox 4 */
    -webkit-transition: width 1s; /* Safari 和 Chrome */
    -o-transition: width 1s; /* Opera */
  }

  .link-form {
    transition: 1s;
    -moz-transition: width 1s; /* Firefox 4 */
    -webkit-transition: width 1s; /* Safari 和 Chrome */
    -o-transition: width 1s; /* Opera */
  }

  .transition-width-large {
    z-index: 3;
    width: 80%;
  }

  .transition-width-small {
    width: 20%;
  }

  .left-form {
    min-height: 520px;
  }
}
</style>

<style>
.list-form .theme--light.v-list {
  background: #f9f9f9;
}
</style>
