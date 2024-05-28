import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './scss/styles.scss'
import App from './App.vue'
import Home from './views/Home.vue'
import User from './views/User.vue' 

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user/:id/:page',
    name: 'User',
    component: User

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App).use(router).mount('#app')