import { createStore } from 'vuex'

export default createStore({
  state: {
    picAdress:""
  },
  getters: {
  },
  mutations: {
    changePicAdress(state, picAdress) {
      state.picAdress = picAdress
    }
  },
  actions: {
  },
  modules: {
  }
})
