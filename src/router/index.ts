import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ComponentDetail from '../views/ComponentDetail.vue'
import CategoryView from '../views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/category/:category',
      name: 'category',
      component: CategoryView,
      props: true
    },
    {
      path: '/component/:id',
      name: 'component',
      component: ComponentDetail,
      props: true
    }
  ]
})

export default router