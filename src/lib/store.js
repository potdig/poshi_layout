import { createStore } from 'vuex'
import { Duration } from 'luxon'
import Game from './game'

export const store = createStore({
  state() {
    return {
      time: 0,
      game: new Game()
    }
  },
  mutations: {
    updateTime(state, time) {
      state.time = time
    },
    updateGame(state, game) {
      state.game = game
    }
  },
  getters: {
    time(state) {
      return Duration.fromMillis(state.time)
        .shiftTo('hours', 'minutes', 'seconds', 'milliseconds')
    },
    game(state) {
      return state.game
    }
  }
})