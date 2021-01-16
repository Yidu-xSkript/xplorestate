<template>
  <section
    class="fullwidth border-top margin-top-40 margin-bottom-0 padding-top-60 padding-bottom-65"
    data-background-color="#ffffff"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h3 class="headline centered margin-bottom-40 margin-top-10">
            Companies We've Worked With
            <span
              >We can assist you with your innovation or commercialisation
              journey!</span
            >
          </h3>
        </div>
        <div class="col-md-12">
          <logo-carousel
            :classes="[
              'owl-carousel',
              'owl-theme',
              'logo-carousel',
              'dot-navigation',
            ]"
            :items="5"
            :itemsDesktop="[1239, 4]"
            :itemsTablet="[991, 3]"
            :itemsMobile="[767, 1]"
            :fluidSpeed="600"
          >
            <div class="item">
              <img src="images/logo-01.png" alt="" />
            </div>
            <div class="item">
              <img src="images/logo-02.png" alt="" />
            </div>
            <div class="item">
              <img src="images/logo-03.png" alt="" />
            </div>
            <div class="item">
              <img src="images/logo-04.png" alt="" />
            </div>
            <div class="item">
              <img src="images/logo-05.png" alt="" />
            </div>
            <div class="item">
              <img src="images/logo-06.png" alt="" />
            </div>
            <div class="item">
              <img src="images/logo-07.png" alt="" />
            </div>
          </logo-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LogoCarousel from "./Carousel/Index.vue";
export default {
  components: { LogoCarousel },
};
</script>

<style>
</style>
