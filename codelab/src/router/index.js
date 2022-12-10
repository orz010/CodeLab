import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/list',
    name: 'programlist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramListView.vue')
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  },
  {
    path: '/IssueList',
    name: 'IssueList',
    component: () => import(/* webpackChunkName: "about" */'../views/IssueListView.vue')
  },
  {
    path: '/PrList',
    name: 'PrList',
    component: () => import(/* webpackChunkName: "about" */'../views/PrListView.vue')
  },
  {
    path: '/Issue',
    name: 'Issue',
    component: () => import(/* webpackChunkName: "about" */'../views/IssueView.vue')
  },
  {
    path: "/Pr",
    component: () => import(/* webpackChunkName: "about" */'../views/PrView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
