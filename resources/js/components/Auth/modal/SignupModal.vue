<template>
  <div
    class="row mt25 tab-pane fade"
    id="profile"
    role="tabpanel"
    aria-labelledby="profile-tab"
  >
    <div class="col-lg-6 col-xl-6">
      <div class="regstr_thumb">
        <img
          class="img-fluid w100"
          src="images/resource/regstr.jpg"
          alt="regstr.jpg"
        />
      </div>
    </div>
    <div class="col-lg-6 col-xl-6">
      <div class="sign_up_form">
        <div class="heading">
          <h4>Register</h4>
        </div>
        <form action="#">
          <div class="row">
            <div class="col-lg-12">
              <button type="submit" class="btn btn-block btn-fb">
                <i class="fa fa-facebook float-left mt5"></i> Login with
                Facebook
              </button>
            </div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-block btn-googl">
                <i class="fa fa-google float-left mt5"></i> Login with Google
              </button>
            </div>
          </div>
          <hr />
          <div class="form-group input-group">
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              placeholder="User Name"
            />
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="flaticon-user"></i></div>
            </div>
          </div>
          <div class="form-group input-group">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail2"
              placeholder="Email"
            />
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="fa fa-envelope-o"></i>
              </div>
            </div>
          </div>
          <div class="form-group input-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Password"
            />
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="flaticon-password"></i>
              </div>
            </div>
          </div>
          <div class="form-group input-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword3"
              placeholder="Re-enter password"
            />
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="flaticon-password"></i>
              </div>
            </div>
          </div>
          <div class="form-group ui_kit_select_search mb0">
            <select
              class="selectpicker"
              data-live-search="true"
              data-width="100%"
            >
              <option data-tokens="SelectRole">Single User</option>
              <option data-tokens="Agent/Agency">Agent</option>
              <option data-tokens="SingleUser">Multi User</option>
            </select>
          </div>
          <div class="form-group custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="exampleCheck2"
            />
            <label class="custom-control-label" for="exampleCheck2"
              >I have read and accept the Terms and Privacy Policy?</label
            >
          </div>
          <button type="submit" class="btn btn-log btn-block btn-thm">
            Sign Up
          </button>
          <p class="text-center">
            Already have an account? <a class="text-thm" href="#">Log In</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
