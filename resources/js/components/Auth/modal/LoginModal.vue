<template>
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
        class="button border"
        name="login"
        value="Login"
        style="width: 100%"
      />
    </p>

    <p class="lost_password text-center">
      <a href="#">Forgot Your Password?</a>
    </p>
  </form>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>
