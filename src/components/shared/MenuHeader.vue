<template>
  <div>
  <section class="menu-header container-flex space-between item-center">
      <div class="perfil-user container-flex">
        <img :src="require(`../../assets/images/j.jpg`)" alt="">
        <p> Welcome Jhon </p>
      </div>
      <div class="input-busca container-flex item-center" >
        <input type="search" v-model="pesquisa" @input="fazPesquisa">
        <icone scale="1.5" class="icone-search" name="search"></icone>
      </div>
      <div class="icone-menu">
        <icone class="icone-header" name="bars" scale="1.5"></icone>
      </div>
      <div class="logo">
        <img src="../../assets/images/logo.png" alt="">
      </div>
      <div class="icone-busca" @click="mostraInput()">
        <icone class="icone-header" name="search" scale="1.5"></icone>
      </div>
  </section>
    <div v-if="this.escondido" class="input-busca-respon">
      <input type="search" v-model="pesquisa" @input="fazPesquisa" placeholder="buscar...">
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon.vue';
  import { getData } from '../../service/getData';
  import { mapActions} from 'vuex';
  import { mapGetters } from 'vuex';

  export default {
    name: 'menu-header',
    components: {
      'icone' : Icon,
    },
    data(){
      return {
        pesquisa: '',
        escondido: false,  
      }
    },
    methods: {
      ...mapActions({
        search: 'pesquisa'
      }),
      fazPesquisa(){
        this.search(this.pesquisa);
      },
      mostraInput(){
        this.escondido = !this.escondido;
      }
    }
  }
</script>

<style scoped>
  .input-busca {
    display: none;
  }
  .input-busca-respon input{
    width: 90%;
    margin-left: 1rem;
    margin-right: 1rem;
    outline: none;
    border: 0;
    border-bottom: 1px solid #ccc;
    height: 50px;

  }
  .perfil-user {
    display: none;
  }
  .menu-header {
    padding: 1rem;
  }
  .icone-header {
    background: #f6f6f6;
    padding: 0.8rem;
    border-radius: 13%;
    color: #bababa;
    border: 1px solid;
  }
  .logo {
    width: 200px;
  }
  @media(min-width: 1200px){
    .icone-busca{
      display: none;
    }
    
    .menu-header {
      flex-direction: row-reverse;
    }
    .input-busca{
      display: flex;
      height: 30px;
    }
    input {
      width: 430px;
      outline: none;
      border: 1px solid #ccc;
      border-radius: 6%;
      background: #7065651c;
      height: 40px;
    }
    .icone-search {
      background: #7065651c;
      height: 38px;
      border-left: 0px;
      margin-left: -40px;
      background: inherit;
      color: #776d6d;
    }
    .perfil-user {
      display: flex;
      align-items: center;
    }
    .perfil-user img { 
      height: 60px;
      width: 60px;
    }
    .perfil-user p {
      color: #9d9797;
      font-size: 17px;
    }
    .icone-header {
      height: 20px;
    }
    .input-busca-respon{
      display:none;
    }
  }
</style>