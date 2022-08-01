import {createRouter, createWebHistory} from "vue-router";
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to,from,next) => {
  if (store.state.user.token && (to.name === 'Login' || to.name === 'Register')){
    next({name: 'Home'});
  } else {
    next()
  }
})

export default router;
