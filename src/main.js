import { createApp } from 'vue'
import { store } from './lib/store'
import './index.css'
import App from './App.vue'
import timer from './lib/timer'

timer.init()

createApp(App)
  .use(store)
  .mount('#app')
