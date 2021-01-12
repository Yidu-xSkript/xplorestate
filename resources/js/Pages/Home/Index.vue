<template>
  <div
    class="parallax"
    data-background="images/home-parallax.jpg"
    data-color="#274abb"
    data-color-opacity="0"
    data-img-width="2500"
    data-img-height="1600"
  >
    <div class="parallax-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="main-search-container">
              <h2>Xplore Your Dream Estate</h2>

              <form class="main-search-form">
                <div class="search-type">
                  <label class="active"
                    ><input
                      class="first-tab"
                      name="tab"
                      checked="checked"
                      type="radio"
                    />Any Status</label
                  >
                  <label><input name="tab" type="radio" />For Sale</label>
                  <label><input name="tab" type="radio" />For Rent</label>
                  <div class="search-type-arrow"></div>
                </div>

                <div class="main-search-box">
                  <div class="main-search-input larger-input">
                    <input
                      type="text"
                      class="ico-01"
                      id="autocomplete-input"
                      placeholder="Enter address e.g. street, city and state or zip"
                      value=""
                    />
                    <button class="button">Search</button>
                  </div>

                  <div class="row with-forms">
                    <div class="col-md-4">
                      <select
                        data-placeholder="Any Type"
                        class="chosen-select-no-single"
                      >
                        <option>Any Type</option>
                        <option>Apartments</option>
                        <option>Houses</option>
                        <option>Commercial</option>
                        <option>Garages</option>
                        <option>Lots</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <div class="select-input">
                        <input
                          type="text"
                          placeholder="Min Price"
                          data-unit="USD"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="select-input">
                        <input
                          type="text"
                          placeholder="Max Price"
                          data-unit="USD"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="more-search-options-trigger"
                    data-open-title="More Options"
                    data-close-title="Less Options"
                  ></a>

                  <div class="more-search-options">
                    <div class="more-search-options-container">
                      <div class="row with-forms">
                        <div class="col-md-6">
                          <div class="select-input">
                            <input
                              type="text"
                              placeholder="Min Area"
                              data-unit="Sq Ft"
                            />
                          </div>
                        </div>

                        <div class="col-md-6">
                          <div class="select-input">
                            <input
                              type="text"
                              placeholder="Max Area"
                              data-unit="Sq Ft"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row with-forms">
                        <div class="col-md-6">
                          <select
                            data-placeholder="Beds"
                            class="chosen-select-no-single"
                          >
                            <option label="blank"></option>
                            <option>Beds (Any)</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>

                        <div class="col-md-6">
                          <select
                            data-placeholder="Baths"
                            class="chosen-select-no-single"
                          >
                            <option label="blank"></option>
                            <option>Baths (Any)</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </div>

                      <div class="checkboxes in-row">
                        <input id="check-2" type="checkbox" name="check" />
                        <label for="check-2">Air Conditioning</label>

                        <input id="check-3" type="checkbox" name="check" />
                        <label for="check-3">Swimming Pool</label>

                        <input id="check-4" type="checkbox" name="check" />
                        <label for="check-4">Central Heating</label>

                        <input id="check-5" type="checkbox" name="check" />
                        <label for="check-5">Laundry Room</label>

                        <input id="check-6" type="checkbox" name="check" />
                        <label for="check-6">Gym</label>

                        <input id="check-7" type="checkbox" name="check" />
                        <label for="check-7">Alarm</label>

                        <input id="check-8" type="checkbox" name="check" />
                        <label for="check-8">Window Covering</label>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="margin-top-0 margin-bottom-0">
    <h3
      class="text-center margin-top-40 margin-bottom-30"
      style="
        font-size: 18px !important;
        font-weight: 700;
        line-height: unset !important;
        font-family: 'Playfair Display', serif;
      "
    >
      Whether you’re buying, selling or renting, <br />we can help you move
      forward.
    </h3>
    <hr style="margin-left: 45%; margin-right: 45%" />
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <inertia-link class="home-card--">
            <div class="home-card-img--">
              <img
                src="https://www.zillowstatic.com/s3/homepage/static/Buy_a_home.png"
                alt=""
              />
            </div>
            <div class="post-content">
              <h3>Buy an estate</h3>
              <p>
                Find your home with an immersive photo, video & virtual tour
                experience. we have listings you won't find anywhere else.
              </p>
              <div class="text-center">
                <a href="#" class="button border read-more">Search Homes</a>
              </div>
            </div>
          </inertia-link>
        </div>
        <div class="col-md-4">
          <inertia-link class="home-card--">
            <div class="home-card-img--">
              <img
                src="https://www.zillowstatic.com/s3/homepage/static/Sell_a_home.png"
                alt=""
              />
            </div>
            <div class="post-content">
              <h3>Sell an estate</h3>
              <p>
                If you choose to sell your home, we can help you navigate to a
                quick & successful sale
              </p>
              <div class="text-center">
                <a href="#" class="button border read-more">See your options</a>
              </div>
            </div>
          </inertia-link>
        </div>
        <div class="col-md-4">
          <inertia-link class="home-card--">
            <div class="home-card-img--">
              <img
                src="https://www.zillowstatic.com/s3/homepage/static/Rent_a_home.png"
                alt=""
              />
            </div>
            <div class="post-content">
              <h3>Rent an estate</h3>
              <p>
                Have a seemless online experience, Find a rental that's perfect
                for you. you'll find what you desire.
              </p>
              <div class="text-center">
                <a href="#" class="button border read-more">Find Rentals</a>
              </div>
            </div>
          </inertia-link>
        </div>
      </div>
    </div>
  </section>
  <partner></partner>
</template>

<script>
import Layout from "../../shared/Layout.vue";
import Partner from "../../components/Partner.vue";
export default {
  layout: (h, page) => h(Layout, [page]),
  components: { Partner },
};
</script>

<style>
</style>
