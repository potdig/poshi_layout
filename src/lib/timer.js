import config from '../config.json'
import Game from './game'
import { store } from './store'

export default {
  init() {
    const liveSplitServerEndpoint = config['liveSplitServerEndpoint']
    const socket = new WebSocket(liveSplitServerEndpoint)

    const getCurrentTimeCommand = 'getcurrenttime'
    const callGetCurrentTime = function () {
      socket.send(getCurrentTimeCommand)
      setTimeout(callGetCurrentTime, 10)
    }

    const getGameCommand = 'getGame'
    const callGetGame = function() {
      socket.send(getGameCommand)
      setTimeout(callGetGame, 100)
    }

    socket.addEventListener('open', () => {
      console.log('Connected to LiveSplit Server successfully.')

      // 現在のタイム
      //        欲しい！
      setTimeout(callGetCurrentTime, 10)
      setTimeout(callGetGame, 100)
    })

    socket.addEventListener('message', (event) => {
      const response = JSON.parse(event.data)
      switch (response.name) {
        case getCurrentTimeCommand:
          store.commit('updateTime', response.data)
          break
        case getGameCommand:
          store.commit('updateGame', new Game(response.data))
          break
        default:
          console.log(`unknown command: ${response.name}`)
      }
    })

    socket.addEventListener('error', (err) => console.log(err))
  }
}
