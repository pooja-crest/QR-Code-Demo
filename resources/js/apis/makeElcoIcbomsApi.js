const route = "elco-makes";

export default {
  methods: {
    makeElcoIcbomsApi_getOne(item_id) {
      return axios({
        method: "get",
        url: process.env.MIX_API_ENDPOINT + `/${route}/item/${item_id}`,
        headers: {
          Authorization: `Bearer ${this.authorizationToken}`,
        }
      })
        .then(({ data }) => {
          return data;
        })
        .catch((error) => {
          this.globalFunction_handleAxiosError(error);
          return error;
        });
    },
  },
};
