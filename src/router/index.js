import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue'),
      meta: {
        authIsRequired: true
      }
    },
    {
      path: '/products/:id',
      name: 'product',
      component: () => import('../views/ProductPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

const isAuthenticated = () => !!localStorage.getItem('token')

router.beforeEach(async (to) => {
  if (!isAuthenticated() && to.meta.authIsRequired && to.name !== 'login') {
    return {
      name: 'login'
    }
  }
})

export default router
