<template>
  <teleport to="head">
    <title>{Name} | My Properties - Xplorestate</title>
  </teleport>

  <Layout routeName="My Properties">
    <template v-slot:shared-slot>
      <table class="manage-table responsive-table">

        <tr>
          <th><i class="fa fa-file-text"></i> Property</th>
          <th class="expire-date"><i class="fa fa-calendar"></i> Expiration Date</th>
          <th></th>
        </tr>

        <!-- Item #1 -->
        <tr>
          <td class="title-container">
            <img src="images/listing-02.jpg" alt="">
            <div class="title">
              <h4><a href="#">Serene Uptown</a></h4>
              <span>6 Bishop Ave. Perkasie, PA </span>
              <span class="table-property-price">$900 / monthly</span>
            </div>
          </td>
          <td class="expire-date">December 30, 2016</td>
          <td class="action">
            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
          </td>
        </tr>

        <!-- Item #2 -->
        <tr>
          <td class="title-container">
            <img src="images/listing-05.jpg" alt="">
            <div class="title">
              <h4><a href="#">Oak Tree Villas</a></h4>
              <span>71 Lower River Dr. Bronx, NY</span>
              <span class="table-property-price">$535,000</span>
            </div>
          </td>
          <td class="expire-date">December 12, 2016</td>
          <td class="action">
            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
          </td>
        </tr>

        <!-- Item #3 -->
        <tr>
          <td class="title-container">
            <img src="images/listing-04.jpg" alt="">
            <div class="title">
              <h4><a href="#">Selway Apartments</a></h4>
              <span>33 William St. Northbrook, IL </span>
              <span class="table-property-price">$420,000</span>
            </div>
          </td>
          <td class="expire-date">December 04, 2016</td>
          <td class="action">
            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
          </td>
        </tr>

        <!-- Item #4 -->
        <tr>
          <td class="title-container">
            <img src="images/listing-06.jpg" alt="">
            <div class="title">
              <h4><a href="#">Old Town Manchester</a></h4>
              <span> 7843 Durham Avenue, MD  </span>
              <span class="table-property-price">$420,000</span>
            </div>
          </td>
          <td class="expire-date">November 27, 2016</td>
          <td class="action">
            <a href="#"><i class="fa fa-pencil"></i> Edit</a>
            <a href="#"><i class="fa  fa-eye-slash"></i> Hide</a>
            <a href="#" class="delete"><i class="fa fa-remove"></i> Delete</a>
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
