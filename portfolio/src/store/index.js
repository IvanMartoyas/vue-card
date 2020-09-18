import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth' 
import getDataFb from './modules/get-data-firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Auth,
    getDataFb
  },
  actions: {
    dataError({commit}, data) {
      commit('setError', data);
    }
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  state: {
    error: null,
  },
  getters: {
      error: s => s.error
  },
})
