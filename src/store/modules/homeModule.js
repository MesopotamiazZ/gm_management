import api from '@/api'
// console.log('api', api)

const state = {
  homeTableData: []
}

const mutations = {
  getHomeTableData (state, payload) {
    state.homeTableData = payload
  }
}

const actions = {
  async getHomeTableData ({ commit }) {
    let result = await api.homeData.getHomeTableData()
    commit('getHomeTableData', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
