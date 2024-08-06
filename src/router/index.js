import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import StartFormView from '../views/StartFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: FormView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StartFormView.vue')
    }
  ]
})

export default router
