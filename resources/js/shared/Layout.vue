<template>
  <div id="wrapper">
    <compare-property />
    <header-layout />
    <slot />
    <footer-layout />
    <div id="backtotop"><a href="#"></a></div>
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
};
</script>

<style>
</style>
