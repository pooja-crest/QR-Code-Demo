<template>
  <div class="auth--container" :class="[$route.name]">
    <div class="auth-logo--container">
      <img src="@assets/images/logo/elco_logo.png" alt height="40" />
    </div>
    <div class="auth-content--container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
};
</script>

<style lang="scss">
.auth--container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 420px;
  margin-left: auto;
  margin-right: auto;
  &.register {
    width: 840px;
  }
  &.register-complete {
    width: 500px;
  }
  .auth-logo--container {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .auth-content--container {
    background: white;
    /*min-height:466px;*/
    width: 100%;
    .auth-main--container {
      padding: 50px;
      .auth-header--container {
        .auth-title {
          .auth-title--text {
            font-size: 28px;
            line-height: 32px;
            font-weight: 300;
          }
        }
        .auth-subtitle {
          .auth-subtitle--text {
            color: #8097b1;
            line-height: 22px;
          }
        }
      }
      .auth-input--container {
        margin-top: 45px;
      }
      .auth-footer--container {
        margin-top: 25px;
      }
    }
  }
}
</style>
