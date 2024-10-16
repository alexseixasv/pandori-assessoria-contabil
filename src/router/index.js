import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import QuemSomos from '../views/QuemSomos.vue';
import Servicos from '../views/Servicos.vue';
import Especialidades from '../views/Especialidades.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/quem-somos', component: QuemSomos },
  { path: '/servicos', component: Servicos },
  { path: '/Especialidades', component: Especialidades }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;