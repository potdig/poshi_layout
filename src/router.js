import { createRouter, createWebHistory } from 'vue-router'
import SideBar from './components/SideBar.vue'

const routes = [
  { path: '/', component: SideBar },
  { path: '/casual', component: SideBar, props: { casual: true } },
  { path: '/transparent', component: SideBar, props: { transparent: true } },
  { path: '/casual_transparent', component: SideBar, props: { casual: true, transparent: true } }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
