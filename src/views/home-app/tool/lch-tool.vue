<template>
  <div>
    <!-- 旋转多功能按钮 -->
    <nav class="menu">
      <input :checked="checked" class="menu-toggler" type="checkbox" />
      <label for="menu-toggler"></label>
      <ul>
        <li class="menu-item">
          <a class="fa fa-facebook" href="#"></a>
        </li>
        <li class="menu-item">
          <a class="fa fa-google" href="#"></a>
        </li>
        <li class="menu-item">
          <a class="fa fa-instagram" href="#"></a>
        </li>
        <li class="menu-item">
          <a class="fa fa-codepen" href="#"></a>
        </li>
        <li class="menu-item">
          <a class="fa fa-linkedin" href="#"></a>
        </li>
        <li class="menu-item">
          <a class="fa fa-github" href="#"></a>
        </li>
      </ul>
    </nav>
    <!-- 鼠标右键点击效果 -->
    <aside id="custom_context">
      <div class="inner-container">
        <ul class="sharing-icons">
          <li class="fb">
            <span class="icon">
              <i class="fa fa-facebook"></i>
            </span>
            <span>Share</span>
          </li>
          <li class="tw">
            <span class="icon">
              <i class="fa fa-twitter"></i>
            </span>
            <span>Tweet</span>
          </li>
          <li class="gp">
            <span class="icon">
              <i class="fa fa-google-plus"></i>
            </span>
            <span>Share</span>
          </li>
          <li class="pi">
            <span class="icon">
              <i class="fa fa-pinterest"></i>
            </span>
            <span>Pin it</span>
          </li>
        </ul>
      </div>
    </aside>
    <v-dialog v-model="dialog" width="75%" content-class="iframe-dialog">
      <iframe
        :src="url"
        style="height: calc(100% - 8px); frameborder= no"
        frameborder="no"
        border="0"
        marginwidth="0"
        marginheight="0"
      ></iframe>
    </v-dialog>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "google-translate",
  data: () => ({
    dialog: false,
    url: "https://translate.google.cn",
    checked: false
  }),
  mounted() {
    /** 鼠标事件 */
    $(document).ready(function() {
      // Function to disable inbuilt context menu
      $(document).on("contextmenu", function(e) {
        e.preventDefault();
      });

      $(window).on("mousedown", function(e) {
        $("#custom_context").fadeOut(100);
      });

      $(".menu-item").on("mousedown", function(e) {
        $("#custom_context").fadeOut(100);
      });

      // Function to show custom context menu
      $(".menu-item").on("mousedown", function(e) {
        if (e.button === 2) {
          var axisX = e.pageX;
          var axisY = e.pageY;

          $("#custom_context").fadeIn(100);
          $("#custom_context").css({
            display: "block",
            left: axisX,
            top: axisY
          });

          e.stopPropagation();
          e.preventDefault();
        } else {
          return false;
        }
      });
    });
  }
};
</script>
<style scoped src="./lch-tool.css"></style>
