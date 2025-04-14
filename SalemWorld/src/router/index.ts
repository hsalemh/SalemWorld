import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutMe from '../views/AboutMe.vue';
import MyGoals from '../views/MyGoals.vue';
import MyWork from '../views/MyWork.vue';
import MyProjects from '../views/MyProjects.vue';
import Contact from '../views/Contact.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about-me',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/my-goals',
    name: 'MyGoals',
    component: MyGoals,
  },
  {
    path: '/my-work',
    name: 'MyWork',
    component: MyWork,
  },
  {
    path: '/my-projects',
    name: 'MyProjects',
    component: MyProjects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;