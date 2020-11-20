<template>
  <v-card>
    <v-card-title class="headline grey lighten-2" v-text="title"></v-card-title>

    <v-card-text>
      <v-text-field v-model="categoryName" class="name-field-margin" label="仓库名称"></v-text-field>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="warning" text @click="$emit('closeDialog')">
        主公三思
      </v-btn>
      <v-btn color="primary" text @click="clientSubmit()">
        主公英明
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "m-warehouse",
    props: ["title"],
    data: () => ({
      categoryName: ""
    }),
    methods: {
      clientSubmit: function() {
        this.$emit("closeDialog");
      }
    }
  }
</script>

<style scoped>
  .name-field-margin {
    margin-top: 1.25rem;
  }
</style>
