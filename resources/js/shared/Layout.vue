<template>
  <div>
    <compare-property />
    <header-layout />
    <slot />
    <footer-layout />
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
