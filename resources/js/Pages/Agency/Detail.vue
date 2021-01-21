<template>
  <teleport to="head">
    <title>{Agency name} | Xplorestate</title>
  </teleport>
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>King Properties</h2>

          <nav id="breadcrumbs">
            <ul>
              <li><inertia-link :href="route('home')">Home</inertia-link></li>
              <li>
                <inertia-link :href="route('agency.index')"
                  >Agencies</inertia-link
                >
              </li>
              <li>King Properties</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="agent agent-page agency">
          <div class="agent-avatar">
            <img src="/images/agency-02.png" alt="" />
          </div>

          <div class="agent-content">
            <div class="agent-name">
              <h4>King Properties</h4>
              <span><i class="fa fa-map-marker"></i> New York</span>
            </div>

            <p>
              Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia
              tortor morbi ultricies laoreet ullamcorper phasellus semper.
            </p>

            <ul class="agent-contact-details">
              <li><i class="sl sl-icon-call-in"></i>(123) 123-456</li>
              <li>
                <i class="fa fa-envelope-o"></i
                ><a href="#">contact@example.com</a>
              </li>
            </ul>

            <ul class="social-icons">
              <li>
                <a class="facebook" href="#"><i class="icon-facebook"></i></a>
              </li>
              <li>
                <a class="gplus" href="#"><i class="icon-gplus"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row sticky-wrapper">
      <div class="col-lg-8 col-md-8">
        <div class="style-1 agency-tabs">
          <ul class="tabs-nav">
            <li class="active"><a href="#tab1">Our Properties</a></li>
            <li><a href="#tab2">Our Agents</a></li>
          </ul>

          <div class="tabs-container">
            <div class="tab-content" id="tab1">
              <div class="main-search-input margin-bottom-35">
                <input
                  type="text"
                  class="ico-01"
                  placeholder="Enter address e.g. street, city and state or zip"
                  value=""
                />
                <button class="button">Search</button>
              </div>

              <div class="row margin-bottom-15">
                <div class="col-md-6">
                  <div class="sort-by">
                    <label>Sort by:</label>

                    <div class="sort-by-select">
                      <select
                        data-placeholder="Default order"
                        class="chosen-select-no-single"
                      >
                        <option>Default Order</option>
                        <option>Price Low to High</option>
                        <option>Price High to Low</option>
                        <option>Newest Properties</option>
                        <option>Oldest Properties</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="layout-switcher">
                    <a
                      @click="switchClicked('list')"
                      class="list cursor-pointer"
                      ><i class="fa fa-th-list"></i
                    ></a>
                    <a
                      @click="switchClicked('grid')"
                      class="grid cursor-pointer"
                      ><i class="fa fa-th-large"></i
                    ></a>
                  </div>
                </div>
              </div>

              <div class="listings-container list-layout">
                <div
                  v-for="(property, index) in properties"
                  :key="index"
                  class="listing-item"
                >
                  <inertia-link
                    :href="route('detail.index')"
                    class="listing-img-container"
                  >
                    <div class="listing-badges">
                      <span class="featured" v-if="property.featured"
                        >Featured</span
                      >
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
                      <span class="like-icon tooltip"></span>
                    </div>

                    <carousel
                      :classes="[
                        'listing-carousel',
                        'owl-carousel',
                        'owl-theme',
                      ]"
                      :items="1"
                      :itemsDesktop="[1239, 1]"
                      :itemsTablet="[991, 1]"
                      :itemsMobile="[767, 1]"
                      :fluidSpeed="800"
                      v-if="property.images.length > 1"
                    >
                      <div
                        v-for="(image, index) in property.images"
                        :key="index"
                      >
                        <img :src="image" alt="" />
                      </div>
                    </carousel>
                    <img v-else :src="property.images[0]" alt="" />
                  </inertia-link>

                  <div class="listing-content">
                    <div class="listing-title">
                      <h4>
                        <inertia-link :href="route('detail.index')">{{
                          property.title
                        }}</inertia-link>
                      </h4>
                      <a
                        href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                        class="listing-address popup-gmaps"
                      >
                        <i class="fa fa-map-marker"></i>
                        {{ property.address }}
                      </a>

                      <inertia-link
                        :href="route('detail.index')"
                        class="details button border"
                        >Details</inertia-link
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

              <div class="pagination-container margin-top-20">
                <nav class="pagination">
                  <ul>
                    <li><a href="#" class="current-page">1</a></li>
                    <li><a href="#">2</a></li>
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

            <div class="tab-content" id="tab2">
              <div class="row">

                <div
                  v-for="(agent, index) in agents"
                  :key="index"
                  class="col-lg-6 col-md-6 col-xs-12"
                >
                  <div class="agent">
                    <div class="agent-avatar">
                      <inertia-link :href="route('agent.detail')">
                        <img :src="agent.image" alt="agent's profile" />
                        <span class="view-profile-btn">View Profile</span>
                      </inertia-link>
                    </div>

                    <div class="agent-content">
                      <div class="agent-name">
                        <h4>
                          <inertia-link href="route('agent.detail')">{{
                            agent.name
                          }}</inertia-link>
                        </h4>
                        <span>Agent In {{ agent.address }}</span>
                      </div>

                      <ul class="agent-contact-details">
                        <li>
                          <i class="sl sl-icon-call-in"></i
                          >{{ agent.phone_number }}
                        </li>
                        <li>
                          <i class="fa fa-envelope-o"></i
                          ><a href="#">{{ agent.email }}</a>
                        </li>
                      </ul>

                      <ul class="social-icons">
                        <li>
                          <a class="facebook" href="#"
                            ><i class="icon-facebook"></i
                          ></a>
                        </li>
                        <li>
                          <a class="twitter" href="#"
                            ><i class="icon-twitter"></i
                          ></a>
                        </li>
                        <li>
                          <a class="gplus" href="#"
                            ><i class="icon-gplus"></i
                          ></a>
                        </li>
                        <li>
                          <a class="linkedin" href="#"
                            ><i class="icon-linkedin"></i
                          ></a>
                        </li>
                      </ul>
                      <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4">
        <div class="sidebar sticky right">
          <div class="widget">
            <h3 class="margin-bottom-30 margin-top-30">Contact Us</h3>
            <div class="agefnt-widget">
              <input
                type="text"
                placeholder="Your Email"
                pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
              />
              <input type="text" placeholder="Your Phone" />
              <textarea>
                    Hi, I would like to know if you are able to help me in finding new home.
                </textarea
              >
              <button class="button fullwidth margin-top-5">
                Send Message
              </button>
            </div>
          </div>

          <div class="widget">
            <h3 class="margin-bottom-30 margin-top-30">Our Location</h3>

            <div id="propertyMap-container" class="agency-map">
              <div
                id="propertyMap"
                data-latitude="40.7427837"
                data-longitude="-73.11445617675781"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "../../shared/Layout.vue";
import { onMount } from "../../supplemental";
import Carousel from "../../components/Carousel/Index.vue";
export default {
  components: { Carousel },
  layout: (h, page) => h(Layout, [page]),
  data: () => ({
    resizeObjects: null,
    listingsContainer: null,
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
          "/images/listing-01.jpg",
          "/images/listing-01b.jpg",
          "/images/listing-01c.jpg",
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
        images: ["/images/listing-03.jpg"],
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
        images: ["/images/listing-02.jpg"],
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
        images: ["/images/listing-04.jpg", "/images/listing-04b.jpg"],
      },
    ],
    agents: [
      {
        image: "/images/agent-04.jpg",
        name: "Charles Watson",
        address: "Dallas",
        phone_number: "(123) 123-456",
        email: "charles@example.com",
      },
      {
        image: "/images/agent-02.jpg",
        name: "Jennie Wilson",
        address: "New York",
        phone_number: "(123) 123-456",
        email: "jennie@example.com",
      },
      {
        image: "/images/agent-03.jpg",
        name: "David Strozier",
        address: "Los Angeles",
        phone_number: "(123) 123-456",
        email: "david@example.com",
      },
      {
        image: "/images/agent-01.jpg",
        name: "Melake Benti",
        address: "Addis Ababa",
        phone_number: "+251 912-34-4564",
        email: "david@example.com",
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      var that = this;
      this.resizeObjects = $(
        ".listings-container .listing-img-container img, .listings-container .listing-img-container"
      );
      this.listingsContainer = $(".listings-container");
      this.$tabs();
      $(".listing-item").each(function () {
        $(this).find(that.resizeObjects).css("height", "auto");
      });
      if ($(".agent-avatar img").height() < $(".agent-content").innerHeight()) {
        $(".agent-page").addClass("long-content");
      } else {
        $(".agent-page").removeClass("long-content");
      }
      $(".owl-buttons").each(() => {
        $(".owl-buttons").on("click", function (e) {
          if ($(e.target).is(".owl-next") || $(e.target).is(".owl-prev")) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
      });
      onMount();
      this.$toggleLike(".like-icon");
      this.$ezecute(
        this.listingsContainer,
        this.$gridClear(2, this.listingsContainer)
      );
      this.$listLayout(this.listingsContainer, this.resizeObjects);
      this.$gridLayout(this.listingsContainer, this.resizeObjects);
      this.owlReload();
    });
  },
  created() {
    this.$nextTick(() => {
      this.$layoutInit(this.resizeObjects);
    });
  },
  methods: {
    owlReload: function () {
      $(".listing-carousel").each(function () {
        $(this).data("owlCarousel").reload();
      });
    },
    switchClicked: function (type) {
      this.$nextTick(() => {
        $(this.resizeObjects).css("height", "0");
        if (type == "grid") {
          $(".layout-switcher a.grid").addClass("active");
          $(".layout-switcher a.list").removeClass("active");
          this.$gridLayout(this.listingsContainer, this.resizeObjects);
          this.$gridClear(2, this.listingsContainer);
        } else {
          $(".layout-switcher a.list").addClass("active");
          $(".layout-switcher a.grid").removeClass("active");
          this.$listLayout(this.listingsContainer, this.resizeObjects);
        }
        this.owlReload();
      });
    },
  },
};
</script>

<style>
</style>
