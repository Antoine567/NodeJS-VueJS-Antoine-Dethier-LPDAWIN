import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateFilm from './components/CreateFilm.vue';
import Films from './components/Films.vue';
import EditFilm from './components/EditFilm.vue';

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);


const routes = [
  {
        name: 'CreateFilm',
        path: '/create/film',
        component: CreateFilm
    },
    {
          name: 'Films',
          path: '/',
          component: Films
      },
      {
            name: 'EditFilm',
            path: '/edit/:id',
            component: EditFilm
        }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
