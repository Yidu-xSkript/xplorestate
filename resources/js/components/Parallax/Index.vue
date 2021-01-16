<template>
  <div
    class="parallax"
    :style="`background-image: url(${image});background-size:100%;background-position:center;object-fit:cover;`"
    :data-img-width="data_img_width"
    :data-img-height="data_img_height"
  >
    <div class="parallax-overlay"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      default: null,
      required: true,
    },
    data_img_width: {
      default: 2500,
    },
    data_img_height: {
      default: 1600,
    },
  },
  mounted() {
    this.$nextTick(() => {
      $(".parallax").css("background-attachment", "fixed");
      this.backgroundResize();
      if (!$("html").hasClass("touch")) {
        $(window).scroll(this.parallaxPosition());
        this.parallaxPosition();
      }
    });
  },
  methods: {
    backgroundResize() {
      var windowH = $(window).height();
      $(".parallax").each(function (i) {
        var path = $(this);
        var contW = path.width();
        var contH = path.height();
        var imgW = path.attr("data-img-width");
        var imgH = path.attr("data-img-height");
        var ratio = imgW / imgH;
        var diff = 100;
        diff = diff ? diff : 0;
        var remainingH = 0;
        if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
          remainingH = windowH - contH;
        }
        imgH = contH + remainingH + diff;
        imgW = imgH * ratio;
        if (contW > imgW) {
          imgW = contW;
          imgH = imgW / ratio;
        }
        path.data("resized-imgW", imgW);
        path.data("resized-imgH", imgH);
        path.css("background-size", imgW + "px " + imgH + "px");
      });
    },
    parallaxPosition() {
      var heightWindow = $(window).height();
      var topWindow = $(window).scrollTop();
      var bottomWindow = topWindow + heightWindow;
      var currentWindow = (topWindow + bottomWindow) / 2;
      $(".parallax").each(function (i) {
        var path = $(this);
        var height = path.height();
        var top = path.offset().top;
        var bottom = top + height;
        if (bottomWindow > top && topWindow < bottom) {
          var imgH = path.data("resized-imgH");
          var min = 0;
          var max = -imgH + heightWindow;
          var overflowH =
            height < heightWindow ? imgH - height : imgH - heightWindow;
          top = top - overflowH;
          bottom = bottom + overflowH;

          var value = 0;
          if ($(".parallax").is(".titlebar")) {
            value =
              min +
              (((max - min) * (currentWindow - top)) / (bottom - top)) * 2;
          } else {
            value =
              min + ((max - min) * (currentWindow - top)) / (bottom - top);
          }

          var orizontalPosition = path.attr("data-oriz-pos");
          orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
          $(this).css(
            "background-position",
            orizontalPosition + " " + value + "px"
          );
        }
      });
    },
  },
};
</script>

<style>
</style>
