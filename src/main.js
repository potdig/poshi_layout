import { createApp } from 'vue'
import { store } from './lib/store'
import './index.css'
import App from './App.vue'
import liveSplit from './lib/live-split'

liveSplit.init()

createApp(App)
  .use(store)
  .mount('#app')
