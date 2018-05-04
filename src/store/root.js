import Vue from 'vue';
import Vuex from 'vuex';
import materias from './modules/materias/root';
Vue.use(Vuex);
import createPersistedState from 'vuex-persistedstate';

export default new Vuex.Store({
  modules: {materias},
  plugins: [createPersistedState()],
});
