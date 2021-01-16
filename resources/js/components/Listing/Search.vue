<template>
  <section class="search margin-bottom-30">
    <div class="row">
      <div class="col-md-12">
        <h4 class="search-title">Find Your Home</h4>
        <div class="main-search-box no-shadow">
          <div class="row with-forms">
            <div class="col-fs-6">
              <input
                type="text"
                placeholder="Enter address e.g. street, city or state"
                value=""
              />
            </div>

            <div class="col-fs-3">
              <select
                data-placeholder="Any Status"
                class="chosen-select-no-single"
              >
                <option>Any Status</option>
                <option>For Sale</option>
                <option>For Rent</option>
              </select>
            </div>

            <div class="col-fs-3">
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
          </div>

          <div class="row with-forms">
            <div class="col-fs-3">
              <div class="select-input disabled-first-option">
                <input type="text" placeholder="Min Area" data-unit="Sq Ft" />
                <select>
                  <option>Min Area</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                  <option>700</option>
                  <option>800</option>
                  <option>1000</option>
                  <option>1500</option>
                </select>
              </div>
            </div>

            <div class="col-fs-3">
              <div class="select-input disabled-first-option">
                <input type="text" placeholder="Max Area" data-unit="Sq Ft" />
                <select>
                  <option>Max Area</option>
                  <option>300</option>
                  <option>400</option>
                  <option>500</option>
                  <option>700</option>
                  <option>800</option>
                  <option>1000</option>
                  <option>1500</option>
                </select>
              </div>
            </div>

            <div class="col-fs-3">
              <div class="select-input disabled-first-option">
                <input type="text" placeholder="Min Price" data-unit="USD" />
                <select>
                  <option>Min Price</option>
                  <option>1 000</option>
                  <option>2 000</option>
                  <option>3 000</option>
                  <option>4 000</option>
                  <option>5 000</option>
                  <option>10 000</option>
                  <option>15 000</option>
                  <option>20 000</option>
                  <option>30 000</option>
                  <option>40 000</option>
                  <option>50 000</option>
                  <option>60 000</option>
                  <option>70 000</option>
                  <option>80 000</option>
                  <option>90 000</option>
                  <option>100 000</option>
                  <option>110 000</option>
                  <option>120 000</option>
                  <option>130 000</option>
                  <option>140 000</option>
                  <option>150 000</option>
                </select>
              </div>
            </div>

            <div class="col-fs-3">
              <div class="select-input disabled-first-option">
                <input type="text" placeholder="Max Price" data-unit="USD" />
                <select>
                  <option>Max Price</option>
                  <option>1 000</option>
                  <option>2 000</option>
                  <option>3 000</option>
                  <option>4 000</option>
                  <option>5 000</option>
                  <option>10 000</option>
                  <option>15 000</option>
                  <option>20 000</option>
                  <option>30 000</option>
                  <option>40 000</option>
                  <option>50 000</option>
                  <option>60 000</option>
                  <option>70 000</option>
                  <option>80 000</option>
                  <option>90 000</option>
                  <option>100 000</option>
                  <option>110 000</option>
                  <option>120 000</option>
                  <option>130 000</option>
                  <option>140 000</option>
                  <option>150 000</option>
                </select>
              </div>
            </div>
          </div>

          <button class="button fs-map-btn">Update</button>
          <a
            href="#"
            class="more-search-options-trigger margin-top-20"
            @click="$triggerMoreOptions"
            data-open-title="More Options"
            data-close-title="Less Options"
          ></a>

          <div class="more-search-options relative">
            <div class="more-search-options-container margin-top-30">
              <div class="row with-forms">
                <div class="col-fs-3">
                  <select
                    data-placeholder="Age of Home"
                    class="chosen-select-no-single"
                  >
                    <option label="blank"></option>
                    <option>Age of Home (Any)</option>
                    <option>0 - 1 Years</option>
                    <option>0 - 5 Years</option>
                    <option>0 - 10 Years</option>
                    <option>0 - 20 Years</option>
                    <option>0 - 50 Years</option>
                    <option>50 + Years</option>
                  </select>
                </div>

                <div class="col-fs-3">
                  <select
                    data-placeholder="Rooms"
                    class="chosen-select-no-single"
                  >
                    <option label="blank"></option>
                    <option>Rooms (Any)</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>

                <div class="col-fs-3">
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

                <div class="col-fs-3">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "ListingSearch"
};
</script>

<style>
</style>
