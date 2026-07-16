import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfilView from '../views/ProfilView.vue'
import FakultasView from '../views/FakultasView.vue'
import AkreditasiView from '../views/AkreditasiView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profil',
    name: 'profil',
    component: ProfilView
  },
  {
    path: '/fakultas',
    name: 'fakultas',
    component: FakultasView
  },
  {
    path: '/akreditasi',
    name: 'akreditasi',
    component: AkreditasiView
  },
  // Catch all route to redirect unrecognized client routes to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
