<template>
  <form method="post" class="register">
    <p class="form-row form-row-wide">
      <label for="email2"
        >Email Address:
        <i class="im im-icon-Mail"></i>
        <input
          type="email"
          class="input-text"
          name="email"
          id="email2"
          value=""
        />
      </label>
    </p>

    <p class="form-row form-row-wide">
      <label for="password1"
        >Password:
        <i class="im im-icon-Lock-2"></i>
        <input
          class="input-text"
          type="password"
          name="password1"
          id="password1"
        />
      </label>
      <small> > At least 8 characters</small> <br />
      <small> > Mix of Letters & numbers</small>
      <label for="iamalandlord" class="rememberme">
        <input
          name="iamalandlord"
          type="checkbox"
          id="iamalandlord"
          v-model="professional"
        />
        I am a Landlord or Industry Professional</label
      >
    </p>
    <div class="form-row form-row-wide" v-if="professional">
      <h3 style="font-family: 'Playfair Display', serif">
        Professional Information
      </h3>
      <hr />
      <div class="row with-forms">
        <div class="col-md-12">
          <select
            data-placeholder="Select your category"
            class="chosen-select-no-single"
          >
            <option>Select your category</option>
            <option>Real Estate Agent / Broker</option>
            <option>Photographer</option>
            <option>Home Builder</option>
            <option>Landlord</option>
            <option>Property Manager</option>
            <option>Interior Designer</option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="Firstname"
            >Firstname
            <i class="im im-icon-User"></i>
            <input
              class="input-text"
              type="text"
              name="Firstname"
              placeholder="Firstname"
              id="Firstname"
            />
          </label>
        </div>
        <div class="col-md-6">
          <label for="LastName"
            >LastName
            <i class="im im-icon-User"></i>
            <input
              class="input-text"
              type="text"
              name="LastName"
              placeholder="Lastname"
              id="LastName"
            />
          </label>
        </div>
        <div class="col-md-12">
          <label for="Phonenumber"
            >Phonenumber
            <i class="im im-icon-Phone"></i>
            <input
              class="input-text"
              type="text"
              name="Phonenumber"
              placeholder="Phonenumber"
              id="Phonenumber"
            />
          </label>
        </div>
      </div>
    </div>
    <p class="form-row">
      <input
        v-if="!professional"
        type="submit"
        class="button border"
        style="width: 100%;"
        name="register"
        value="Register"
      />
      <input
        v-else
        type="submit"
        class="button border"
        style="width: 100%;"
        name="Continue"
        value="Continue"
      />
    </p>
    <div class="row">
      <div class="col-md-12 text-center">
        <small
          >By submitting, I accept Xplorestate's <a href="#">terms of use</a>.</small
        >
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    professional: false,
  }),
};
</script>

<style>
</style>
