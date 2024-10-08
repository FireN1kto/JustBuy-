import { createRouter, createWebHistory } from 'vue-router'
import Catalog from "@/views/Catalog.vue";
import CompletedOrders from "@/views/CompletedOrders.vue";
import Basket from "@/views/Basket.vue";
import Login from "@/views/Login.vue";
import Registration from "@/views/Registration.vue";
import LogOut from "@/views/LogOut.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog,
    },
    {
      path: '/',
      name: 'CompletedOrders',
      component: CompletedOrders,
    },
    {
      path: '/',
      name: 'Basket',
      component: Basket,
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Registration',
      component: Registration
    },
    {
      path: '/',
      name: 'LogOut',
      component: LogOut,
    },
  ]
})

export default router
