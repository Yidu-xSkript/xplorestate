<template>
  <div id="wrapper">
    <compare-property />
    <header-layout />
    <slot />
    <footer-layout />
    <div id="backtotop"><a href="#" @click="backToTopOnClick"></a></div>
  </div>
</template>

<script>
import HeaderLayout from "./nav/Header.vue";
import FooterLayout from "./Footer.vue";
import CompareProperty from "./compare/Index.vue";
export default {
  components: {
    HeaderLayout,
    FooterLayout,
    CompareProperty,
  },
  data: () => ({
    pxShow: 600,
    fadeInTime: 300,
    scrollSpeed: 500,
    fadeOutTime: 300,
  }),
  mounted() {
    window.addEventListener("scroll", this.backToTopButtonAnimation);
  },
  unmounted() {
    window.removeEventListener("scroll", this.backToTopButtonAnimation);
  },
  methods: {
    backToTopButtonAnimation: function () {
      if ($(window).scrollTop() >= this.pxShow) {
        $("#backtotop").fadeIn(this.fadeInTime);
      } else {
        $("#backtotop").fadeOut(this.fadeOutTime);
      }
    },
    backToTopOnClick: function () {
      $("html, body").animate({ scrollTop: 0 }, this.scrollSpeed);
      return false;
    },
  },
};
</script>

<style>
</style>
