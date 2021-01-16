<template>
  <div class="fs-container">
    <map-estate></map-estate>
    <div class="fs-inner-container">
      <div class="fs-content">
        <listing-search></listing-search>

        <div class="row fs-switcher">
          <div class="col-md-6">
            <p class="showing-results">14 Results Found</p>
          </div>

          <div class="col-md-6">
            <div class="layout-switcher">
              <a @click="switchClicked('grid')" class="grid cursor-pointer"
                ><i class="fa fa-th-large"></i
              ></a>
              <a @click="switchClicked('list')" class="list cursor-pointer"
                ><i class="fa fa-th-list"></i
              ></a>
            </div>
          </div>
        </div>

        <div class="listings-container grid-layout row fs-listings">
          <div
            v-for="(property, index) in properties"
            :key="index"
            class="listing-item"
          >
            <inertia-link
              :href="route('estate.detail.index')"
              class="listing-img-container"
            >
              <div class="listing-badges">
                <span class="featured" v-if="property.featured">Featured</span>
                <span v-if="property.type == 'sell'">For Sale</span>
                <span v-if="property.type == 'rent'">For Rent</span>
              </div>

              <div class="listing-img-content">
                <span class="listing-price"
                  >{{ property.price }}
                  <i
                    v-if="
                      property.price_per_squarefeet != null &&
                      property.type == 'sell'
                    "
                    >{{ property.price_per_squarefeet }} / sq ft</i
                  ><i v-if="property.type == 'rent'">monthly</i></span
                >
                <span
                  class="like-icon with-tip"
                  data-tip-content="Add to Bookmarks"
                ></span>
                <span
                  class="compare-button with-tip"
                  data-tip-content="Add to Compare"
                ></span>
              </div>

              <carousel
                :classes="['listing-carousel', 'owl-carousel', 'owl-theme']"
                :items="1"
                :itemsDesktop="[1239, 1]"
                :itemsTablet="[991, 1]"
                :itemsMobile="[767, 1]"
                :fluidSpeed="800"
                v-if="property.images.length > 1"
              >
                <div v-for="(image, index) in property.images" :key="index">
                  <img :src="image" alt="" />
                </div>
              </carousel>
              <img v-else :src="property.images[0]" alt="" />
            </inertia-link>

            <div class="listing-content">
              <div class="listing-title">
                <h4>
                  <a href="single-property-page-1.html">{{ property.title }}</a>
                </h4>
                <a
                  href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                  class="listing-address popup-gmaps"
                >
                  <i class="fa fa-map-marker"></i>
                  {{ property.address }}
                </a>

                <a
                  href="single-property-page-1.html"
                  class="details button border"
                  >Details</a
                >
              </div>

              <ul class="listing-details">
                <li>{{ property.sqft }} sq ft</li>
                <li>{{ property.bedroom }} Bedroom</li>
                <li>{{ property.room }} Rooms</li>
                <li>{{ property.bathroom }} Bathroom</li>
              </ul>

              <div class="listing-footer">
                <a href="#"
                  ><i class="fa fa-user"></i> {{ property.user.name }}</a
                >
                <span
                  ><i class="fa fa-calendar-o"></i>
                  {{ property.created_at }}</span
                >
              </div>
            </div>
          </div>
        </div>

        <div class="row fs-listings">
          <div class="col-md-12">
            <div class="clearfix"></div>
            <div class="pagination-container margin-top-10 margin-bottom-45">
              <nav class="pagination">
                <ul>
                  <li><a href="#" class="current-page">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li class="blank">...</li>
                  <li><a href="#">22</a></li>
                </ul>
              </nav>

              <nav class="pagination-next-prev">
                <ul>
                  <li><a href="#" class="prev">Previous</a></li>
                  <li><a href="#" class="next">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import layout from "../../../shared/Layout";
import MapEstate from "../../../components/Listing/Map.vue";
import ListingSearch from "../../../components/Listing/Search.vue";
import Carousel from "../../../components/Carousel/Index.vue";
import { onMount } from "../../../supplemental.js";
export default {
  components: {
    MapEstate,
    ListingSearch,
    Carousel,
  },
  data: () => ({
    mapHeight: 0,
    properties: [
      {
        featured: true,
        price_per_squarefeet: "$520",
        price: "$275,000",
        name: "Eagle Apartments",
        address: "9364 school St. Lynchburg, NY",
        sqft: "530",
        bedroom: "1",
        room: "3",
        bathroom: "1",
        created_at: "1 day ago",
        user: { name: "David Strozier" },
        type: "sell",
        images: [
          "images/listing-01.jpg",
          "images/listing-01b.jpg",
          "images/listing-01c.jpg",
        ],
      },
      {
        featured: true,
        price: "$1700",
        name: "Meridian Villas",
        address: "778 Country St. Panama City, FL",
        sqft: "1450",
        bedroom: "1",
        room: "2",
        bathroom: "2",
        created_at: "4 days ago",
        user: { name: "Chester Miller" },
        type: "rent",
        images: ["images/listing-03.jpg"],
      },
      {
        featured: false,
        price: "$900",
        name: "Serene Uptown",
        address: "6 Bishop Ave. Perkasie, PA",
        sqft: "440",
        bedroom: "1",
        room: "1",
        bathroom: "1",
        created_at: "2 days ago",
        user: { name: "Harriete Clark" },
        type: "rent",
        images: ["images/listing-02.jpg"],
      },
      {
        featured: true,
        price_per_squarefeet: "$770",
        price: "$420,000",
        name: "Sellway Apartments",
        address: "33 William St. Northbrook, IL",
        sqft: "540",
        bedroom: "1",
        room: "3",
        bathroom: "2",
        created_at: "3 days ago",
        user: { name: "Kristen Berry" },
        type: "sell",
        images: ["images/listing-04.jpg", "images/listing-04b.jpg"],
      },
      {
        featured: false,
        price_per_squarefeet: "$640",
        price: "$535,000",
        name: "Oak Tree Villas",
        address: "71 Lower River Dr. Bronx, NY",
        sqft: "350",
        bedroom: "1",
        room: "2",
        bathroom: "1",
        created_at: "4 days ago",
        user: { name: "Mabel Gagnon" },
        type: "sell",
        images: ["images/listing-05.jpg"],
      },
      {
        featured: false,
        price: "$500",
        name: "Old Town Manchester",
        address: "7843 Durham Avenue, MD",
        sqft: "850",
        bedroom: "2",
        room: "3",
        bathroom: "1",
        created_at: "2 days ago",
        user: { name: "Charles Watson" },
        type: "rent",
        images: ["images/listing-06.jpg"],
      },
    ],
    resizeObjects: null,
    listingsContainer: null,
  }),
  layout: (h, page) => h(layout, [page]),
  mounted() {
    document.body.classList.add("overflow-hidden");
    this.resizeObjects = $(
      ".listings-container .listing-img-container img, .listings-container .listing-img-container"
    );
    this.$nextTick(() => {
      $(".owl-buttons").each(() => {
        $('.owl-buttons').on("click", function (e) {
          if ($(e.target).is(".owl-next") || $(e.target).is(".owl-prev")) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
      });
      onMount();
      this.listingsContainer = $(".listings-container");
      this.execute();
      this.listLayout();
      this.gridLayout();
      this.$owlReload();
    });
  },
  created() {
    this.$nextTick(() => {
      var headerHeight = $("#header").innerHeight();
      this.mapHeight = `${$(window).height() - headerHeight}px`;
      $(".fs-container").css("height", this.mapHeight);

      var that = this;
      var winWidth = $(window).width();
      if (winWidth < 768) {
        if ($(this.listingsContainer).is(".list-layout")) {
          $(".listing-item").each(function () {
            $(this).find(that.resizeObjects).css("height", "auto");
          });
        }
      }
      if (winWidth < 1366) {
        if ($(".fs-listings").is(".list-layout")) {
          $(".listing-item").each(function () {
            $(this).find(that.resizeObjects).css("height", "auto");
          });
        }
      }
    });
  },
  methods: {
    execute: function () {
      if ($(this.listingsContainer).is(".list-layout")) {
        $(".layout-switcher a.grid").removeClass("active");
        $(".layout-switcher a.list").addClass("active");
      }

      if ($(this.listingsContainer).is(".grid-layout")) {
        $(".layout-switcher a.grid").addClass("active");
        $(".layout-switcher a.list").removeClass("active");
        this.gridClear(2);
      }
    },
    listLayout() {
      if ($(".layout-switcher a").is(".list.active")) {
        $(this.listingsContainer).each(function () {
          $(this).removeClass("grid-layout");
          $(this).addClass("list-layout");
        });
        var that = this;
        $(".listing-item").each(function () {
          var listingContent = $(this).find(".listing-content").height();
          $(this)
            .find(that.resizeObjects)
            .css("height", "" + listingContent + "");
        });
      }
    },
    gridClear(gridColumns) {
      $(this.listingsContainer).find(".clearfix").remove();
      $(
        ".listings-container > .listing-item:nth-child(" + gridColumns + "n)"
      ).after("<div class='clearfix'></div>");
    },
    gridLayout() {
      if ($(".layout-switcher a").is(".grid.active")) {
        $(this.listingsContainer).each(function () {
          $(this).removeClass("list-layout");
          $(this).addClass("grid-layout");
        });
        var that = this;
        $(".listing-item").each(function () {
          $(this).find(that.resizeObjects).css("height", "auto");
        });
      }
    },
    switchClicked: function (type) {
      this.$nextTick(() => {
        $(this.resizeObjects).css("height", "0");
        if (type == "grid") {
          $(".layout-switcher a.grid").addClass("active");
          $(".layout-switcher a.list").removeClass("active");
          this.gridLayout();
          this.gridClear(2);
        } else {
          $(".layout-switcher a.list").addClass("active");
          $(".layout-switcher a.grid").removeClass("active");
          this.listLayout();
        }
        this.$owlReload();
      });
    },
  },
};
</script>

<style>
</style>
