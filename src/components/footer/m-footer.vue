<template>
  <div class="footer">
    <div class="bottom-layer">
      <span class="lh">©2020&nbsp;Lch&nbsp;</span>
      <span class="lh">(皖)-0020</span>
      <a href="http://www.miitbeian.gov.cn/" target="_blank">
        <span class="lh">皖ICP备20002653号-1</span>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: "m-footer"
  }
</script>
<style scoped>
  .footer {
    width: 100%;
    z-index: 302;
    bottom: 0;
    left: 0;
    height: 18px;
    overflow: hidden;
    zoom: 1;
    margin: 0;
    text-align: left;
    line-height: 18px;
  }

  .bottom-layer {
    color: #bbb;
    text-align: right;
  }

  .lh {
    display: inline;
    margin-right: 20px;
    font-size: 12px;
  }
</style>
