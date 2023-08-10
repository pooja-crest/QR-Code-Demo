const route = "auth";

export default {
  methods: {
    authenticationApi_login(data) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/login`,
        data: data,
      })
        .then(({ data }) => {
          this.$notify({
            group: "notification",
            type: "success",
            title: "Success",
            text: data.message,
          });
          return data;
        })
        .catch((error) => {
          if (typeof error.response === "undefined") {
            console.error(error);
          } else {
            this.$notify({
              group: "notification",
              type: "error",
              title: "Failed",
              text: error.response.data.message,
            });
          }
          return error;
        });
    },
    authenticationApi_register(data) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/register`,
        data: data,
      })
        .then(({ data }) => {
          this.$notify({
            group: "notification",
            type: "success",
            title: "Success",
            text: data.message,
          });
          return data;
        })
        .catch((error) => {
          if (typeof error.response === "undefined") {
            console.error(error);
            return error;
          } else {
            this.$notify({
              group: "notification",
              type: "error",
              title: "Failed",
              text: error.response.data.message,
            });
            return error.response.data.message;
          }
        });
    },
    authenticationApi_inactiveUserApproval(id, approval) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/${id}/inactive-user-approval`,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
        data: {
          approval: approval,
        },
      })
        .then(({ data }) => {
          this.$notify({
            group: "notification",
            type: "success",
            title: "Success",
            text: data.message,
          });
          return data;
        })
        .catch((error) => {
          if (typeof error.response === "undefined") {
            console.error(error);
            return error;
          } else {
            this.$notify({
              group: "notification",
              type: "error",
              title: "Failed",
              text: error.response.data.message,
            });
            return error.response.data.message;
          }
        });
    },
    authenticationApi_logout() {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/logout`,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
        // data: { token: token }
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          if (typeof error.response === "undefined") {
            console.error(error);
          } else {
            this.$notify({
              group: "notification",
              type: "error",
              title: "Failed",
              text: error.response.data.message,
            });
          }
          return error;
        });
    },
    authenticationApi_forgotPassword(data) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/forgot-password`,
        data: data,
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          if (typeof error.response === "undefined") {
            console.error(error);
          }
          return error;
        });
    },
    authenticationApi_resetPassword(data) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/reset-password`,
        data: data,
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          if (typeof error.response === "undefined") {
            console.error(error);
          }
          return error;
        });
    },
  },
};
