const route = "vendors";

export default {
    methods: {
      vendorApi_getAll(params = {}) {
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
      vendorApi_getOne(params = {}) {
        return axios({
            method: "get",
            url: process.env.MIX_API_ENDPOINT + `/${route}/get-one`,
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
      vendorApi_getForFilter(params = {}) {
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
      vendorApi_uploadVendorComplete() {
        return axios
          .post(process.env.MIX_API_ENDPOINT + `/${route}/handle-upload-vendor`, this.formData, {
            headers: { Authorization: `Bearer ${this.authorizationToken}` },
          })
          .then(({ data }) => {
            return data;
          })
          .catch((error) => {
            this.globalFunction_handleAxiosError(error, true);
            return error;
          });
      },
      vendorApi_delete(id) {
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
      vendorApi_create(form_data = {}) {
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
      vendorApi_update(id, form_data = {}) {
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
      }
    }
}