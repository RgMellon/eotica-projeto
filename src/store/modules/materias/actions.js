export default {

  pesquisa(context, value){
   context.commit('PESQUISA_MATERIA', value)
  },

  estrela(context, value) {
    context.commit('DAR_ESTRELA', value);
  }
}
