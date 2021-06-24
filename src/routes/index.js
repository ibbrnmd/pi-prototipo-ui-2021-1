// import VueRouter from 'vue-router'
// import Vue from 'vue'
import { createWebHistory, createRouter } from "vue-router"



// Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'signup',
    component: () => import('../components/Signup.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import ('../components/Profile.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router;