export default {
  methods: {
    formatDate(date) {
      var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      var formatted_date = new Date(date);
      return (
        months[formatted_date.getMonth()] +
        " " +
        formatted_date.getDate() +
        ", " +
        formatted_date
          .getFullYear()
          .toString()
          .substr(-2)
      );
    },
  },
};
