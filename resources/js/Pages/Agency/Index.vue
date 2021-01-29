<template>
  <teleport to="head">
    <title>Agencies | Xplorestate</title>
  </teleport>
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Agencies</h2>

          <nav id="breadcrumbs">
            <ul>
              <li><inertia-link :href="route('home')">Home</inertia-link></li>
              <li>Agencies</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div
          class="agent agent-page agency"
          v-for="(agency, index) in agencies"
          :key="index"
        >
          <inertia-link :href="route('agency.detail')" class="agent-avatar">
            <img style="width:100%; height: auto;" :src="agency.image" alt="agency image" />
          </inertia-link>

          <div class="agent-content">
            <div class="agent-name">
              <h4>
                <inertia-link :href="route('agency.detail')">{{
                  agency.name
                }}</inertia-link>
              </h4>
              <span><i class="fa fa-map-marker"></i> {{ agency.address }}</span>
            </div>

            <p>{{ agency.description }}</p>

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
                <a class="twitter" href="#"><i class="icon-twitter"></i></a>
              </li>
              <li>
                <a class="linkedin" href="#"><i class="icon-linkedin"></i></a>
              </li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="clearfix"></div>
        <div class="pagination-container margin-top-20">
          <nav class="pagination">
            <ul>
              <li><a href="#" class="current-page">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
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
  <div class="margin-top-55"></div>
</template>

<script>
export default {
  mounted() {
    if ($(".agent-avatar img").height() < $(".agent-content").innerHeight()) {
      $(".agent-page").addClass("long-content");
    } else {
      $(".agent-page").removeClass("long-content");
    }
  },
  data: () => ({
    agencies: [
      {
        image: "/images/agency-01.png",
        name: "King Properties",
        address: "New York",
        description:
          "Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper",
      },
      {
        image: "/images/agency-02.png",
        name: "Hexagon Agency",
        address: "Chicago",
        description:
          "Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper",
      },
      {
        image: "/images/agency-03.png",
        name: "Williams & Williams",
        address: "Las Vegas",
        description:
          "Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper",
      },
    ],
  }),
};
</script>

<style>
</style>
