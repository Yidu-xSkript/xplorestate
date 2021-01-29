<template>
  <teleport to="head">
    <title>Selway Apartments | For Sale | Xplorestate</title>
  </teleport>
  <div id="titlebar" class="property-titlebar margin-bottom-0">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <inertia-link :href="route('estate.index')" class="back-to-listings"
            ><span></span
          ></inertia-link>
          <div class="property-title">
            <h2>
              Selway Apartments <span class="property-badge">For Sale</span>
            </h2>
            <span>
              <a href="#location" class="listing-address">
                <i class="fa fa-map-marker"></i>
                7843 Durham Avenue, MD
              </a>
            </span>
          </div>

          <div class="property-pricing">
            <div class="property-price">$420,000</div>
            <div class="sub-price">$770 / sq ft</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <slick
    :centerMode="true"
    :centerPadding="`20%`"
    :slidesToShow="1"
    :responsive="[
      {
        breakpoint: 1367,
        settings: {
          centerPadding: '15%',
        },
      },
      {
        breakpoint: 993,
        settings: {
          centerPadding: '0',
        },
      },
    ]"
    :classes="[`fullwidth-property-slider`, `margin-bottom-50`]"
  >
    <a
      href="/images/single-property-01.jpg"
      data-background-image="/images/single-property-01.jpg"
      class="item mfp-gallery"
    ></a>
    <a
      href="/images/single-property-02.jpg"
      data-background-image="/images/single-property-02.jpg"
      class="item mfp-gallery"
    ></a>
    <a
      href="/images/single-property-03.jpg"
      data-background-image="/images/single-property-03.jpg"
      class="item mfp-gallery"
    ></a>
    <a
      href="/images/single-property-04.jpg"
      data-background-image="/images/single-property-04.jpg"
      class="item mfp-gallery"
    ></a>
    <a
      href="/images/single-property-05.jpg"
      data-background-image="/images/single-property-05.jpg"
      class="item mfp-gallery"
    ></a>
    <a
      href="/images/single-property-06.jpg"
      data-background-image="/images/single-property-06.jpg"
      class="item mfp-gallery"
    ></a>
  </slick>

  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-7">
        <div class="property-description">
          <ul class="property-main-features">
            <li>Area <span>1450 sq ft</span></li>
            <li>Rooms <span>4</span></li>
            <li>Bedrooms <span>2</span></li>
            <li>Bathrooms <span>1</span></li>
          </ul>

          <h3 class="desc-headline">Description</h3>
          <div class="show-more">
            <p>
              Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla.
              Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris
              quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum
              elementum, est elit finibus tellus, ut tristique elit risus at
              metus. Sed fermentum, lorem vitae efficitur imperdiet, neque velit
              tristique turpis, et iaculis mi tortor finibus turpis.
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a
              consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et
              pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur
              convallis fringilla diam sed aliquam. Sed tempor iaculis massa
              faucibus feugiat. In fermentum facilisis massa, a consequat purus
              viverra a. Aliquam pellentesque nibh et nibh feugiat gravida.
              Maecenas ultricies, diam vitae semper placerat, velit risus
              accumsan nisl, eget tempor lacus est vel nunc. Proin accumsan elit
              sed neque euismod fringilla. Curabitur lobortis nunc velit, et
              fermentum urna dapibus non. Vivamus magna lorem, elementum id
              gravida ac, laoreet tristique augue. Maecenas dictum lacus eu nunc
              porttitor, ut hendrerit arcu efficitur.
            </p>

            <p>
              Nam mattis lobortis felis eu blandit. Morbi tellus ligula,
              interdum sit amet ipsum et, viverra hendrerit lectus. Nunc
              efficitur sem vel est laoreet, sed bibendum eros viverra.
              Vestibulum finibus, ligula sed euismod tincidunt, lacus libero
              lobortis ligula, sit amet molestie ipsum purus ut tortor. Nunc
              varius, dui et sollicitudin facilisis, erat felis imperdiet felis,
              et iaculis dui magna vitae diam. Donec mattis diam nisl, quis
              ullamcorper enim malesuada non. Curabitur lobortis eu mauris nec
              vestibulum. Nam efficitur, ex ac semper malesuada, nisi odio
              consequat dui, hendrerit vulputate odio dui vitae massa. Aliquam
              tortor urna, tincidunt ut euismod quis, semper vel ipsum. Ut non
              vestibulum mauris. Morbi euismod, felis non hendrerit viverra,
              nunc sapien bibendum ligula, eget vehicula nunc dolor eu ex.
              Quisque in semper odio. Donec auctor blandit ligula. Integer id
              lectus non nibh vulputate efficitur quis at arcu.
            </p>

            <a
              @click="showMoreDescriptionVisible()"
              v-if="!show"
              class="show-more-button cursor-pointer"
              >Show More <i class="fa fa-angle-down"></i
            ></a>
            <div class="text-center">
              <a
                @click="showMoreDescriptionHide()"
                v-if="show"
                class="show-less-button cursor-pointer"
                >Show Less <i class="fa fa-angle-up"></i
              ></a>
            </div>
          </div>

          <h3 class="desc-headline">Details</h3>
          <ul class="property-features margin-top-0">
            <li>Building Age: <span>2 Years</span></li>
            <li>Parking: <span>Attached Garage</span></li>
            <li>Cooling: <span>Central Cooling</span></li>
            <li>Heating: <span>Forced Air, Gas</span></li>
            <li>Sewer: <span>Public/City</span></li>
            <li>Water: <span>City</span></li>
            <li>Exercise Room: <span>Yes</span></li>
            <li>Storage Room: <span>Yes</span></li>
          </ul>

          <h3 class="desc-headline">Features</h3>
          <ul class="property-features checkboxes margin-top-0">
            <li>Air Conditioning</li>
            <li>Swimming Pool</li>
            <li>Central Heating</li>
            <li>Laundry Room</li>
            <li>Gym</li>
            <li>Alarm</li>
            <li>Window Covering</li>
            <li>Internet</li>
          </ul>

          <h3 class="desc-headline no-border">Floorplans</h3>

          <div class="style-1 fp-accordion">
            <div class="accordion">
              <h3>
                First Floor <span>460 sq ft</span>
                <i class="fa fa-angle-down"></i>
              </h3>
              <div>
                <a
                  class="floor-pic mfp-image"
                  href="https://www.roomsketcher.com/wp-content/uploads/2017/11/RoomSketcher-Order-Floor-Plans-2D-Floor-Plan.jpg"
                >
                  <img
                    src="https://www.roomsketcher.com/wp-content/uploads/2017/11/RoomSketcher-Order-Floor-Plans-2D-Floor-Plan.jpg"
                    alt=""
                  />
                </a>
                <p>
                  Mauris mauris ante, blandit et, ultrices a, susceros. Nam mi.
                  Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a
                  velit eu ante scelerisque vulputate aliquam egestas litora
                  torquent conubia.
                </p>
              </div>

              <h3>
                Second Floor <span>440 sq ft</span>
                <i class="fa fa-angle-down"></i>
              </h3>
              <div>
                <a
                  class="floor-pic mfp-image"
                  href="https://www.sruinsulation.co.uk/image/data/systems/cinema/1.jpg"
                >
                  <img
                    src="https://www.sruinsulation.co.uk/image/data/systems/cinema/1.jpg"
                    alt=""
                  />
                </a>
                <p>
                  Sed non urna. Donec et ante. Phasellus eu ligula. Vestibulum
                  sit amet purus vivamus hendrerit, dolor at aliquet laoreet,
                  mauris turpis porttitor velit, faucibus interdum tellus libero
                  ac justo. Vivamus non quam. Nullam laoreet, velit ut taciti
                  sociosqu condimentum feugiat.
                </p>
              </div>

              <h3>
                Garage <span>140 sq ft</span> <i class="fa fa-angle-down"></i>
              </h3>
              <div>
                <a
                  class="floor-pic mfp-image"
                  href="https://www.sruinsulation.co.uk/image/data/systems/cinema/1.jpg"
                >
                  <img
                    src="https://www.sruinsulation.co.uk/image/data/systems/cinema/1.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          <hr />

          <div class="style-2">
            <ul class="tabs-nav">
              <li class="active">
                <a href="#tab1a"><i class="fa fa-video-camera"></i> Video</a>
              </li>
              <li>
                <a href="#tab2a"
                  ><i class="im im-icon-Rotate-Gesture"></i> Virtual Tour</a
                >
              </li>
              <li>
                <a href="#tab3a"
                  ><i class="sl sl-icon-location"></i> Location</a
                >
              </li>
            </ul>

            <div class="tabs-container">
              <div class="tab-content" id="tab1a">
                <div class="responsive-iframe">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube-nocookie.com/embed/DUd1qH4p84I?rel=0&amp;showinfo=0"
                    frameborder="0"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>

              <div class="tab-content" id="tab2a">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!4v1570442623074!6m8!1m7!1sCAoSLEFGMVFpcE15Rk5zWUpDQ2k2LWh1SzJpSGpZa1lRaDROa1lDQk9hR1RCSld2!2m2!1d34.0002865633972!2d-84.58304914834946!3f143.72763481287652!4f-5.418296856668931!5f0.7820865974627469"
                  width="100%"
                  height="450"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen=""
                ></iframe>
              </div>

              <div class="tab-content" id="tab3a">
                <div id="propertyMap-container">
                  <div id="propertyMap">
                    <l-map style="height: 100%; width: 100%" ref="estate_map" v-model:zoom="zoom" :center="[9.0144768, 38.8]">
                      <l-tile-layer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      ></l-tile-layer>
                      <l-marker :lat-lng="[9.0144768, 38.8]"> </l-marker>
                    </l-map>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 class="desc-headline no-border margin-bottom-35 margin-top-60">
            Similar Properties
          </h3>

          <div class="layout-switcher hidden">
            <a href="#" class="list"><i class="fa fa-th-list"></i></a>
          </div>
          <div class="listings-container list-layout">
            <div class="listing-item">
              <a href="#" class="listing-img-container">
                <div class="listing-badges">
                  <span>For Rent</span>
                </div>

                <div class="listing-img-content">
                  <span class="listing-price">$1700 <i>monthly</i></span>
                  <span class="like-icon" @click="toggleLike"></span>
                </div>

                <img src="/images/listing-03.jpg" alt="" />
              </a>

              <div class="listing-content">
                <div class="listing-title">
                  <h4><a href="#">Meridian Villas</a></h4>
                  <a
                    href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                    class="listing-address popup-gmaps"
                  >
                    <i class="fa fa-map-marker"></i>
                    778 Country St. Panama City, FL
                  </a>

                  <a href="#" class="details button border">Details</a>
                </div>

                <ul class="listing-details">
                  <li>1450 sq ft</li>
                  <li>1 Bedroom</li>
                  <li>2 Rooms</li>
                  <li>2 Rooms</li>
                </ul>

                <div class="listing-footer">
                  <a href="#"><i class="fa fa-user"></i> Chester Miller</a>
                  <span><i class="fa fa-calendar-o"></i> 4 days ago</span>
                </div>
              </div>
            </div>

            <div class="listing-item">
              <a href="#" class="listing-img-container">
                <div class="listing-badges">
                  <span>For Sale</span>
                </div>

                <div class="listing-img-content">
                  <span class="listing-price"
                    >$420,000 <i>$770 / sq ft</i></span
                  >
                  <span class="like-icon" @click="toggleLike"></span>
                </div>

                <div><img src="/images/listing-04.jpg" alt="" /></div>
              </a>

              <div class="listing-content">
                <div class="listing-title">
                  <h4><a href="#">Selway Apartments</a></h4>
                  <a
                    href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                    class="listing-address popup-gmaps"
                  >
                    <i class="fa fa-map-marker"></i>
                    33 William St. Northbrook, IL
                  </a>

                  <a href="#" class="details button border">Details</a>
                </div>

                <ul class="listing-details">
                  <li>540 sq ft</li>
                  <li>1 Bedroom</li>
                  <li>3 Rooms</li>
                  <li>2 Bathroom</li>
                </ul>

                <div class="listing-footer">
                  <a href="#"><i class="fa fa-user"></i> Kristen Berry</a>
                  <span><i class="fa fa-calendar-o"></i> 3 days ago</span>
                </div>
              </div>
            </div>

            <div class="listing-item">
              <a href="#" class="listing-img-container">
                <div class="listing-badges">
                  <span>For Sale</span>
                </div>

                <div class="listing-img-content">
                  <span class="listing-price"
                    >$535,000 <i>$640 / sq ft</i></span
                  >
                  <span class="like-icon" @click="toggleLike"></span>
                </div>

                <img src="/images/listing-05.jpg" alt="" />
              </a>

              <div class="listing-content">
                <div class="listing-title">
                  <h4><a href="#">Oak Tree Villas</a></h4>
                  <a
                    href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                    class="listing-address popup-gmaps"
                  >
                    <i class="fa fa-map-marker"></i>
                    71 Lower River Dr. Bronx, NY
                  </a>

                  <a href="#" class="details button border">Details</a>
                </div>

                <ul class="listing-details">
                  <li>350 sq ft</li>
                  <li>1 Bedroom</li>
                  <li>2 Rooms</li>
                  <li>1 Bathroom</li>
                </ul>

                <div class="listing-footer">
                  <a href="#"><i class="fa fa-user"></i> Mabel Gagnon</a>
                  <span><i class="fa fa-calendar-o"></i> 4 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-5">
        <div class="sidebar sticky right">
          <div class="widget margin-bottom-30">
            <button class="widget-button with-tip" data-tip-content="Print">
              <i class="sl sl-icon-printer"></i>
            </button>
            <button
              class="widget-button with-tip"
              @click="saveProperty"
              data-tip-content="Add to Bookmarks"
            >
              <i class="fa fa-star-o"></i>
            </button>
            <button
              class="widget-button with-tip compare-widget-button"
              data-tip-content="Add to Compare"
              @click.prevent="addToCompare"
            >
              <i class="icon-compare"></i>
            </button>
            <div class="clearfix"></div>
          </div>

          <div class="widget">
            <div
              id="booking-widget-anchor"
              class="boxed-widget booking-widget margin-top-35"
            >
              <h3><i class="fa fa-calendar-check-o"></i> Book a Tour</h3>
              <div class="row with-forms margin-top-0">
                <div class="col-lg-12">
                  <flat-pickr
                    type="text"
                    :config="config"
                    placeholder="Select date"
                    name="date"
                    v-model="date"
                  />
                </div>

                <div class="col-lg-12">
                  <input
                    type="text"
                    class="ico-01"
                    id="autocomplete-input"
                    placeholder="Full Name"
                    value=""
                  />
                </div>

                <div class="col-lg-12">
                  <input
                    type="email"
                    class="ico-01"
                    id="autocomplete-input"
                    placeholder="Email"
                    value=""
                  />
                </div>

                <div class="col-lg-12">
                  <input
                    type="text"
                    class="ico-01"
                    id="autocomplete-input"
                    placeholder="Phone number"
                    value=""
                  />
                </div>

                <div class="col-lg-12">
                  <div class="panel-dropdown">
                    <a @click="openDropdown"
                      >Guests <span class="qtyTotal" name="qtyTotal">1</span></a
                    >
                    <div class="panel-dropdown-content">
                      <div class="qtyButtons">
                        <div class="qtyTitle">Adults</div>
                        <input type="text" name="qtyInput" value="1" />
                      </div>

                      <div class="qtyButtons">
                        <div class="qtyTitle">Childrens</div>
                        <input type="text" name="qtyInput" value="0" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#" class="button book-now fullwidth margin-top-5"
                >Request To Book</a
              >
            </div>
          </div>

          <div class="widget">
            <div class="agent-widget">
              <div class="agent-title">
                <div class="agent-photo">
                  <img src="/images/agent-avatar.jpg" alt="" />
                </div>
                <div class="agent-details">
                  <h4><a href="#">Jennie Wilson</a></h4>
                  <span><i class="sl sl-icon-call-in"></i>(123) 123-456</span>
                </div>
                <div class="clearfix"></div>
              </div>

              <input
                type="text"
                placeholder="Your Email"
                pattern="^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$"
              />
              <input type="text" placeholder="Your Phone" />
              <textarea>
I'm interested in this property [ID 123456] and I'd like to know more details.</textarea
              >
              <button class="button fullwidth margin-top-5">
                Send Message
              </button>
            </div>
          </div>

          <div class="widget">
            <h3 class="margin-bottom-30 margin-top-30">Mortgage Calculator</h3>

            <form
              action="javascript:void(0);"
              autocomplete="off"
              class="mortgageCalc"
              data-calc-currency="USD"
            >
              <div class="calc-input">
                <div
                  class="pick-price tip"
                  data-tip-content="Set This Property Price"
                ></div>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  placeholder="Sale Price"
                  required
                />
                <label for="amount" class="fa fa-usd"></label>
              </div>

              <div class="calc-input">
                <input
                  type="text"
                  id="downpayment"
                  placeholder="Down Payment"
                />
                <label for="downpayment" class="fa fa-usd"></label>
              </div>

              <div class="calc-input">
                <input
                  type="text"
                  id="years"
                  placeholder="Loan Term (Years)"
                  required
                />
                <label for="years" class="fa fa-calendar-o"></label>
              </div>

              <div class="calc-input">
                <input
                  type="text"
                  id="interest"
                  placeholder="Interest Rate"
                  required
                />
                <label for="interest" class="fa fa-percent"></label>
              </div>

              <button class="button calc-button" formvalidate>Calculate</button>
              <div class="calc-output-container">
                <div class="notification success">
                  Monthly Payment: <strong class="calc-output"></strong>
                </div>
              </div>
            </form>
          </div>

          <div class="widget">
            <h3 class="margin-bottom-35">Featured Properties</h3>

            <div class="listing-carousel outer">
              <div class="item">
                <div class="listing-item compact">
                  <a href="#" class="listing-img-container">
                    <div class="listing-badges">
                      <span class="featured">Featured</span>
                      <span>For Sale</span>
                    </div>

                    <div class="listing-img-content">
                      <span class="listing-compact-title"
                        >Eagle Apartments <i>$275,000</i></span
                      >

                      <ul class="listing-hidden-content">
                        <li>Area <span>530 sq ft</span></li>
                        <li>Rooms <span>3</span></li>
                        <li>Beds <span>1</span></li>
                        <li>Baths <span>1</span></li>
                      </ul>
                    </div>

                    <img src="/images/listing-01.jpg" alt="" />
                  </a>
                </div>
              </div>

              <div class="item">
                <div class="listing-item compact">
                  <a href="#" class="listing-img-container">
                    <div class="listing-badges">
                      <span class="featured">Featured</span>
                      <span>For Sale</span>
                    </div>

                    <div class="listing-img-content">
                      <span class="listing-compact-title"
                        >Selway Apartments <i>$245,000</i></span
                      >

                      <ul class="listing-hidden-content">
                        <li>Area <span>530 sq ft</span></li>
                        <li>Rooms <span>3</span></li>
                        <li>Beds <span>1</span></li>
                        <li>Baths <span>1</span></li>
                      </ul>
                    </div>

                    <img src="/images/listing-02.jpg" alt="" />
                  </a>
                </div>
              </div>

              <div class="item">
                <div class="listing-item compact">
                  <a href="#" class="listing-img-container">
                    <div class="listing-badges">
                      <span class="featured">Featured</span>
                      <span>For Sale</span>
                    </div>

                    <div class="listing-img-content">
                      <span class="listing-compact-title"
                        >Oak Tree Villas <i>$325,000</i></span
                      >

                      <ul class="listing-hidden-content">
                        <li>Area <span>530 sq ft</span></li>
                        <li>Rooms <span>3</span></li>
                        <li>Beds <span>1</span></li>
                        <li>Baths <span>1</span></li>
                      </ul>
                    </div>

                    <img src="/images/listing-03.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slick from "../../../components/slick/Index.vue";
import "magnific-popup";
import {
  LMap,
  LTileLayer,
  LMarker,
} from "@vue-leaflet/vue-leaflet/dist/vue-leaflet.esm";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: { Slick, LMap, LTileLayer, LMarker, flatPickr },
  data: () => ({
    show: false,
    zoom: 15,
    date: new Date(),
    intervalHandle: 0,
    config: {
      altFormat: "M j, Y H:i K",
      altInput: true,
      enableTime: true,
      dateFormat: "Y-m-d H:i",
      minDate: new Date(),
      maxDate: new Date().fp_incr(14),
    },
  }),
  unmounted() {
    clearInterval(this.intervalHandle);
  },
  mounted() {
    this.$nextTick(() => {
      var resizeObjects = $(
        ".listings-container .listing-img-container img, .listings-container .listing-img-container"
      );
      this.$inlineCSS(".fullwidth-property-slider .item");
      $("body").magnificPopup({
        type: "image",
        delegate: "a.mfp-gallery",
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: "auto",
        closeBtnInside: false,
        preloader: true,
        removalDelay: 0,
        mainClass: "mfp-fade",
        gallery: { enabled: true },
      });
      $(".mfp-image").magnificPopup({
        type: "image",
        closeOnContentClick: true,
        mainClass: "mfp-fade",
        image: {
          verticalFit: true,
        },
      });
      this.$accordion();
      setTimeout(() => {
        this.$tabs(this.$refs.estate_map.leafletObject.invalidateSize(true));
      }, 700)
      $(".listing-item").each(function () {
        $(this).find(resizeObjects).css("height", "auto");
      });
      var panelTrigger = $(".booking-widget .panel-dropdown a");
      $(".booking-widget .panel-dropdown .panel-dropdown-content").css({
        width: panelTrigger.outerWidth(),
      });

      if ($(".qtyButtons").length > 0) {
        function qtySum() {
          var arr = document.getElementsByName("qtyInput");
          var tot = 0;
          for (var i = 0; i < arr.length; i++) {
            if (parseInt(arr[i].value)) tot += parseInt(arr[i].value);
          }

          var cardQty = document.querySelector(".qtyTotal");
          cardQty.innerHTML = tot;
        }
        qtySum();

        $(function () {
          $(".qtyButtons input").after('<div class="qtyInc"></div>');
          $(".qtyButtons input").before('<div class="qtyDec"></div>');

          $(".qtyDec, .qtyInc").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();

            if ($button.hasClass("qtyInc")) {
              var newVal = parseFloat(oldValue) + 1;
            } else {
              if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
              } else {
                newVal = 0;
              }
            }

            $button.parent().find("input").val(newVal);
            qtySum();
            $(".qtyTotal").addClass("rotate-x");
          });
          function removeAnimation() {
            $(".qtyTotal").removeClass("rotate-x");
          }
          const counter = document.querySelector(".qtyTotal");
          counter.addEventListener("animationend", removeAnimation);
        });
      }
      this.intervalHandle = setInterval(() => {
        this.date = new Date();
      }, 7500);
      this.$registerToolTip(
        ".compare-button.with-tip, .like-icon.with-tip, .widget-button.with-tip"
      );
      this.$toggleLike(".widget-button, .like-icon");
    });
  },
  methods: {
    addToCompare: function (e) {
      this.$addToCompareStyle();
    },
    showMoreDescriptionVisible() {
      $(".show-more").toggleClass("visible");
      this.show = true;
    },
    saveProperty() {},
    showMoreDescriptionHide() {
      $(".show-more").toggleClass("visible", false);
      setTimeout(() => {
        this.show = false;
      }, 600);
    },
    close_panel_dropdown() {
      $(".panel-dropdown").removeClass("active");
      $(".fs-inner-container.content").removeClass("faded-out");
    },
    openDropdown() {
      if ($(".panel-dropdown a").parent().is(".active")) {
        this.close_panel_dropdown();
      } else {
        this.close_panel_dropdown();
        $(".panel-dropdown a").parent().addClass("active");
        $(".fs-inner-container.content").addClass("faded-out");
      }
    }
  },
};
</script>

<style>
</style>
