<template>
  <teleport to="head">
    <title>{Name} | Bookmarks - Xplorestate</title>
  </teleport>

  <Layout routeName="Bookmarked Listings">
    <template v-slot:shared-slot>
      <div class="listings-container list-layout">
        <div class="listing-item">
          <a href="#" class="listing-img-container">
            <div class="listing-badges">
              <span>For Rent</span>
            </div>

            <div class="listing-img-content">
              <span class="listing-price">$1700 <i>monthly</i></span>
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

              <a href="#" class="remove button border">Remove</a>
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

              <a href="#" class="remove button border">Remove</a>
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

              <a href="#" class="remove button border">Remove</a>
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
    </template>
  </Layout>
  
</template>

<script>
import Layout from "../../Shared/Index";
export default {
  components: { Layout },
  mounted() {
    this.$nextTick(() => {
      var resizeObjects = $(
        ".listings-container .listing-img-container img, .listings-container .listing-img-container"
      );
      $(".listing-item").each(function () {
        $(this).find(resizeObjects).css("height", "auto");
      });
    })
  }
};
</script>

<style>
</style>
