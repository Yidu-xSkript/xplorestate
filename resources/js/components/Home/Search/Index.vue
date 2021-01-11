<template>
  <!-- 6th Home Design -->
  <section class="home-six home6-overlay">
    <div class="container">
      <div class="row posr">
        <div class="col-lg-12">
          <div class="home_content home6">
            <div class="home-text home6 text-center">
              <h2 class="fz55">Explore The Best Homes</h2>
              <p class="fz18">
                Whether you’re buying, selling or renting, we can help you find your nest.
              </p>
            </div>
            <div class="home_adv_srch_opt home6">
              <ul class="nav nav-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    id="pills-buy-tab"
                    data-toggle="pill"
                    href="#pills-buy"
                    role="tab"
                    aria-controls="pills-buy"
                    aria-selected="true"
                    >Buy</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="pills-rent-tab"
                    data-toggle="pill"
                    href="#pills-rent"
                    role="tab"
                    aria-controls="pills-rent"
                    aria-selected="false"
                    >Rent</a
                  >
                </li>
              </ul>
              <div class="tab-content home1_adsrchfrm" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-buy"
                  role="tabpanel"
                  aria-labelledby="pills-buy-tab"
                >
                    <buy-rent-search formPath="buy" />
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-rent"
                  role="tabpanel"
                  aria-labelledby="pills-rent-tab"
                >
                    <buy-rent-search formPath="rent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BuyRentSearch from "./BuyRentSearch.vue";
export default {
  components: { BuyRentSearch },
};
</script>

<style>
</style>