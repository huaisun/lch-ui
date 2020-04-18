<template>
  <v-row>
    <v-col cols="12" class="lch-row">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            class="search-menu"
            text
            :color="selectButton.color"
            dark
            v-on="on"
            v-text="selectButton.title"
          ></v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            @click="itemClick(item)"
          >
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
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "home-search",
  data: () => ({
    items: [
      { title: "BAIDU", color: "primary" },
      { title: "BING", color: "light-blue" },
      { title: "GOOGLE", color: "warning" }
    ],
    selectButton: {
      title: "BAIDU",
      color: "primary"
    },
    searchText: ""
  }),

  methods: {
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
</style>
