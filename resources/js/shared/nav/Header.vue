<template>
  <auth-modal :show="show" @closeModal="show = false"></auth-modal>
  <list-property-wizard
    :propertystate="`sale`"
    :show="showWizard"
    @closeModal="showWizard = false"
  ></list-property-wizard>
  <header id="header-container">
    <div class="mobile-trigger" style="padding: 30px 0px"></div>
    <div id="header">
      <div class="container">
        <div class="left-side">
          <div id="logo">
            <inertia-link :href="route('home')"
              ><img src="/images/logo.png" alt=""
            /></inertia-link>
          </div>
          <div class="mmenu-trigger" @click.prevent="openNavPanel">
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
                <inertia-link
                  :class="[{ current: activeLink === 'sell' }]"
                  :href="route('sell.index')"
                  >Sell</inertia-link
                >
                <ul>
                  <li>
                    <inertia-link :href="route('sell.index')"
                      >See your options</inertia-link
                    >
                  </li>
                  <li>
                    <a class="cursor-pointer" @click="showWizard = true"
                      >Post for sale</a
                    >
                  </li>
                  <li>
                    <inertia-link :href="route('agent.index')"
                      >Find an agent</inertia-link
                    >
                  </li>
                  <li>
                    <inertia-link
                      href="listings-grid-standard-with-sidebar.html"
                      >See your home's estimate</inertia-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <inertia-link :href="route('estate.index')">Rent</inertia-link>
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
                    <inertia-link :href="route('rent.calculator.index')"
                      >Rent Affordibilty Calculator</inertia-link
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
                </ul>
              </li>
              <li>
                <a
                  :class="[
                    'cursor-pointer',
                    {
                      current:
                        activeLink === 'agencies' ||
                        activeLink === 'agents' ||
                        activeLink === 'agent/detail' ||
                        activeLink === 'agency/detail',
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
                    <a href="#">Home Improvement Service Providers</a>
                  </li>
                  <li>
                    <a href="#">Photographers</a>
                  </li>
                  <li>
                    <a href="#">Property Managers</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  :class="[
                    'cursor-pointer',
                    {
                      current:
                        activeLink === 'blog' ||
                        activeLink === 'blog/detail' ||
                        activeLink === 'contact',
                    },
                  ]"
                >
                  more
                </a>
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
                <a class="cursor-pointer" @click="show = true">Sign In</a>
              </li>
            </ul>
          </nav>
          <div class="clearfix"></div>
        </div>
        <div class="right-side">
          <div class="header-widget">
            <div class="user-menu">
              <div class="user-name">
                <span><img src="images/agent-03.jpg" alt="" /></span>Hi, John!
              </div>
              <ul>
                <li>
                  <inertia-link :href="route('profile.index')"
                    ><i class="sl sl-icon-user"></i> My Profile</inertia-link
                  >
                </li>
                <li>
                  <a href="my-bookmarks.html"
                    ><i class="sl sl-icon-star"></i> Bookmarks</a
                  >
                </li>
                <li>
                  <a href="my-properties.html"
                    ><i class="sl sl-icon-docs"></i> My Properties</a
                  >
                </li>
                <li>
                  <a @click="logout" class="cursor-pointer"
                    ><i class="sl sl-icon-power"></i> Log Out</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="clearfix"></div>
</template>

<script>
import AuthModal from "../../components/Auth/modal/AuthModal.vue";
import "../../Partial/mmenu.min.js";
export default {
  components: { AuthModal },
  data: () => ({
    activeLink: null,
    show: false,
    mmenuAPI: null,
    showWizard: false,
  }),
  mounted() {
    this.$nextTick(() => {
      $(".user-menu").on("click", function () {
        $(this).toggleClass("active");
      });
      if (window.innerWidth >= 1240) {
        $("#header").addClass("cloned");
        $(".mobile-trigger").css("display", "block");
      } else $(".mobile-trigger").css("display", "none");
      this.mmenuInit();
    });
    this.setActiveLink(this.$inertia.page.url, "inertia");
    axios.interceptors.response.use((response) => {
      this.setActiveLink(response?.config?.url, "axios");
      if (this.mmenuAPI !== null) this.mmenuAPI.close();
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
    logout() {
        this.$inertia.get('/')
    },
    mmenuInit() {
      var wi = $(window).width();
      if (wi <= "992") {
        $(".mmenu-init").remove();
        $("#navigation")
          .addClass("mmenu-init")
          .insertBefore("#navigation")
          .removeAttr("id")
          .removeClass("style-1")
          .find("ul")
          .removeAttr("id");
        $(".mmenu-init").find(".container").removeClass("container");

        $(".mmenu-init").mmenu(
          { counters: true },
          {
            offCanvas: {
              pageNodetype: "#app",
            },
          }
        );
        this.mmenuAPI = $(".mmenu-init").data("mmenu");
        var $icon = $(".hamburger");

        this.mmenuAPI.bind("open:finish", function () {
          setTimeout(function () {
            $icon.addClass("is-active");
          });
        });
        this.mmenuAPI.bind("close:finish", function () {
          setTimeout(function () {
            $icon.removeClass("is-active");
          });
        });
      }
      $(".mm-next").addClass("mm-fullsubopen");
    },
    openNavPanel() {
      if (this.mmenuAPI !== null) this.mmenuAPI.open();
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
