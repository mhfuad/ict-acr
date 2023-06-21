import { createRouter, createWebHistory } from "vue-router";
import dashboard from "./modules/dashboard/dashboard";
import Login from "./modules/auth/login";
import ACR from "./modules/acr/acr";

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
    ACR,
  ],
});

export default router;
