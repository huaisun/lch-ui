<template>
  <div>
    <v-app-bar shrink-on-scroll light elevation="0" dense>
      <v-tabs>
        <v-tab>
          <v-icon small>mdi-dialpad</v-icon>
          <span> 仓库 </span>
        </v-tab>
        <v-tab>
          <v-icon small>mdi-thumb-up</v-icon>
          <span> 收藏 </span>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-sheet style="max-height: 600px; overflow-y: auto;">
      <v-container style="height: 1500px;"></v-container>
    </v-sheet>
  </div>
</template>
<script>
  export default {
    name: "link-body"
  }
</script>
<style scoped>
</style>
