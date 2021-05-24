import { createStore } from 'vuex'
import { Duration } from 'luxon'
import Timer from './timer'
import Game from './game'

export const store = createStore({
  state() {
    return {
      time: 0,
      splits: [],
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
    updateSplits(state, splits) {
      state.splits = splits 
    }
  },
  getters: {
    timer(state) {
      const personalBest = state.splits.length ?
        state.splits.slice(-1)[0].personalBestSplitTime :
        -1
      return new Timer(
        Duration.fromMillis(state.time)
          .shiftTo('hours', 'minutes', 'seconds', 'milliseconds'),
        state.phase,
        Duration.fromMillis(personalBest)
          .shiftTo('hours', 'minutes', 'seconds', 'milliseconds')
      )
    },
    game(state) {
      return state.game
    }
  }
})