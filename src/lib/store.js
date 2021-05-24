import { createStore } from 'vuex'
import { Duration } from 'luxon'
import Timer from './timer'
import Game from './game'

export const store = createStore({
  state() {
    return {
      time: 0,
      personalBest: -1,
      phase: 'NotRunning',
      game: new Game()
    }
  },
  mutations: {
    updateTime(state, time) {
      state.time = time
    },
    updateGame(state, game) {
      state.game = game
    },
    updatePhase(state, phase) {
      state.phase = phase
    },
    updatePersonalBest(state, personalBest) {
      state.personalBest = personalBest
    }
  },
  getters: {
    timer(state) {
      return new Timer(
        Duration.fromMillis(state.time)
          .shiftTo('hours', 'minutes', 'seconds', 'milliseconds'),
        state.phase
      )
    },
    game(state) {
      return state.game
    }
  }
})