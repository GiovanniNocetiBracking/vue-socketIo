import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // Puedes agregar más rutas aquí
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
