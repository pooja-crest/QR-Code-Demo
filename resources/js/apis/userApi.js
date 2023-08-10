const route = "users";

export default {
  methods: {
    userApi_getAll(params = {}) {
      return axios({
        method: "get",
        url: process.env.MIX_API_ENDPOINT + `/${route}`,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
        params: params,
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
    userApi_getByCode(code) {
      return axios({
        method: "get",
        url: process.env.MIX_API_ENDPOINT + `/${route}/` + code + "/get-by-code",
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
    userApi_getForFilter(params = {}) {
      return axios({
        method: "get",
        url: process.env.MIX_API_ENDPOINT + `/${route}/get-for-filter`,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
        params: params,
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
    userApi_create(form_data = {}) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}`,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
        data: form_data,
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
    userApi_update(id, form_data = {}) {
      return axios({
        method: "patch",
        url: process.env.MIX_API_ENDPOINT + `/${route}/` + id,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
        data: form_data,
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
    userApi_updatePassword(id, form_data = {}) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/${id}/update-password`,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
        data: form_data,
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
    userApi_delete(id) {
      return axios({
        method: "delete",
        url: process.env.MIX_API_ENDPOINT + `/${route}/` + id,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        },
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
    userApi_handleUpload() {
      return axios
        .post(process.env.MIX_API_ENDPOINT + `/${route}/handle-upload`, this.formData, {
          headers: {
            Authorization: `Bearer ${this.authorizationToken}`,
          },
        })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error, true);
          return error;
        });
    },
  },
};
