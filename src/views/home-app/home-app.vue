<template>
  <v-app>
    <m-header :user="user"></m-header>
    <v-sheet class="m-container">
      <v-sheet id="scrolling-techniques-1" class="overflow-y-auto" :style="{'maxHeight': maxHeight + 'px'}">
        <v-container>
          <m-body></m-body>
        </v-container>
      </v-sheet>
    </v-sheet>
    <v-footer>
      <m-footer></m-footer>
    </v-footer>
  </v-app>
</template>
<script>
  import Mheader from "../../components/header/m-header.vue";
  import Mbody from "../../components/body/m-body.vue"
  import Mfooter from "../../components/footer/m-footer.vue"
  import {
    mapGetters,
    mapActions
  } from "vuex";

  export default {
    name: "home-app",
    components: {
      "m-header": Mheader,
      "m-body": Mbody,
      "m-footer": Mfooter
    },
    data: () => ({
      user: {
        domain: "",
        email: ""
      },
      maxHeight: 0
    }),
    created() {
      const jsonUser = localStorage.getItem("LCH__UUSER");
      if (jsonUser !== null && jsonUser !== undefined) {
        const parseUser = JSON.parse(jsonUser);
        this.user = parseUser;
        this.updateUser(parseUser);
      }
    },
    mounted() {
      this.maxHeight = `${document.documentElement.clientHeight}` - 156;
      const _this = this;
      window.onresize = () => {
        _this.maxHeight = document.documentElement.clientHeight - 156;
      }
    },
    methods: {
      ...mapGetters(["getUser"]),
      ...mapActions(["updateUser"])
    },
    destroyed() {
      window.onresize = null
    }
  };
</script>

<style scoped>
  .m-container {
    padding: 104px 0 0 0;
    height: 100%
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
</style>
