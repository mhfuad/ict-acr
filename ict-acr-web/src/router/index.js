import { createRouter, createWebHistory } from 'vue-router'
import dashboard from './modules/dashboard/index'
import Login from "./modules/auth/login";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: dashboard
    // },
    dashboard,
    Login,
    
  ]
})

export default router
