<template>
  <teleport to="head">
    <title>{Name} | Profile - Xplorestate</title>
  </teleport>

  <Layout routeName="My Profile">
    <template v-slot:shared-slot>
      <div class="row">
        <div class="col-md-8 my-profile">
          <h4 class="margin-top-0 margin-bottom-30">My Account</h4>

          <label>Your Name</label>
          <input value="Jennie Wilson" type="text" />

          <label>Your Title</label>
          <input value="Agent In New York" type="text" />

          <label>Phone</label>
          <input value="(123) 123-456" type="text" />

          <label>Email</label>
          <input value="jennie@example.com" type="text" />

          <h4 class="margin-top-50 margin-bottom-25">About Me</h4>
          <textarea name="about" id="about" cols="30" rows="10">
  Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</textarea
          >

          <h4 class="margin-top-50 margin-bottom-0">Social</h4>

          <label><i class="fa fa-twitter"></i> Twitter</label>
          <input value="https://www.twitter.com/" type="text" />

          <label><i class="fa fa-facebook-square"></i> Facebook</label>
          <input value="https://www.facebook.com/" type="text" />

          <label><i class="fa fa-google-plus"></i> Google+</label>
          <input value="https://www.google.com/" type="text" />

          <label><i class="fa fa-linkedin"></i> Linkedin</label>
          <input value="https://www.linkedin.com/" type="text" />

          <button class="button margin-top-20 margin-bottom-20">
            Save Changes
          </button>
        </div>

        <div class="col-md-4">
          <div class="edit-profile-photo">
            <img src="images/agent-02.jpg" alt="" />
            <div class="change-photo-btn">
              <div class="photoUpload">
                <span><i class="fa fa-upload"></i> Upload Photo</span>
                <input type="file" class="upload" />
              </div>
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
};
</script>

<style>
</style>
