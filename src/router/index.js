import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    // redirect: '/Ru',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/ourSox',
    name: 'OurSox',
    component: () => import('../views/OurSox.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/sale',
    name: 'sale',
    component: () => import('../views/Sale.vue')
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../views/Basket.vue')
  },
  {
    path: '/Checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),

  routes
})

export default router
