<template>
  <div :id="elementHandle" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "owl-carousel/owl-carousel/owl.carousel";
import "owl-carousel/owl-carousel/owl.carousel.css";
export default {
  name: "Carousel1",
  data: () => ({
    elementHandle:
      "carousel_" +
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15),
  }),
  props: {
    classes: { default: ["owl-carousel", "owl-theme"] },
    items: { default: 3 },
    nav: { default: true },
    autoplay: { default: false },
    fluidSpeed: { default: false },
    itemsDesktop: { default: [1239, 3] },
    itemsTablet: { default: [991, 2] },
    itemsMobile: { default: [767, 1] },
    responsive: {
      default: {},
    },
  },
  mounted: function () {
    //   requires mobile view adjustment
    const owl = $("#" + this.elementHandle).owlCarousel({
      autoPlay: this.autoplay,
      items: this.items,
      navigation: this.nav,
      slideSpeed: this.fluidSpeed,
      itemsDesktop: this.itemsDesktop,
      itemsTablet: this.itemsTablet,
      itemsMobile: this.itemsMobile,
      navigationText: ["", ""],
    });
  },
};
</script>

<style>
</style>
