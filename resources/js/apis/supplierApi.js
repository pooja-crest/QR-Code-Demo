const route = "suppliers";

export default {
  methods: {
    getAllSuppliers(params = {}) {
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
  }
};
