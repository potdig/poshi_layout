import config from '../config.json'
import Game from './game'
import { store } from './store'

const getCommandPrefix = 'get'
const currentTime = 'currenttime'
const game = 'Game'
const currentTimerPhase = 'currenttimerphase'
const splits = 'splits'

export default {
  init() {
    const liveSplitServerEndpoint = config['liveSplitServerEndpoint']
    const socket = new WebSocket(liveSplitServerEndpoint)

    const watch = function(param, interval) {
      socket.send(`${getCommandPrefix}${param}`)
      setTimeout(() => watch(param, interval), interval)
    }

    socket.addEventListener('open', () => {
      console.log('Connected to LiveSplit Server successfully.')

      // 現在のタイム
      //        欲しい！
      watch(currentTime, 10)
      watch(currentTimerPhase, 10)
      watch(game, 100)
      watch(splits, 100)
    })

    socket.addEventListener('message', (event) => {
      const response = JSON.parse(event.data)
      switch (response.name) {
        case getCommandPrefix + currentTime:
          store.commit('updateTime', response.data)
          break
        case getCommandPrefix + game:
          store.commit('updateGame', new Game(response.data))
          break
        case getCommandPrefix + currentTimerPhase:
          store.commit('updatePhase', response.data)
          break
        case getCommandPrefix + splits:
          store.commit('updateSplits', response.data)
          break
        default:
          console.log(`unknown command: ${response.name}`)
      }
    })

    socket.addEventListener('error', (err) => console.log(err))
  }
}
