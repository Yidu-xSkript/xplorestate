<template>
  <div class="compare-slide-menu">
    <div class="csm-trigger" @click="triggerCompare"></div>

    <div class="csm-content">
      <h4>
        Compare Properties
        <div class="csm-mobile-trigger" @click="triggerMobileCompare"></div>
      </h4>

      <div class="csm-properties">
        <div class="listing-item compact">
          <a href="single-property-page-2.html" class="listing-img-container">
            <div class="remove-from-compare"><i class="fa fa-close"></i></div>
            <div class="listing-badges">
              <span>For Sale</span>
            </div>
            <div class="listing-img-content">
              <span class="listing-compact-title"
                >Eagle Apartments <i>$420,000</i></span
              >
            </div>
            <img src="images/listing-01.jpg" alt="" />
          </a>
        </div>

        <div class="listing-item compact">
          <a href="single-property-page-2.html" class="listing-img-container">
            <div class="remove-from-compare"><i class="fa fa-close"></i></div>
            <div class="listing-badges">
              <span>For Sale</span>
            </div>
            <div class="listing-img-content">
              <span class="listing-compact-title"
                >Selway Apartments <i>$420,000</i></span
              >
            </div>
            <img src="images/listing-03.jpg" alt="" />
          </a>
        </div>

        <div class="listing-item compact">
          <a href="single-property-page-2.html" class="listing-img-container">
            <div class="remove-from-compare"><i class="fa fa-close"></i></div>
            <div class="listing-badges">
              <span>For Sale</span>
            </div>
            <div class="listing-img-content">
              <span class="listing-compact-title"
                >Oak Tree Villas <i>$535,000</i></span
              >
            </div>
            <img src="images/listing-05.jpg" alt="" />
          </a>
        </div>
      </div>

      <div class="csm-buttons">
        <a href="compare-properties.html" class="button">Compare</a>
        <a href="#" class="button reset">Reset</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    triggerCompare: function (e) {
      $(".compare-slide-menu").toggleClass("active");
    },
    triggerMobileCompare: function(e) {
		$('.compare-slide-menu').removeClass('active');
    }
  },
};
</script>

<style>
</style>
