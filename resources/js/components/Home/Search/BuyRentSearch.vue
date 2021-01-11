<template>
  <form class="home1-advnc-search home6" @submit.prevent="search">
    <ul class="h1ads_1st_list mb0">
      <li class="list-inline-item">
        <div class="search_option_two">
          <div class="candidate_revew_select">
            <select class="selectpicker w100 show-tick">
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Bungalow</option>
              <option>Condo</option>
              <option>House</option>
              <option>Land</option>
              <option>Single Family</option>
            </select>
          </div>
        </div>
      </li>
      <li class="list-inline-item">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Location"
            aria-label="Location"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2"
            ><span class="flaticon-maps-and-flags"></span
          ></span>
        </div>
      </li>
      <li class="list-inline-item">
        <div class="small_dropdown2 home6">
          <div id="prncgs" class="btn dd_btn">
            <span>Price</span>
            <label for="exampleInputEmail2"
              ><span class="fa fa-angle-down"></span
            ></label>
          </div>
          <div class="dd_content2">
            <div class="pricing_acontent">
              <price-slider :id="formPath" v-model="value" :format="format" :min="8000" :max="250000000" />
            </div>
          </div>
        </div>
      </li>
      <li class="custome_fields_520 list-inline-item">
        <div class="navbered">
          <div class="mega-dropdown home6">
            <span id="show_advbtn" class="dropbtn"
              >Advanced <i class="flaticon-more pl10 flr-520"></i
            ></span>
            <advanced-options></advanced-options>
          </div>
        </div>
      </li>
      <li class="list-inline-item">
        <div class="search_option_button">
          <button type="submit" class="btn btn-thm">Search</button>
        </div>
      </li>
    </ul>
  </form>
</template>

<script>
import AdvancedOptions from "./AdvancedOptions.vue";
import PriceSlider from "@vueform/slider";
export default {
  components: { AdvancedOptions, PriceSlider },
  props: {
    formPath: {
      type: String,
      default: null,
      required: true,
    },
  },
  methods: {
    search: function () {},
  },
  data: () => ({
    value: [8000, 130000000],
    format: {
      suffix: `ETB`,
      decimals: '2',
      thousand: ','
    },
  }),
};
</script>
<style src="@vueform/slider/themes/default.css"></style>
