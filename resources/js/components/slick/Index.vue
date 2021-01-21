<template>
  <div class="slick" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "slick-carousel";
export default {
  props: {
    classes: {
      type: Array,
      default: [],
    },
    centerMode: {
      type: Boolean,
      default: false,
    },
    centerPadding: {
      type: String,
      default: "50px",
    },
    slidesToShow: {
      type: Number,
      default: 1,
    },
    slidesToScroll: {
      type: Number,
      default: 1,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    autoplaySpeed: {
      type: Number,
      default: 3000,
    },
    responsive: {
      type: Array,
      defaul: null,
    },
    dots: {
      type: Boolean,
      default: false,
    },
    arrows: {
      type: Boolean,
      default: true,
    },
    asNavFor: {
      type: String,
      required: false,
    },
    focusOnSelect: {
      type: Boolean,
      default: false,
    },
    fade: {
      type: Boolean,
      default: false,
    },
    slide: {
      type: String,
      default: "",
    },
    adaptiveHeight: {
      type: Boolean,
      default: false,
    },
  },
  mounted: function () {
    var that = this;
    $(".slick").each(function () {
      $(this)
        .slick({
          centerMode: that.centerMode,
          centerPadding: that.centerPadding,
          slidesToShow: that.slidesToShow,
          autoplay: that.autoplay,
          autoplaySpeed: that.autoplaySpeed,
          responsive: that.responsive,
          slidesToScroll: that.slidesToScroll,
          asNavFor: that.asNavFor,
          dots: that.dots,
          arrows: that.arrows,
          focusOnSelect: that.focusOnSelect,
          fade: that.fade,
          slide: that.slide,
          adaptiveHeight: that.adaptiveHeight,
        })
        .on("afterChange", function (event, slick, currentSlide) {
          that.activate(currentSlide);
        });
    });
    this.activate(0);
  },
  unmounted: function () {
    $(".slick").slick("unslick");
  },
  methods: {
    activate: function (currentSlide) {
      this.$nextTick(() => {
        $(".slick .slick-slide").each(function () {
          if ($(this).is(".slick-center")) {
            $(this)[0].firstChild.firstChild.classList.add("slick-center");
          } else {
            if (
              $(this).attr("data-slick-index") == currentSlide - 1 ||
              $(this).attr("data-slick-index") == currentSlide + 1
            ) {
              if (
                $(this)[0].firstChild.firstChild.classList.contains(
                  "slick-center"
                )
              ) {
                $(this)[0].firstChild.firstChild.classList.remove(
                  "slick-center"
                );
              }
            }
          }
        });
      });
    },
  },
};
</script>

<style>
</style>
