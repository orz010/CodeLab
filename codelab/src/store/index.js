import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchValue:'',
    selectValue:'',
  },
  getters: {
    getSearchValue(state){
      return state.searchValue;
    },
    getSelectValue(state){
      return state.selectValue;
    }
  },
  mutations: {
    setSearchValue(state, value){
      state.searchValue=value;
    },
    setSelectValue(state, value){
      state.selectValue=value;
    },
  },
  actions: {
  },
  modules: {
  }
})
