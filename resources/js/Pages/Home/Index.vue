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
