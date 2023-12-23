// router.js
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from './components/home/MainPage.vue'
import AboutUs from './components/about/AboutUs.vue'
import ExploraViviendas from './components/explora/ExploraViviendas.vue'
import AppServices from './components/services/AppServices.vue'
import ContactUs from './components/contact/ContactUs.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/identidad', component: AboutUs },
  { path: '/services', component: AppServices },
  { path: '/explora', component: ExploraViviendas },
  { path: '/contacto', component: ContactUs }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router