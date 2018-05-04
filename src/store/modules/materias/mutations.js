export default {

  PESQUISA_MATERIA(state, value) {
   state.pesquisa = value;
  },

  DAR_ESTRELA(state, value) {
   let user = value[1] + 1;
    
    let posicao = state.materias.findIndex((x) => {
      return  x.id == user;
    });
    
    if(posicao === -1){
        console.log(' n deu ')
        return;
    }else{
      state.materias[posicao].stars = value[0];
    }

  }
}
