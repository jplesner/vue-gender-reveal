import Vue from 'vue';
import Router from 'vue-router';
import store from '../store';

import FormStepper from '../components/FormStepper';
import ResultPage from '../components/ResultPage';
import GuessesPage from '../components/GuessesPage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component:FormStepper,
  },
  {
    path: '/result',
    component: ResultPage,
    beforeEnter(to, from, next) {
      if (store.state.userChoice || localStorage.getItem('userChoice')) next()
      else next({ name: 'Home' })
    },
  },
  {
    path: '/guesses',
    component: GuessesPage
  }
],
});
