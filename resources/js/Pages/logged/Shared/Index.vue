<template>
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>{{ routeName }}</h2>

          <nav id="breadcrumbs">
            <ul>
              <li><inertia-link :href="route('home')">Home</inertia-link></li>
              <li>{{ routeName }}</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <div class="container logged">
    <div class="row">
      <div class="col-md-4">
        <side-bar />
      </div>

      <div class="col-md-8">
        <slot name="shared-slot"></slot>
      </div>
    </div>
  </div>
  <div class="margin-top-55"></div>
</template>

<script>
import SideBar from "./Sidebar";
export default {
  components: { SideBar },
  props: {
    routeName: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style>
</style>
