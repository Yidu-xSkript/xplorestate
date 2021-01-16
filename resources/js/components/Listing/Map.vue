<template>
  <div class="fs-inner-container">
    <div id="map-container">
      <div
        id="map"
        ref="map"
        :style="`width: ${width};`"
        data-map-zoom="14"
        data-map-scroll="true"
      >
        <l-map v-model:zoom="zoom" :center="[9.0144768, 38.7579904]">
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-marker :lat-lng="[9.0144768, 38.78]">
            <l-tooltip> lol </l-tooltip>
          </l-marker>

          <l-marker :lat-lng="[9.0144768, 38.7579904]">
            <l-tooltip> lol </l-tooltip>
            <l-popup> lol </l-popup>
          </l-marker>
        </l-map>
      </div>
      <a href="#" id="geoLocation" title="Your location"></a>
      <ul id="mapnav-buttons" class="top">
        <li>
          <a href="#" id="prevpoint" title="Previous point on map">Prev</a>
        </li>
        <li><a href="#" id="nextpoint" title="Next point on mp">Next</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LTooltip,
  LPopup,
} from "@vue-leaflet/vue-leaflet/dist/vue-leaflet.cjs";
import "leaflet/dist/leaflet.css";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip,
    LPopup,
  },
  data() {
    return {
      zoom: 14,
      iconWidth: 25,
      iconHeight: 40,
    };
  },
  computed: {
    width: {
      set() {
        this.$refs.map.innerWidth;
      },
      get: () => null,
    },
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
};
</script>

<style>
</style>
