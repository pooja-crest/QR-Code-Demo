import axios from "axios";

const actions = {
  updateUserInfo({ commit }, payload) {
    commit('UPDATE_USER_INFO', payload)
  },
  updateVariables({ commit }, payload) {
    commit('UPDATE_VARIABLES', payload)
  },
  updateToolip({ commit, getters }, { alias, message }) {
    axios.post(process.env.MIX_API_ENDPOINT + `/tooltip/${alias}`, { message }, {
      headers: {
        Authorization: `Bearer ${getters.authorizationToken}`
      }
    })
    commit('UPDATE_TOOLTIP', { alias, message })
  },
  async fetchTooltips({ commit, getters }) {
    const {data} = await axios.get(process.env.MIX_API_ENDPOINT + `/tooltip`, {
      headers: {
        Authorization: `Bearer ${getters.authorizationToken}`
      }
    })
    commit('SET_TOOLTIP', data)
  }
}

export default actions
