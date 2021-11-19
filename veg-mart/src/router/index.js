import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Cart from '../components/Cart.vue'

import Otp from '../components/Otp.vue'
import Register from '../components/Register.vue'
import Sign from '../components/Sign.vue'
import Profile from '../components/Profile.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
 
  {
    path: '/login',
    name: 'Otp',
    component: Otp
  },
  {
    path: '/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
