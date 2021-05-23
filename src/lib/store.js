import { createStore } from 'vuex'

export const store = createStore({
  state() {
    return {
      time: 0
    }
  },
  mutations: {
    updateTime(state, time) {
      state.time = time
    }
  },
  getters: {
    time(state) {
      return state.time
    }
  }
})