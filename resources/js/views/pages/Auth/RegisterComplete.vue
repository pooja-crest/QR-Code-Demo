<template>
  <div class="auth-main--container">
    <div class="auth-input--container mb-10 flex justify-center" style="margin-top:0px">
      <img src="@assets/icons/check.png" alt height="200" />
    </div>
    <div class="auth-header--container text-center">
      <div class="auth-title">
        <span class="auth-title--text">Registration Complete</span>
      </div>
      <div class="auth-subtitle mt-4">
        <span class="auth-subtitle--text">
          We’ll email your login details within 3 business days.
        </span>
      </div>
    </div>

    <div class="auth-footer--container">
      <button @click="$router.push('/')" class="btn btn-primary btn-flat w-full" tabindex="3" style="height:50px;">
        <span class="btn--text text-left w-full" style="text-align:left">&#8592; Back to Home</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterComplete",
};
</script>
