import store from "./store";

const getters = {
    profilePicture: state => {
        return state.activeUser.profile_picture
    },
    formattedBankForSelect: state => {
        var formatted_banks = state.variables.banks.map(
            function (bank) {
                return {
                    value: bank.id,
                    text: bank.name
                };
            }
        );
        return formatted_banks;
    },
    formattedCategoryForSelect: state => {
        var formatted_datas = state.variables.categories.map(
            function (data) {
                return {
                    value: data.id,
                    text: data.name
                };
            }
        );
        return formatted_datas;
    },
    authorizationToken() {
        if (localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME) !== null) {
            return JSON.parse(localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME)).token.access_token;
        }
        return "";
    },
    tooltips: (state) => {
        if(!state.tooltips) {
            store.dispatch('fetchTooltips')
        }
        return state.tooltips
    }
}

export default getters
