import Vue from 'vue'
import App from './App.vue'
import './assets/css/reset.css';
import './assets/css/style.css';
import 'vue-awesome/icons';
import store from './store/root';
import {VueMasonryPlugin} from 'vue-masonry';
import VueMasonry from 'vue-masonry-css'
Vue.use(VueMasonry);


Vue.use(VueMasonryPlugin)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
