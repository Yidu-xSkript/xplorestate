<template>
  <teleport to="head">
    <title>Sell a house with confidence | Xplorestate</title>
  </teleport>
  <list-property
    :propertystate="`sale`"
    :show="showWizard"
    @closeModal="showWizard = false"
  >
  </list-property>
  <div class="sell container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h1>Sell with Confidence</h1>
        <p>
          Xplorestate is making it simpler and safer to sell your home and move
          forward.
        </p>
      </div>
    </div>
  </div>
  <hr style="margin: 0px 45%; border: 2px solid #006aff; margin-bottom: 70px" />
  <div class="container" style="margin-bottom: 50px">
    <div class="row">
      <div class="col-md-7">
        <div class="sell-component">
          <a class="sell-img">
            <img
              style="width: 100%; height: auto"
              src="https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.png"
              alt="agency image"
            />
          </a>
          <div class="sell-content">
            <h2>Work with an agent</h2>
            <p>
              Xplorestate Agents are among the best in the business.
              Learn <a href="#" target="_blank">how to pick the right one for you</a>.
            </p>
            <inertia-link class="button border" :href="route('agent.index')"
              >Search Now</inertia-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <div class="sell-component">
          <div class="sell-content">
            <h2>Sell It Yourself</h2>
            <p>
              Reach the largest audience of shoppers with a free Xplrestate listing.
              Start by learning <a href="#" target="_blank">how to "sell for sale by owner."</a>
            </p>
            <a class="button border" @click="showWizard = true"
              >Create a Listing</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sell container">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2>Resources for a successful sale</h2>
      </div>
    </div>
  </div>
  <hr style="margin: 0px 45%; border: 2px solid #006aff;margin-bottom: 20px" />
  <div class="container" style="margin-bottom: 50px">
    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <div class="sell-component">
          <a class="sell-img">
            <img
              style="width: 100%; height: auto"
              src="https://s.zillowstatic.com/seller-info/static/Illustration_HomeInsights@2x.png"
              alt="agency image"
            />
          </a>
          <div class="sell-content">
            <h3>Explore your home's value before selling</h3>
            <p>
              Find out your home’s estimate, the best time to sell, and more.
            </p>
            <div class="row">
              <div class="col-md-10">
                <input
                  type="text"
                  class="ico-01"
                  id="autocomplete-input"
                  placeholder="Enter address e.g. street, city and state or zip"
                  value=""
                />
              </div>
              <a class="button border cursor-pointer"
                ><i class="fa fa-search"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListProperty from "../ListProperty/Index.vue";
export default {
  components: { ListProperty },
  data: () => ({
    showWizard: false
  }),
  mounted() {
    if ($(".sell-img img").height() < $(".agent-content").innerHeight()) {
      $(".agent-page").addClass("long-content");
    } else {
      $(".agent-page").removeClass("long-content");
    }
  },
};
</script>

<style>
</style>
