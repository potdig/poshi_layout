import { createRouter, createWebHistory } from 'vue-router'
import SideBar from './components/SideBar.vue'

const routes = [
  {
    path: '/',
    component: SideBar,
    props: ({ query }) => ({
        casual: Boolean(query.casual),
        transparent: Boolean(query.transparent),
        small: Boolean(query.small)
    })
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
