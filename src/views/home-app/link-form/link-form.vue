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
            {{ user != null ? user.domain : "" }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ user != null ? user.email : "" }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-row class="form-row">
      <v-col cols="12" md="6" sm="12">
        <div class="lch-row">
          <div
            class="out-category"
            :class="showForm == 3 ? 'out-category-and-small' : ''"
          >
            <!-- 分类栏 -->
            <div class="search-category hidden-sm-and-down">
              <v-text-field
                label="搜索"
                dense
                append-icon="search"
                hide-details="false"
              ></v-text-field>
            </div>
            <div style="display: flex">
              <link-total
                class="link-total-form"
                :catalogues="catalogues"
                :class="
                  showForm == 1
                    ? 'transition-width-large'
                    : 'transition-width-small-and-total'
                "
                :icon-show="showForm == 1"
                @catalogueClick="catalogueClick"
                @refreshCatalogue="refreshCatalogue"
              ></link-total>
              <link-category
                class="link-category-form"
                :categories="categories"
                :class="
                  showForm == 2
                    ? 'transition-width-large'
                    : 'transition-width-small'
                "
                :icon-show="showForm == 2"
                @categoryClick="categoryClick"
              ></link-category>
            </div>
          </div>
          <link-list
            class="link-list-form"
            :class="
              showForm == 3
                ? 'transition-width-large-list'
                : 'transition-width-small'
            "
          ></link-list>
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
import linkTotalVue from "./link-total.vue";
import linkCategoryVue from "./link-category.vue";
import linkListVue from "./link-list.vue";
import { mapActions, mapGetters } from "vuex";
import { getCatalogue } from "./link-form.service";

export default {
  name: "link-form",
  components: {
    "link-love": linkLoveVue,
    "link-history": linkHistoryVue,
    "lch-tool": lchToolVue,
    "link-total": linkTotalVue,
    "link-category": linkCategoryVue,
    "link-list": linkListVue
  },
  data: () => ({
    user: {
      domain: "",
      email: ""
    },
    // 目录
    catalogues: [],
    // 分类
    categories: [],
    showForm: 1
  }),
  created() {
    const jsonUser = localStorage.getItem("LCH__UUSER");
    if (jsonUser !== null && jsonUser !== undefined) {
      const parseUser = JSON.parse(jsonUser);
      this.user = parseUser;
      this.updateUser(parseUser);
      this.refreshCatalogue();
    }
  },

  methods: {
    ...mapActions(["updateUser"]),
    ...mapGetters(["getUser"]),
    /** 响应点击事件 */
    catalogueClick(flag, categories) {
      this.totalClick(flag);
      if (categories === undefined || categories == null) {
        this.categories = null;
      } else {
        this.categories = categories;
      }
    },
    totalClick(flag, categories) {
      if (flag) this.showForm = 2;
      else this.showForm = 1;
    },
    /** 分类点击事件 */
    categoryClick(flag) {
      if (flag) this.showForm = 3;
      else this.showForm = 2;
    },
    /** 刷新目录 */
    refreshCatalogue() {
      getCatalogue({ domain: this.getUser().domain }).then(res => {
        this.catalogues = res.data.data;
        if (this.catalogues.length > 0) {
          this.categories = this.catalogues[0].categories;
        }
      });
    }
  }
};
</script>
<style scoped>
.out-category {
  border: 2px solid #e8e8e8;
}

.search-category {
  padding: 10px 20px;
  border-bottom: 2px solid #e8e8e8;
}

@media screen and (max-width: 960px) {
  .link-total-form,
  .link-category-form,
  .link-list-form,
  .out-category {
    transition: width 1s;
    -moz-transition: width 1s; /* Firefox 4 */
    -webkit-transition: width 1s; /* Safari 和 Chrome */
    -o-transition: width 1s; /* Opera */
  }

  .out-category {
    width: 100%;
  }

  .out-category-and-small {
    width: 80px;
  }

  .transition-width-large {
    z-index: 3;
    width: calc(100% - 40px);
  }

  .transition-width-small {
    width: 40px;
    overflow: hidden;
  }

  .transition-width-small-and-total {
    width: 40px;
  }

  .transition-width-large-list {
    width: calc(100% - 80px);
  }
}
</style>

<style>
.list-form .theme--light.v-list {
  background: #f9f9f9;
}
</style>
