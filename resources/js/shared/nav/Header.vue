<template>
  <header id="header-container">
    <div id="header">
      <div class="container">
        <div class="left-side">
          <div id="logo">
            <inertia-link :href="route('home')"
              ><img src="/images/logo.png" alt=""
            /></inertia-link>
          </div>
          <div class="mmenu-trigger">
            <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
          </div>
          <nav id="navigation" class="style-1">
            <ul id="responsive">
              <li>
                <inertia-link class="current" href="#">Buy</inertia-link>
                <ul>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >All Homes</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >New Construction</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >Coming Soon</inertia-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <inertia-link href="#">Sell</inertia-link>
                <ul>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >Post for sale</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >See your home's estimate</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >Sellers guide</inertia-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <inertia-link href="#">Rent</inertia-link>
                <ul>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >Rental Buildings</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >Apartments for Rent</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >Houses for Rent</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >All rental listings</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >All rental buildings</inertia-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Agents & Agencies</a>
                <ul>
                  <li>
                    <a href="#">Real Estates</a>
                  </li>
                  <li>
                    <a href="#">Real Estate Agents</a>
                  </li>
                  <li>
                    <a href="#">Real Estate Photographers</a>
                  </li>
                  <li>
                    <a href="#">Property Managers</a>
                  </li>
                  <li>
                    <a href="#">Home Builders</a>
                  </li>
                  <li>
                    <a href="#">Interior Designers</a>
                  </li>
                </ul>
              </li>
              <li>
                <inertia-link href="#">more</inertia-link>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">XplorEstate App</a>
                  </li>
                </ul>
              </li>
              <li>
                <inertia-link href="#">Sign In</inertia-link>
              </li>
              <li>
                <inertia-link href="#" class="button border"
                  >List your Property</inertia-link
                >
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </header>
  <div class="clearfix"></div>
</template>

<script>
export default {
  mounted() {
    $("#header")
      .not("#header-container.header-style-2 #header")
      .clone(true)
      .addClass("cloned unsticky")
      .insertAfter("#header");
    $("#navigation.style-2")
      .clone(true)
      .addClass("cloned unsticky")
      .insertAfter("#navigation.style-2");

    $("#logo .sticky-logo")
      .clone(true)
      .prependTo("#navigation.style-2.cloned ul#responsive");
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.$nextTick(() => {
        var headerOffset = $("#header-container").height() * 2;
        if ($(window).scrollTop() >= headerOffset) {
          $("#header.cloned").addClass("sticky").removeClass("unsticky");
          $("#navigation.style-2.cloned")
            .addClass("sticky")
            .removeClass("unsticky");
        } else {
          $("#header.cloned").addClass("unsticky").removeClass("sticky");
          $("#navigation.style-2.cloned")
            .addClass("unsticky")
            .removeClass("sticky");
        }
      });
    },
  },
};
</script>

<style>
</style>
