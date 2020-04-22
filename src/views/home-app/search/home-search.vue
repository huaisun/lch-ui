<template>
  <div class="lch-row">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          class="search-menu hidden-sm-and-down"
          text
          :color="selectButton.color"
          dark
          v-on="on"
          v-text="selectButton.title"
        ></v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="itemClick(item)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-text-field
      label="KEY ENTER"
      style="max-width: 653px"
      v-model="searchText"
      @keyup.enter.native="search()"
      dense
      outlined
      append-icon="search"
    ></v-text-field>
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="search-menu hidden-sm-and-up" tile color="primary" v-on="on">搜索方式</v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" @click="searchClick(item)">
          <v-list-item-title>{{ item.translate }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "home-search",
  data: () => ({
    items: [
      { title: "BAIDU", color: "primary", translate: "百度" },
      { title: "BING", color: "light-blue", translate: "必应" },
      { title: "GOOGLE", color: "warning", translate: "谷歌" }
    ],
    selectButton: {
      title: "BAIDU",
      color: "primary"
    },
    searchText: ""
  }),

  methods: {
    searchClick() {},
    itemClick(data) {
      this.selectButton = data;
    },
    search() {
      if (this.selectButton.title === "BAIDU") {
        window.open(
          "https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=" +
            this.searchText +
            "&fenlei=256&oq=" +
            this.searchText
        );
      } else if (this.selectButton.title === "BING") {
        window.open(
          "https://cn.bing.com/search?q=" +
            this.searchText +
            "&qs=n&form=QBLHCN&pq=" +
            this.searchText +
            "&ensearch=1"
        );
      } else {
        console.log(this.searchText);
      }
    }
  }
};
</script>

<style scoped>
.search-menu {
  width: 125px;
  margin: 2px 20px 2px 0px;
}

.search-btn {
  height: 40px;
  width: 40px;
  font-size: 28px;
}

@media screen and (max-width: 600px) {
  .search-menu {
    width: auto;
    margin: 2px 2px;
  }
}
</style>
