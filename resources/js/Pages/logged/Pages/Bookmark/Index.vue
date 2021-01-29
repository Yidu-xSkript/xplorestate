<template>
  <teleport to="head">
    <title>{Name} | Bookmarks - Xplorestate</title>
  </teleport>

  <Layout routeName="Bookmarked Listings">
    <template v-slot:shared-slot>
      <table class="manage-table bookmarks-table responsive-table">
        <tr>
          <th><i class="fa fa-file-text"></i> Bookmarked Listings</th>
          <th></th>
        </tr>

        <tr>
          <td class="title-container">
            <img src="images/listing-05.jpg" alt="">
            <div class="title">
              <h4><a href="#">Oak Tree Villas</a></h4>
              <span>71 Lower River Dr. Bronx, NY</span>
              <span class="table-property-price">$535,000</span>
            </div>
          </td>
          <td class="action">
            <a href="#" class="delete"><i class="fa fa-remove"></i> Remove</a>
          </td>
        </tr>

        <tr>
          <td class="title-container">
            <img src="images/listing-06.jpg" alt="">
            <div class="title">
              <h4><a href="#">Old Town Manchester</a></h4>
              <span> 7843 Durham Avenue, MD  </span>
              <span class="table-property-price">$420,000</span>
            </div>
          </td>
          <td class="action">
            <a href="#" class="delete"><i class="fa fa-remove"></i> Remove</a>
          </td>
        </tr>
        <tr>
          <td class="title-container">
            <img src="images/listing-02.jpg" alt="">
            <div class="title">
              <h4><a href="#">Serene Uptown</a></h4>
              <span>6 Bishop Ave. Perkasie, PA </span>
              <span class="table-property-price">$900 / monthly</span>
            </div>
          </td>
          <td class="action">
            <a href="#" class="delete"><i class="fa fa-remove"></i> Remove</a>
          </td>
        </tr>

        <tr>
          <td class="title-container">
            <img src="images/listing-04.jpg" alt="">
            <div class="title">
              <h4><a href="#">Selway Apartments</a></h4>
              <span>33 William St. Northbrook, IL </span>
              <span class="table-property-price">$420,000</span>
            </div>
          </td>
          <td class="action">
            <a href="#" class="delete"><i class="fa fa-remove"></i> Remove</a>
          </td>
        </tr>
      </table>
    </template>
  </Layout>
  
</template>

<script>
import Layout from "../../Shared/Index";
export default {
  components: { Layout },
};
</script>

<style>
</style>
