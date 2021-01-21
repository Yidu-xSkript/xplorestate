<template>
  <v-modal :showModal="show" @close="$emit('closeForgotModal')">
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
            <form method="post" class="login">
              <p class="form-row form-row-wide">
                <label for="email"
                  >Email:
                  <i class="im im-icon-Email"></i>
                  <input
                    type="email"
                    class="input-text"
                    name="email"
                    id="email"
                    value=""
                  />
                </label>
              </p>

              <p class="form-row form-row-wide">
                <label for="password"
                  >Password:
                  <i class="im im-icon-Lock-2"></i>
                  <input
                    class="input-text"
                    type="password"
                    name="password"
                    id="password"
                  />
                </label>
              </p>

              <p class="form-row">
                <input
                  type="submit"
                  class="button border margin-top-10"
                  name="login"
                  value="Login"
                />
              </p>

              <p class="lost_password">
                <a href="#">Forgot Your Password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </template>
  </v-modal>
</template>

<script>
import VModal from "../../Modal/Index.vue";
export default {
  name: "Forgot",
  props: ['show'],
  components: { VModal },
  emits: ['closeForgotModal']
};
</script>

<style>
</style>
