import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "mainLayout" */ '@/layouts/MainLayout.vue'),
    redirect: '/top',
    children: [
      {
        path: '/:type',
        name: 'News',
        component: () => import(/* webpackChunkName: "News" */ '@/views/News.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
