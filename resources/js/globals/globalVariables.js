import Vue from "vue";

Vue.mixin({
    data() {
        return {
            closeAllDropdown: false,
            Conditions: {
                user_updated_at: "none",
            },
            Groups: ["income", "expense"],
            Months: [
                {
                    id: "01",
                    index: 0,
                    name: "Jan",
                    full_name: "January",
                    quarter: "Q1",
                },
                {
                    id: "02",
                    index: 1,
                    name: "Feb",
                    full_name: "February",
                    quarter: "Q1",
                },
                {
                    id: "03",
                    index: 2,
                    name: "Mar",
                    full_name: "March",
                    quarter: "Q1",
                },
                {
                    id: "04",
                    index: 3,
                    name: "Apr",
                    full_name: "April",
                    quarter: "Q2",
                },
                {
                    id: "05",
                    index: 4,
                    name: "May",
                    full_name: "May",
                    quarter: "Q2",
                },
                {
                    id: "06",
                    index: 5,
                    name: "Jun",
                    full_name: "June",
                    quarter: "Q2",
                },
                {
                    id: "07",
                    index: 6,
                    name: "Jul",
                    full_name: "July",
                    quarter: "Q3",
                },
                {
                    id: "08",
                    index: 7,
                    name: "Aug",
                    full_name: "August",
                    quarter: "Q3",
                },
                {
                    id: "09",
                    index: 8,
                    name: "Sep",
                    full_name: "September",
                    quarter: "Q3",
                },
                {
                    id: "10",
                    index: 9,
                    name: "Oct",
                    full_name: "October",
                    quarter: "Q4",
                },
                {
                    id: "11",
                    index: 10,
                    name: "Nov",
                    full_name: "Nov",
                    quarter: "Q4",
                },
                {
                    id: "12",
                    index: 11,
                    name: "Dec",
                    full_name: "December",
                    quarter: "Q4",
                },
            ],
        };
    },
    computed: {
        authorizationToken() {
            if (localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME) !== null) {
                return JSON.parse(localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME)).token.access_token;
            }
            return "";
        },
        authenticatedUser() {
            if (!jQuery.isEmptyObject(this.$store.state.activeUser)) {
                return this.$store.state.activeUser;
            }

            const user = JSON.parse(localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME));
            this.$store.commit("UPDATE_USER_INFO", user);
            return user;
        },
        Summaries() {
            if (Object.keys(this.$store.state.summaries).length > 0) {
                return this.$store.state.summaries;
            }
            return false;
        },
        userSettings() {
            if (localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME) !== null) {
                return JSON.parse(localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME)).settings;
            }
            return false;
        },
        Variables() {
            if (Object.keys(this.$store.state.variables).length > 0) {
                return this.$store.state.variables;
            }
            return false;
        },
    },
});
