import config from '../config.json'
import { store } from './store'

export default {
  init() {
    const liveSplitServerEndpoint = config['liveSplitServerEndpoint']
    const socket = new WebSocket(liveSplitServerEndpoint)

    function callGetCurrentTime() {
      socket.send('getcurrenttime')
      setTimeout(callGetCurrentTime, 10)
    }

    socket.addEventListener('open', () => {
      console.log('Connected to LiveSplit Server successfully.')

      // 現在のタイム
      //        欲しい！
      setTimeout(callGetCurrentTime, 10)
    })

    socket.addEventListener('message', (event) => {
      const response = JSON.parse(event.data)
      store.commit('updateTime', response.data)
    })

    socket.addEventListener('error', (err) => console.log(err))
  }
}
