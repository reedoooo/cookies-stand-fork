import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SalesPage from '../views/SalesPage.vue'
import ContactPage from '../views/ContactPage.vue'
import AboutPage from '../views/AboutPage.vue' // make sure to import the AboutPage component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/sales',
    name: 'Sales',
    component: SalesPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/about', // adding '/about' route here
    name: 'About',
    component: AboutPage // link it to your AboutPage component
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
