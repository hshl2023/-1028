import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/DefaultLayout.vue'),
      children: [
        {
          path: '',
          redirect: '/students'
        },
        {
          path: '/students',
          component: () => import('../views/students/index.vue')
        },
        {
          path: '/teachers',
          component: () => import('../views/teachers/index.vue')
        },
        {
          path: '/courses',
          component: () => import('../views/courses/index.vue')
        }
      ]
    }
  ]
})

export default router