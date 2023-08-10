import axios from "axios";

const mutations = {
    UPDATE_USER_INFO(state, payload) {
        if (!payload) return;
        let userInfo = JSON.parse(localStorage.getItem(process.env.MIX_USER_SESSION_VARIABLE_NAME)) || state.activeUser;
        for (const property of Object.keys(payload)) {
            if (payload[property] != null) {
                state.activeUser[property] = payload[property];
                userInfo[property] = payload[property];
            }
        }
        localStorage.setItem(process.env.MIX_USER_SESSION_VARIABLE_NAME, JSON.stringify(userInfo));
    },
    UPDATE_SUMMARIES(state, payload) {
        let summaries = state.summaries;
        for (const property of Object.keys(payload)) {
            if (payload[property] != null) {
                state.summaries[property] = payload[property];
                summaries[property] = payload[property];
            }
        }
    },
    UPDATE_VARIABLES(state, payload) {
        // let variables = JSON.parse(localStorage.getItem("rekkuVariables")) || state.variables
        let variables = state.variables;
        for (const property of Object.keys(payload)) {
            if (payload[property] != null) {
                state.variables[property] = payload[property];
                variables[property] = payload[property];
            }
        }
        // localStorage.setItem("rekkuVariables", JSON.stringify(variables))
    },
    UPDATE_TOOLTIP(state, {alias, message}) {
        state.tooltips[alias] = message;
    },
    SET_TOOLTIP(state, {data}) {
        state.tooltips = data;
    }
};

export default mutations;
