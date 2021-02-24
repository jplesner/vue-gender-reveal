import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.prototype.$isBoy = false;
Vue.prototype.$parentName1 = 'Jane';
Vue.prototype.$parentName2 = 'John';
Vue.prototype.$familyName = 'Doe';
Vue.prototype.$dueDate = 'Due April 2021';

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
