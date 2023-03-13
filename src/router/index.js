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

const canUserAccess = (to) => {
  if (!isAuthenticated() && to.meta.authIsRequired && to.name !== 'Login') {
    return false
  }

  return true
}

router.beforeEach(async (to) => {
  const canAccess = await canUserAccess(to)

  if (isAuthenticated() && to.name === 'Login') {
    return {
      name: 'Home'
    }
  }

  if (!canAccess) {
    return {
      name: 'Login'
    }
  }
})

export default router
