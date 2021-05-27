import { createRouter, createWebHistory } from 'vue-router'
import SideBar from './components/SideBar.vue'

const routes = [
  { path: '/', component: SideBar },
  { path: '/casual', component: SideBar },
  { path: '/transparent', component: SideBar },
  { path: '/casual_transparent', component: SideBar }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
