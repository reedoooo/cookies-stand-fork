import { createStore } from 'vuex'
import StoreLocation from '../models/store-location'

const store = createStore({
  state() {
    return {
      allStoreLocations: []
    }
  },
  mutations: {
    addStore(state, payload) {
      state.allStoreLocations.push(payload)
    },
  },
  actions: {
    createStore({ commit }, payload) {
      let newStoreInput = new StoreLocation(payload)
      commit('addStore', newStoreInput)
    },
  },
  modules: {
  }
})

export default store
