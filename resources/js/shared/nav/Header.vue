<template>
  <auth-modal :show="show" @closeModal="closeAuthModal"></auth-modal>
  <header id="header-container">
    <div style="padding: 30px 0px"></div>
    <div id="header" class="cloned">
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
                <inertia-link
                  :class="[{ current: activeLink === 'map' }]"
                  :href="route('estate.index')"
                  >Buy</inertia-link
                >
                <ul>
                  <li>
                    <inertia-link
                      class="current"
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
                <a
                  :class="[
                    'cursor-pointer',
                    {
                      current:
                        activeLink === 'agencies' || activeLink === 'agents' || activeLink === 'agent/detail' || activeLink === 'agency/detail',
                    },
                  ]"
                  >Agents & Agencies</a
                >
                <ul>
                  <li>
                    <inertia-link
                      :class="[{ current: activeLink === 'agencies' }]"
                      :href="route('agency.index')"
                      >Real Estates</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      :href="route('agent.index')"
                      :class="[{ current: activeLink === 'agents' }]"
                      >Real Estate Agents</inertia-link
                    >
                  </li>
                  <li>
                    <a href="#">Property Managers</a>
                  </li>
                </ul>
              </li>
              <li>
                <inertia-link
                  :class="[
                    {
                      current:
                        activeLink === 'blog' || activeLink === 'blog/detail' || activeLink === 'contact',
                    },
                  ]"
                  href=""
                  >more</inertia-link
                >
                <ul>
                  <li>
                    <inertia-link :href="route('blog.index')"
                      >Blog</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link :href="route('contact.index')"
                      >Contact Us</inertia-link
                    >
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
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
                <a class="cursor-pointer" @click="openAuthModal">Sign In</a>
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
import AuthModal from "../../components/Auth/modal/AuthModal.vue";
export default {
  components: { AuthModal },
  data: () => ({ activeLink: null, show: false }),
  mounted() {
    this.setActiveLink(this.$inertia.page.url, "inertia");
    axios.interceptors.response.use((response) => {
      this.setActiveLink(response?.config?.url, "axios");
      return response;
    });
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    openAuthModal() {
      this.show = true;
      document.querySelector("body").style.overflowY = "hidden";
    },
    closeAuthModal() {
      this.show = false;
      document.querySelector("body").style.overflowY = "auto";
    },
    setActiveLink(url, type) {
      if (type == "axios") {
        var _url = new URL(url);
        this.activeLink = (_url.pathname || "").replace("/", "").split("?")[0];
      } else {
        this.activeLink = (url || "").replace("/", "").split("?")[0];
      }
    },
    handleScroll: function () {
      this.$nextTick(() => {
        var headerOffset = $("#header-container").height() * 2;
        if ($(window).scrollTop() >= headerOffset) {
          $("#header").addClass("sticky").removeClass("unsticky");
          $("#navigation.style-2").addClass("sticky").removeClass("unsticky");
        }
      });
    },
  },
};
</script>

<style>
</style>
