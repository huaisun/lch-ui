<template>
  <div>
    <v-btn fixed top right fab dark large color="purple" @click="dialog = true">
      <v-icon dark>mdi-android</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="75%" content-class="iframe-dialog">
      <iframe
        :src="url"
        style="height: calc(100% - 8px); frameborder= no"
        frameborder="no"
        border="0"
        marginWidth="0"
        marginHeight="0"
      ></iframe>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "google-translate",
  data: () => ({
    dialog: false,
    url: "https://translate.google.cn"
  })
};
</script>
<style scoped>
.translate-img img {
  width: 20px;
}

.translate-btn {
  margin: 10px 0;
}
</style>
