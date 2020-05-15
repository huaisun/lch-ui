<template>
  <v-card outlined>
    <v-card-subtitle>LOVE LINK</v-card-subtitle>
    <v-card-text>
      <v-chip-group multiple column active-class="primary--text">
        <v-chip
          v-for="tag in links"
          :close="editFlag"
          :key="tag.id"
          label
          color="primary"
          class="link-tag"
          @click:close="closeClick(tag)"
          @click="linkClik(tag)"
        >
          <div left class="avator-ico">
            <img :src="tag.ico != null ? 'data:image/png;base64,' + tag.ico: ''" />
          </div>
          <div class="link-name">{{ tag.name }}</div>
        </v-chip>
      </v-chip-group>
    </v-card-text>
  </v-card>
</template>
<script>
import { getLoveLinkByDomain } from "../link-main/link-main.service";
import { mapGetters } from "vuex";
export default {
  name: "link-love",
  data: () => ({
    links: [],
    editFlag: false
  }),
  created() {
    getLoveLinkByDomain({ domain: this.getUser().domain }).then(res => {
      this.links = res.data.data;
    });
  },
  methods: {
    ...mapGetters(["getUser", "getColor"]),
    /** 删除关闭的标签 */
    closeClick(tag) {},
    /** 标签点击 */
    linkClik(tag) {
      window.open(tag.url);
    }
  }
};
</script>

<style scoped>
.avator-ico img {
  height: 20px;
  width: 20px;
  margin-top: 2px;
  border-radius: 50%;
}

.link-name {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
  white-space: nowrap;
}
</style>
