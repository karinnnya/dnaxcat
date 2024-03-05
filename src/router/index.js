import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import NewsView from '../views/NewsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass:'text-sky-700 text-lg fill-yellow-700 ',

  scrollBehavior(to) {
    if (
      to.fullPath.match('/') ||
      to.fullPath.match('news') ||
      to.fullPath.match('roles') ||
      to.fullPath.match('about')
    ) {
      return {
        top: 0
      }
    }
    return {}
  },
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),

      children: [
        {
          path: '',
          component: HomeView
        },
        {
          path: '/text',
          component: () => import('../views/TextView.vue')
        },
        {
          path: '/about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: '/news',
          // component: () => import('../views/NewsView.vue'),
          component: NewsView
        },
       
        {
          path: '/area',
          component: () => import('../views/roles/AreaView.vue')
        },
        {
          path: '/roles',
          component: () => import('../views/roles/RolesView.vue')
        },
     
      
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../views/NotFoundView.vue')
        }
      ]
    }
  ]
  // routes: [
  //   {
  //     path: '/',
  //     component: HomeView,
  //     // meta: { reload: true }
  //   },
  //   {
  //     path: '/text',
  //     component: () => import('../views/TextView.vue')
  //   },
  //   {
  //     path: '/about',
  //     component: () => import('../views/AboutView.vue')
  //   },
  //   {
  //     path: '/news',
  //     // component: () => import('../views/NewsView.vue'),
  //     component: NewsView,

  //   },
  //   {
  //     path: '/animation',
  //     component: () => import('../views/AnimationView.vue')
  //   },
  //   {
  //     path: '/area',
  //     component: () => import('../views/roles/AreaView.vue')
  //     // children:[
  //     //   {
  //     //     path:'roles',
  //     //     component: () => import('../views/roles/RolesView.vue'),
  //     //     // children:[
  //     //     //   {
  //     //     //     path:'role',
  //     //     //     component: () => import('../views/roles/roleView.vue')
  //     //     //   }
  //     //     // ]

  //     //   },
  //     //   {
  //     //     path:'roles/role',
  //     //     component: () => import('../views/roles/RoleView.vue')
  //     //   }
  //     // ],
  //   },
  //   {
  //     path: '/roles',
  //     component: () => import('../views/roles/RolesView.vue')

  //     // children:[
  //     //   {
  //     //     path:'role',
  //     //     component: () => import('../views/roles/roleView.vue')
  //     //   }
  //     // ]
  //   },
  //   {
  //     path: '/roles/role',
  //     component: () => import('../views/roles/RoleView.vue')
  //   },
  //   {
  //     path: '/:pathMatch(.*)*',
  //     component: () => import('../views/NotFoundView.vue')
  //   },
  //   // {
  //   //   path: '/:pathMatch(.*)*',
  //   //   redirect:{
  //   //     path: '/',
  //   //   }
  //   // },
  // ]
})

export default router
