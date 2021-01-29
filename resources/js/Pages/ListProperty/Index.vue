<template>
  <modal :showModal="show" @close="$emit('closeModal')" width="60%">
    <template v-slot:body>
      <wizard
        id="wizard-list-estate"
        wizard_title="List your estate"
        wizard_desc="This information will let us know more about your place."
        :tabs="tabs"
        @wizaed_onComplete="wizardOnComplete"
        @wizard_next="wizardNext"
        @wizard_previous="wizardPrevious"
        @onWizardTabShow="onWizardTabShow"
      >
        <template v-slot:tab="tabs">
          <tab :tab="tabs.tab"></tab>
        </template>
        <template v-slot:pane_question0>
          <div class="col-sm-8 col-sm-offset-2">
            <div class="col-sm-4 col-sm-offset-2">
              <label class="_card">
                <input v-model="model.propertyStatus" value="sale" class="radio" type="radio">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">For Sale</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.propertyStatus" value="rent" class="radio" type="radio">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">For Rent</span>
                </span>
              </label>
            </div>
          </div>
        </template>
        <template v-slot:pane_question1>
          <div class="col-sm-8 col-sm-offset-2">
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.propertyType" value="apartment" class="radio" type="radio">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Apartment</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.propertyType" value="house" class="radio" type="radio">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">House</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.propertyType" value="commercial" class="radio" type="radio">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Commercial</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.propertyType" value="garage" class="radio" type="radio">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Garage</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.propertyType" value="lot" class="radio" type="radio">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Lot</span>
                </span>
              </label>
            </div>
          </div>
        </template>
        <template v-slot:pane_question2>
          <div class="col-md-4 col-sm-offset-2">
            <h5>Property Title <i class="tip" data-tip-content="Type title that will also contains an unique feature of your property (e.g. renovated, air contidioned)"></i></h5>
            <input class="search-field" type="text" value=""/>
          </div>
          <div class="col-md-4">
            <h5> <span v-if="model.propertyStatus == 'sale'">Selling Price</span> <span v-if="model.propertyStatus == 'rent'">Price / mo</span> <i v-if="model.propertyStatus == 'sale'" class="tip" data-tip-content="Type overall or monthly price if property is for rent"></i><i v-else class="tip" data-tip-content="Type overall or monthly price if property is for rent"></i></h5>
            <div class="select-input disabled-first-option">
              <input type="text" data-unit="USD">
            </div>
          </div>
          <div class="col-md-4 col-sm-offset-2">
            <h5>Area</h5>
            <div class="select-input disabled-first-option">
              <input type="text" data-unit="Sq Ft">
            </div>
          </div> 
          <div class="col-md-4">
            <h5>Rooms</h5>
            <input class="search-field" type="text" placeholder="no of rooms" value=""/>
          </div>
          <div class="col-md-4 col-sm-offset-2">
            <h5>Bedrooms <span>(optional)</span></h5>
            <input class="search-field" type="text" placeholder="no of bedrooms" value=""/>
          </div>
          <div class="col-md-4">
            <h5>Bathrooms <span>(optional)</span></h5>
            <input class="search-field" type="text" placeholder="no of bathrooms" value=""/>
          </div>
        </template>
        <template v-slot:pane_question3>
          <div class="col-md-8 col-sm-offset-2">
            <div class="form">
              <h5>Description</h5>
              <textarea class="WYSIWYG" name="summary" cols="10" rows="2" id="summary" spellcheck="true"></textarea>
            </div>
          </div>
          <div class="col-md-8 col-sm-offset-2">
            <h5>Building year: <span>(optional)</span></h5>
            <input class="search-field" type="text" placeholder="The year building / house was built" value=""/>
          </div>
          <div class="col-md-4 col-sm-offset-2">
            <h5>Youtube video ID | Video Walkthrough <span>(optional)</span></h5>
            <input class="search-field" type="text" placeholder="no of bedrooms" value=""/>
          </div>
          <div class="col-md-4">
            <h5>Virtual Tour Link <span>(optional)</span></h5>
            <input class="search-field" type="text" placeholder="no of bathrooms" value=""/>
          </div>
        </template>
        <template v-slot:pane_question4>
          <div class="col-sm-12">
            <div
              id="map"
              ref="map"
              style="`width: ${width}; height: 300px;`"
            >
              <l-map ref="listMap" v-model:zoom="zoom" :center="[9.0144768, 38.7579904]">
                <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                ></l-tile-layer>
                <l-marker :lat-lng="[9.0144768, 38.7579904]" draggable>
                  <l-tooltip> lol </l-tooltip>
                </l-marker>
              </l-map>
            </div>
          </div>
        </template>
        <template v-slot:pane_question5>
          <div class="col-sm-8 col-sm-offset-2">
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.amenities" value="wifi" class="radio" type="checkbox">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Wifi</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.amenities" value="air conditioning" class="radio" type="checkbox">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Air Conditioning</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.amenities" value="commercial" class="radio" type="checkbox">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Commercial</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.amenities" value="garage" class="radio" type="checkbox">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Garage</span>
                </span>
              </label>
            </div>
            <div class="col-sm-4">
              <label class="_card">
                <input v-model="model.amenities" value="lot" class="radio" type="checkbox">
                <span class="plan-details">
                  <span class="plan-type"><i class="fa fa-sellsy"></i></span>
                  <span class="plan-cost">Lot</span>
                </span>
              </label>
            </div>
          </div>
        </template>
        <template v-slot:pane_question6>
          <div class="col-sm-8 col-sm-offset-2">
            <form action="http://www.vasterad.com/file-upload" class="dropzone" ></form>
          </div>
        </template>
      </wizard>
    </template>
  </modal>
</template>

<script>
import Wizard from "../../components/Wizard/Index";
import Tab from "../../components/Wizard/Tab";
import Modal from "../../components/Modal/Index";
import { onMount } from "../../supplemental.js"
import "../../Partial/dropzone.js";
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
} from "@vue-leaflet/vue-leaflet/dist/vue-leaflet.esm";
export default {
  components: { Modal, Wizard, Tab, LMap, LTileLayer, LMarker, LTooltip, LPopup },
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
    propertystate: {
      type: String,
      default: null
    }
  },
  emits: ["closeModal"],
  data: () => ({
    model: {
      propertyStatus: null,
      propertyType: null,
      amenities: []
    },
    zoom: 15,
    tabs: [
      {
        tab_name: "Property Status",
        id: "PropertyStatus",
        tab_icon: "sl sl-icon-list",
        info_text: "What is the properties listing status?",
      },
      {
        tab_name: "Propery Type",
        id: "PropertyType",
        tab_icon: "fa fa-building-o",
        info_text: "What is the type of the property?",
      },
      {
        tab_name: "Basic Information",
        id: "BasicInformation",
        tab_icon: "fa fa-home",
        info_text: "",
      },
      {
        tab_name: "Detailed Information",
        id: "DetailInformation",
        tab_icon: "fa fa-home",
        info_text: "",
      },
      {
        tab_name: "Location",
        id: "listlocation",
        tab_icon: "sl sl-icon-location",
        info_text: "",
      },
      {
        tab_name: "Amenities",
        id: "Amenities",
        tab_icon: "fa fa-link",
        info_text: "What amenities does your property possess?",
      },
      {
        tab_name: "Gallery",
        id: "gallery",
        tab_icon: "sl sl-icon-picture",
        info_text: "",
      },
    ],
  }),
  methods: {
    wizardNext() {},
    wizardPrevious() {},
    wizardOnComplete() {},
    onWizardTabShow(i) {
      this.$nextTick(() => {
        if ($("#wizard-list-estate").length == 1 && i === 4) {
          this.$refs.listMap.leafletObject.invalidateSize(true);
          this.tabs[4].info_text = `Where is the location of your property? (${this.model.propertyType})`
        }
      })
    }
  },
  watch: {
    show(val) {
      if (val) {
        if (this.propertystate !== null) this.model.propertyStatus = this.propertystate;
        this.$nextTick(() => {
          onMount();
          this.$tip()
          $(".dropzone").dropzone({
            dictDefaultMessage: "<i class='sl sl-icon-plus'></i> Click here or drop files to upload <small style='color:red;'>(minimum of 2 images required)</small>",
          });
        });
      }
    },
  },
  computed: {
    width: {
      set() {
        this.$refs.map.innerWidth;
      },
      get: () => null,
    }
  }
};
</script>

<style>
</style>
