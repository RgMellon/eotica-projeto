import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css';
import './assets/css/style.css';
import 'vue-awesome/icons';
import store from './store/root';

import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry);



new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
