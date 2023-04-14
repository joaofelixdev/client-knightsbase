import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DetailsView from '../views/DetailsView.vue';
import CreateKnightView from '../views/CreateKnightView.vue';

const routes = [{
  path: '/',
  name: 'home',
  component: HomeView,
},
{
  path: '/knights/create',
  name: 'Create',
  component: CreateKnightView,
},
{
  path: '/knights/:id',
  name: 'Details',
  component: DetailsView,
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
