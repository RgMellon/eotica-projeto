export default {

  getPesquisa(state){
    return state.pesquisa;
  },

  buscaTarefas: state => termo => {
    if(termo){
      let exp = new RegExp(termo, 'i');
      return state.materias.filter(res => exp.test(res.titulo))
    }else{
      return state.materias;
    }
  }
}
