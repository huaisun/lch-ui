<template>
  <div class="m-body">
    <v-container>
      <v-navigation-drawer class="m-navigation-drawer" clipped bottom fixed light>
        <template v-slot:prepend>
          <v-btn color="blue-grey" style="width: 90%;" class="ma-2 white--text" @click="createWarehouseDialog = true">
            <v-icon left dark>
              mdi-plus
            </v-icon>
            创建仓库
          </v-btn>
        </template>
        <v-list dense nav>
          <v-list-item v-for="(item, index) in items" :key="index" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
    <v-dialog v-model="createWarehouseDialog" width="500">
      <m-warehouse @closeDialog="closeWarehouseDialog"></m-warehouse>
    </v-dialog>
  </div>
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
      items: [],
      createWarehouseDialog: false
    }),
    created() {
      this.items = this.getNavMenu();
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
  .m-body {
    padding: 88px 0 0 0;
  }

  .m-navigation-drawer {
    height: 100vh;
    top: 64px;
    transform: translateX(0%);
    width: 256px;
    max-height: calc(100% - 256px);
    margin-top: 204px;
  }
</style>
