<template>
  <v-container>
    <v-row>
      <v-col md="auto">
        <v-sheet width="300px" rounded="lg">
          <v-list color="transparent" class="m-list">
            <v-list-item>
              <v-text-field filled dense flat hide-details rounded solo class="m-search"></v-text-field>
            </v-list-item>
            <v-divider class="my-2"></v-divider>
            <v-sheet class="m-category-list">
              <v-list-item v-for="(item, index) in categories" :key="index" link>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-sheet>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet max-height="calc(100vh - 142px)" rounded="lg" style="padding: 8px-;">
          <v-card max-width="297">
            <template slot="progress">
              <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
            </template>
            <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <v-card-title>百度</v-card-title>
            <v-card-text>
              <div><a target="_blank" href="https://www.baidu.com/?tn=62095104_26_oem_dg">www.baidu.com</a> 百度一下，你就知道</div>
            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <v-dialog v-model="createWarehouseDialog" width="500">
      <m-warehouse title="创建仓库" @closeDialog="closeWarehouseDialog"></m-warehouse>
    </v-dialog>
  </v-container>
</template>
<script>
  import {
    mapGetters
  } from "vuex";
  import Mwarehouse from "./warehouse/m-warehouse.vue";

  export default {
    name: "m-body",
    components: {
      "m-warehouse": Mwarehouse
    },
    data: () => ({
      categories: [],
      createWarehouseDialog: false
    }),
    created() {
      this.categories = this.getNavMenu();
    },
    methods: {
      ...mapGetters(["getNavMenu"]),
      closeWarehouseDialog: function() {
        this.createWarehouseDialog = false;
      }
    }
  }
</script>
<style scoped>
  .m-body {}

  .m-navigation-drawer {
    height: 100vh;
    top: 64px;
    transform: translateX(0%);
    width: 256px;
  }

  .m-category-list {
    overflow: auto;
    max-height: calc(100vh - 223px);
  }

  .m-navigation-title {
    height: 64px;
    border-bottom: 1px solid rgba(0, 0, 0, .12) !important;
  }
</style>
