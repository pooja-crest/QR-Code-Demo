const route = "products";

export default {
  methods: {
    create(form_data = {}) {
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
    create(form_data = {}) {
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
    update(id,form_data = {}) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}/`+ id,
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
    delete(id,form_data = {}) {
      return axios({
        method: "delete",
        url: process.env.MIX_API_ENDPOINT + `/${route}/`+ id,
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
    getAll(params = {}) {
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
    generateQRCodes(form_data = {}) {
      return axios({
        method: "post",
        url: process.env.MIX_API_ENDPOINT + `/${route}`+`/generate-qr-code`,
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
    getNewLabel(params = {}) {
      return axios({
        method: "get",
        url: process.env.MIX_API_ENDPOINT + `/${route}`+`/get-new-label`,
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
  }
};
