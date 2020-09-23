import Vue from 'vue'
import Vuex from 'vuex'
import getDataFb from './modules/get-data-firebase'
import Auth from './modules/auth' 
import postAndCategory from './modules/post-and-category'
import messages from '@/utils/messages'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    getDataFb,
    Auth,
    postAndCategory
  },
  actions: {
    dataError({commit}, data) {
      commit('setError', data);
    },
    Massage({commit}, data) {
      commit('setMassage', data);
    }
  },
  mutations: {
    setError(state, fbError) {

      state.error = messages[fbError.code] || 'Что то пошло не так. ';

      console.log(fbError)
      setTimeout(() => { state.error = ''}, 3000)
    },
    clearError(state) {
      state.error = '';
    },
    setMassage(state, data) {
      
      state.massage = data;

      setTimeout(() => {state.massage = ''}, 3000);
    }
  },
  state: {
    error: '',
    massage: ''
  },
  getters: {
      error: s => s.error,
      Massage: s => s.massage
  },
})
