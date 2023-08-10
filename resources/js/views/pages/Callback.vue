<template>
  <div class="flex w-full h-screen justify-center items-center">
    <div v-if="conditions.loadings.checking" class="loading-placeholder__doughnut" style="min-height:200px;min-width:200px;"></div>
    <div v-else>
      <span class="text-xl">{{ datas.message }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Callback",
  data() {
    return {
      conditions: {
        loadings: {
          checking: true,
        },
      },
      datas: {
        message: "",
      },
    };
  },
  methods: {
    resetPassword(parameters) {
      this.$router.push({
        path: "/auth/reset-password",
        query: {
          token: this.$route.query.token,
        },
      });
    },
  },
  created() {
    const parameters = {
      mode: this.$route.query.mode,
      token: this.$route.query.token,
    };
    switch (parameters.mode) {
      case "reset_password":
        this.resetPassword(parameters);
        break;
      default:
        this.conditions.loadings.checking = false;
        this.datas.message = "Parameter Invalid";
        break;
    }
  },
};
</script>
