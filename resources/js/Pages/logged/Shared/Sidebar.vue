<template>
  <div class="sidebar left">
    <div class="logged-sidebar my-account-nav-container">
      <ul class="my-account-nav">
        <li class="sub-nav-title">Analytics</li>
        <li>
          <inertia-link :class="[{current:activeLink === 'dashboard'}]" :href="route('profile.index')"
            ><i class="sl sl-icon-speedometer"></i> Dashboard</inertia-link
          >
        </li>
      </ul>
      <ul class="my-account-nav">
        <li class="sub-nav-title">Manage Listings</li>
        <li>
          <inertia-link :class="[{current:activeLink === 'my-property'}]" :href="route('property.index')"
            ><i class="sl sl-icon-docs"></i> My Properties</inertia-link
          >
        </li>
        <li>
          <inertia-link :class="[{current:activeLink === 'bookmark'}]" :href="route('bookmark.index')"
            ><i class="sl sl-icon-star"></i> Bookmarked Listings</inertia-link
          >
        </li>
        <li>
          <a href="my-bookmarks.html"
            ><i class="fa fa-search"></i> Saved Searches</a
          >
        </li>
        <li>
          <a href="submit-property.html"
            ><i class="sl sl-icon-plus"></i> Submit New Property</a
          >
        </li>
      </ul>
      <ul class="my-account-nav">
        <li class="sub-nav-title">Manage Account</li>
        <li>
          <inertia-link :class="[{current:activeLink === 'profile'}]" :href="route('profile.index')"
            ><i class="sl sl-icon-user"></i> My Profile</inertia-link
          >
        </li>
        <li>
          <a href="change-password.html"
            ><i class="sl sl-icon-lock"></i> Change Password</a
          >
        </li>
      </ul>
      <ul class="my-account-nav">
        <li>
          <a href="#"><i class="sl sl-icon-power"></i> Log Out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    footerContainer: null,
    loggedContainer: null,
    sidebar: null,
    sidebarOffset: null,
    activeLink: null,
  }),
  mounted() {
    this.$nextTick(() => {
      if (window.innerWidth > 992) {
        this.footerContainer = $("#footer");
        this.loggedContainer = $(".logged");
        this.sidebar = $(".logged-sidebar");
        this.sidebarOffset = this.sidebar.offset();
        window.addEventListener('scroll', this.createStickySidebar)
      }
      this.activeLink = this.$setActiveLink(this.$inertia.page.url, "inertia");
      axios.interceptors.response.use((response) => {
        this.activeLink = this.$setActiveLink(response?.config?.url, "axios");
        return response;
      });
    });
  },
  unmounted() {
    if (window.innerWidth > 992) {
      window.removeEventListener('scroll', this.createStickySidebar)
    }
  },
  methods: {
    createStickySidebar() {
      var cont = this.loggedContainer.innerHeight() - this.footerContainer.innerHeight()
      if ($(window).scrollTop() > this.sidebarOffset.top - 100 && cont * 1.27 >= window.scrollY) {
        this.sidebar.addClass('sticky');
        this.sidebar.stop().animate({ 
          marginTop: $(window).scrollTop() - this.sidebarOffset.top + 100
        })
      } else {
        this.sidebar.removeClass('sticky');
        this.sidebar.stop().animate({ 
          marginTop: 0
        })
      }
    },
  },
};
</script>

<style>
</style>
