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
<style scoped>
.translate-img img {
  width: 20px;
}

.translate-btn {
  margin: 10px 0;
}
.menu-toggler {
  position: fixed;
  display: block;
  top: 140px;
  right: 140px;
  margin: auto;
  width: 40px;
  height: 40px;
  z-index: 2;
  opacity: 0;
  cursor: pointer;
}

.menu-toggler:hover + label,
.menu-toggler:hover + label:before,
.menu-toggler:hover + label:after {
  background: #2196f3;
}

.menu-toggler:checked + label {
  background: transparent;
}

.menu-toggler:checked + label:before,
.menu-toggler:checked + label:after {
  top: 0;
  width: 40px;
  transform-origin: 50% 50%;
}

.menu-toggler:checked + label:before {
  transform: rotate(45deg);
}

.menu-toggler:checked + label:after {
  transform: rotate(-45deg);
}

.menu-toggler:checked ~ ul .menu-item {
  opacity: 1;
}

.menu-toggler:checked ~ ul .menu-item:nth-child(1) {
  transform: rotate(0deg) translateX(-110px);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(2) {
  transform: rotate(60deg) translateX(-110px);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(3) {
  transform: rotate(120deg) translateX(-110px);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(4) {
  transform: rotate(180deg) translateX(-110px);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(5) {
  transform: rotate(240deg) translateX(-110px);
}

.menu-toggler:checked ~ ul .menu-item:nth-child(6) {
  transform: rotate(300deg) translateX(-110px);
}

.menu-toggler:checked ~ ul .menu-item a {
  pointer-events: auto;
}

.menu-toggler + label {
  width: 40px;
  height: 5px;
  display: block;
  z-index: 1;
  border-radius: 2.5px;
  background: rgba(33, 150, 243, 0.7);
  transition: transform 0.5s, top 0.5s;
  position: fixed;
  display: block;
  top: 158px;
  right: 140px;
  margin: auto;
}

.menu-toggler + label:before,
.menu-toggler + label:after {
  width: 40px;
  height: 5px;
  display: block;
  z-index: 1;
  border-radius: 2.5px;
  background: rgba(33, 150, 243, 0.7);
  transition: transform 0.5s, top 0.5s;
  content: "";
  position: absolute;
  left: 0;
}

.menu-toggler + label:before {
  top: 10px;
}

.menu-toggler + label:after {
  top: -10px;
}

.menu-item:nth-child(1) a {
  transform: rotate(0deg);
}

.menu-item:ntrh-child(2) a {
  transform: rotate(-60deg);
}

.menu-item:nth-child(3) a {
  transform: rotate(-120deg);
}

.menu-item:nth-child(4) a {
  transform: rotate(-180deg);
}

.menu-item:nth-child(5) a {
  transform: rotate(-240deg);
}

.menu-item:nth-child(1) a {
  transform: rotate(-300deg);
}

.menu-item {
  position: fixed;
  display: block;
  top: 120px;
  right: 120px;
  margin: auto;
  width: 80px;
  height: 80px;
  display: block;
  opacity: 0;
  transition: 0.5s;
}

.menu-item a {
  display: block;
  widows: inherit;
  height: inherit;
  line-height: 80px;
  color: rgba(33, 150, 243, 0.7);
  background: rgba(33, 150, 243, 0.2);
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  font-style: 40px;
  pointer-events: none;
  transition: 0.2s;
}

.menu-item a:hover {
  box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.3);
  color: #2196f3;
  background: rgba(33, 150, 243, 0.3);
  font-size: 44.4px;
}

body {
  font: 18px/1.6 Helvetica, Arial, sans-serif;
  max-width: 620px;
  margin: 20px auto;
  padding: 0 20px;
  color: #666;
}

h1 {
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  text-align: center;
}

/* Styles for the context menu */
#custom_context {
  display: inline-block;
  display: none;
  position: fixed;
  min-width: 200px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);

  font-size: 0.8em;
}

#custom_context .inner-container {
  padding: 5px;
}

#custom_context .inner-container .sharing-icons {
  padding-left: 0;
  margin: 0;
  list-style-type: none;
}

#custom_context .inner-container .sharing-icons li {
  padding: 10px 10px;
  margin: -5px -5px;

  cursor: default;

  background-color: #f1f1f1;
}

#custom_context .inner-container .sharing-icons li:hover {
  background-color: #fff;
}

#custom_context .inner-container .sharing-icons li span {
  font-weight: 400;
}

#custom_context .inner-container .sharing-icons li span.icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  margin-right: 10px;
}

#custom_context .inner-container .sharing-icons li.fb {
  color: #223d77;
}

#custom_context .inner-container .sharing-icons li.tw {
  color: #1c90c4;
}

#custom_context .inner-container .sharing-icons li.gp {
  color: #cf4a14;
}

#custom_context .inner-container .sharing-icons li.pi {
  color: #db163f;
}
</style>
