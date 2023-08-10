import Vue from "vue";
import { Printd } from "printd";

Vue.mixin({
  methods: {
    checkTokenValidity(data) {
      if (data !== null && typeof data.token !== "undefined") {
        if (data.token === false) {
          localStorage.removeItem(process.env.MIX_USER_SESSION_VARIABLE_NAME);
          this.$notify({
            group: "notification",
            type: "warn",
            title: "Token expired",
            text: "Your token is expired, please sign in again",
          });
          this.$router.push("/auth/login");
        }
      }
    },
    FormatDatetimeToTimeHistory(unformatted_datetime, use_ago = false) {
      var time_history = "just now";
      if (unformatted_datetime == null) {
        return time_history;
      }
      var datetime = new Date(unformatted_datetime);
      var seconds = Math.floor((new Date() - datetime) / 1000);
      var interval = seconds;
      if (seconds < 60) {
        return time_history;
      }

      interval = Math.floor(seconds / 60);
      if (interval >= 1) {
        time_history = interval + " minutes";
      }

      interval = Math.floor(seconds / 3600);
      if (interval >= 1) {
        time_history = interval + " hours";
      }

      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        time_history = interval + " days";
      }

      interval = Math.floor(seconds / 604800);
      if (interval >= 1) {
        time_history = interval + " weeks";
      }

      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        time_history = interval + " months";
      }

      interval = Math.floor(seconds / 31536000);
      if (interval >= 1) {
        time_history = interval + " years";
      }
      if (use_ago) {
        time_history += " ago";
      }
      return time_history;
    },
    globalFunction_calculateDataForPrint(data) {
      let calculatedData = [];
      let formatNumberToCurrency = true;
      if (this.conditions.filter_active == "items") {
        calculatedData.push(data.item_id);
        calculatedData.push(data.category_id);
        formatNumberToCurrency = false;
      } else {
        calculatedData.push(data.customer_name);
        calculatedData.push(data.customer_id);
      }
      for (const property in data.data) {
        var total = formatNumberToCurrency ? this.globalFunction_formatNumberToCurrency(data.data[property], "") : data.data[property];
        calculatedData.push(total);
      }
      return calculatedData;
    },
    globalFunction_formatDate(date) {
      var months = this.Months;
      var formatted_date = new Date(date);
      return months[formatted_date.getMonth()].name + " " + formatted_date.getDate() + ", " + formatted_date.getFullYear().toString();
    },
    globalFunction_formatDatetime(date) {
      var months = this.Months;
      var formatted_date = new Date(date);
      return (
        (months[formatted_date.getMonth()] ? months[formatted_date.getMonth()].name : "") +
        " " +
        formatted_date.getDate() +
        ", " +
        formatted_date.getFullYear() +
        " " +
        formatted_date.getHours() +
        ":" +
        formatted_date.getMinutes()
      );
    },
    globalFunction_formatNumberToCurrency(amount, currency = "$", allow_negative = true) {
      let amount_without_negative = amount;
      if (amount < 0) {
        amount_without_negative *= -1;
        if (allow_negative) {
          currency = "- " + currency;
        }
      }
      return currency + "" + new Intl.NumberFormat("en-us", {}).format(amount_without_negative);
    },
    globalFunction_handleAxiosError(error, notify = false) {
      if (typeof error.response === "undefined") {
        console.error(error);
      } else {
        this.checkTokenValidity(error.response.data.data);
        if (notify) {
          this.$notify({
            group: "notification",
            type: "error",
            title: "Failed",
            text: error.response.data.message,
          });
        }
      }
    },
    globalFunction_printData(data, printElementContainer) {
      return new Promise((resolve, reject) => {
        try {
          const p = new Printd();

          p.print(
            printElementContainer,
            `@media print {
                            @page {size: A4 landscape;}
                        }`
          );
          resolve(true);
        } catch (error) {
          reject(error);
        }
      });
    },
    ProcessSalesReports(sales_report_datas = [], period_type = "months") {
      var sales_reports = {
        periods: [],
        datas: [],
      };

      sales_report_datas.forEach((sales_report_data, sales_report_index) => {
        var period = "";
        var selected_month = this.Months.filter((month) => {
          return month.id == sales_report_data.month;
        })[0];
        switch (period_type) {
          case "yearly":
            period = sales_report_data.year;
            break;
          case "quarterly":
            period = selected_month.quarter + " " + sales_report_data.year;
            break;
          default:
            period = selected_month.name + " " + sales_report_data.year;
            break;
        }

        var period_index = sales_reports.periods.length - 1;

        var existing_periods = sales_reports.periods.filter((existing_period) => {
          return period === existing_period;
        });
        if (typeof existing_periods[0] === "undefined") {
          sales_reports.periods.push(period);
          period_index++;

          sales_reports.datas.forEach((s, index) => {
            sales_reports.datas[index].totals.push(0);
          });
        }

        var selected_sales_report = sales_reports.datas.filter((sales_report) => {
          return sales_report.customer_number == sales_report_data.customer_number;
        })[0];
        if (typeof selected_sales_report == "undefined") {
          selected_sales_report = {
            customer_number: sales_report_data.customer_number,
            customer_name: sales_report_data.customer_name,
            totals: [],
          };
          sales_reports.periods.forEach(() => {
            selected_sales_report.totals.push(0);
          });
          sales_reports.datas.push(selected_sales_report);
        }
        selected_sales_report.totals[period_index] += sales_report_data.total;

        var sales_report_index = sales_reports.datas
          .map(function(d) {
            return d.customer_number;
          })
          .indexOf(sales_report_data.customer_number);
        sales_reports.datas[sales_report_index] = selected_sales_report;
      });
      return sales_reports;
    },
    globalFunction_numberMaximiser(amount) {
      const labels = ["b", "m", "k"];
      if(!!amount){
        let lastChar = amount.charAt(amount.length-1).toLowerCase();
        var amountNumber = amount;
        if(labels.includes(lastChar)){
          amountNumber = amount.substring(0,(amount.length - 1));
          switch(lastChar) {
            case 'b':
              amountNumber = amountNumber * 1000000000;
              break;
            case 'm':
              amountNumber = amountNumber * 1000000;
              break;
          }
          return amountNumber;
        } else {
          return amountNumber;
        }
      }
    },
    globalFunction_numberMinimiser(amount) {
      var amountNumber = 0;
      if(!!amount){
        if (amount>1000000000) {
          amountNumber = Math.round(amount / 1000000000).toString();
          amountNumber = amountNumber + "B";
        } else if(amount<1000000000 && amount>1000000) {
          amountNumber = Math.round(amount / 1000000).toString();
          amountNumber = amountNumber + "M";
        } else {
          amountNumber = amount;
        }
      }
      return amountNumber;
    },
    globalFunction_convertInchFeet(inches){
			return (inches / 12).toFixed(2);
		}
  },
});
