<template>
  <v-modal :showModal="show" @close="$emit('closeModal')">
    <template v-slot:body>
      <div class="row">
        <div class="col-md-12">
          <button class="button social-login via-facebook">
            <i class="fa fa-facebook"></i> Continue With Facebook
          </button>
          <button class="button social-login via-gplus">
            <i class="fa fa-google"></i> Continue With Google
          </button>

          <div class="my-account style-1 margin-top-5 margin-bottom-40">
            <ul class="tabs-nav">
              <li class="active"><a href="#tab11a">Sign In</a></li>
              <li><a href="#tab22a">Create Account</a></li>
            </ul>

            <div class="tabs-container">
              <div class="tab-content" id="tab11a">
                <login-modal></login-modal>
              </div>

              <div class="tab-content" id="tab22a">
                <signup-modal></signup-modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </v-modal>
</template>

<script>
import VModal from "../../Modal/Index.vue";
import LoginModal from "./LoginModal.vue";
import SignupModal from "./SignupModal.vue";
export default {
  components: { LoginModal, SignupModal, VModal },
  props: ["show"],
  emits: ["closeModal"],
  watch: {
    show(val) {
      if (val) {
        this.$nextTick(() => {
          this.$tabs();
        });
      }
    },
  },
};
</script>

<style scoped>
</style>
