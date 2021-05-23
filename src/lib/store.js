import { createStore } from 'vuex'
import { Duration } from 'luxon'

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
      return Duration.fromMillis(state.time)
        .shiftTo('hours', 'minutes', 'seconds', 'milliseconds')
    }
  }
})