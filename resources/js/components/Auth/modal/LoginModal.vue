<template>
  <div
    class="row mt25 tab-pane fade show active"
    id="home"
    role="tabpanel"
    aria-labelledby="home-tab"
  >
    <div class="col-lg-6 col-xl-6">
      <div class="login_thumb">
        <img
          class="img-fluid w100"
          src="images/resource/login.jpg"
          alt="login.jpg"
        />
      </div>
    </div>
    <div class="col-lg-6 col-xl-6">
      <div class="login_form">
        <form action="#">
          <div class="heading">
            <h4>Login</h4>
          </div>
          <div class="row mt25">
            <div class="col-lg-12">
              <button type="submit" class="btn btn-fb btn-block">
                <i class="fa fa-facebook float-left mt5"></i> Login with
                Facebook
              </button>
            </div>
            <div class="col-lg-12">
              <button type="submit" class="btn btn-googl btn-block">
                <i class="fa fa-google float-left mt5"></i> Login with Google
              </button>
            </div>
          </div>
          <hr />
          <div class="input-group mb-2 mr-sm-2">
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername2"
              placeholder="User Name Or Email"
            />
            <div class="input-group-prepend">
              <div class="input-group-text"><i class="flaticon-user"></i></div>
            </div>
          </div>
          <div class="input-group form-group">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
            <div class="input-group-prepend">
              <div class="input-group-text">
                <i class="flaticon-password"></i>
              </div>
            </div>
          </div>
          <div class="form-group custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="exampleCheck1"
            />
            <label class="custom-control-label" for="exampleCheck1"
              >Remember me</label
            >
            <a class="btn-fpswd float-right" href="#">Lost your password?</a>
          </div>
          <button type="submit" class="btn btn-log btn-block btn-thm">
            Log In
          </button>
          <p class="text-center">
            Don't have an account? <a class="text-thm" href="#">Register</a>
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
