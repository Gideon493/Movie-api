import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import movies from '../views/movies.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  
  {
    path:'/movie/:id',
    name:'movies',
    component:movies
  },
  

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
