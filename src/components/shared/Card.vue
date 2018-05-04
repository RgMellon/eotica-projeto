<template>
  <div>
    <masonry :cols="{default: 4, 1000: 3, 700: 2, 430: 1}"
     :gutter="{default: '30px', 700: '15px'}" >
    <div class="card" v-for="(i, indexC) in resultado(this.pesquisa)">
      <div class="card-image">
        <picture>
          <source media='(min-width: 1200px)' :srcset="require(`../../assets/images/${i.img_respon}`)">
          <img :src="require(`../../assets/images/${i.img}`)" alt="">
        </picture>
      </div>
      <div class="titulo">
        <h1> {{ i.titulo }}</h1>
      </div>
      <div class="location container-flex">
        <icone name="map-marker-alt"> </icone>
        <p> {{ i.location }}</p>
      </div>
      <div class="desc">
        <div class="desc-resume">
        <p> {{ i.desc }} </p>
        </div>
      </div>
      <div class="footer container-flex space-between">
          <div class="stars container-flex item-center space-around">
            <div class="stars container-flex item-center space-around" v-if="i.stars > 0">
              <div class="star-red" v-for="(j, index) of i.stars" @click="darEstrela(index+1,indexC)"> <icone name="star"></icone> </div>
              <div class="star" v-for="(p, index) of (4 - i.stars)" @click="darEstrela(index+1, indexC)"> <icone name="star"></icone> </div>  
            </div>
            <div v-else class="star" v-for="(j, index) of 4" @click="darEstrela(index+1, indexC)"> <icone name="star"></icone> </div>
          </div>
          <div class="icone-face container-flex item-center">
            <img :src="require(`../../assets/images/face.png`)" alt="">
          </div>
      </div>
    </div>
</masonry>
  </div>
</template>

<script>
  import Icon from 'vue-awesome/components/Icon.vue';
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    name: 'card-vue',
    components: {
      'icone': Icon,
    },
    data(){
      return {
        card: {},
      }
    },
    computed: {
      ...mapGetters({
        resultado: 'buscaTarefas',
        pesquisa: 'getPesquisa'
      }),
    },
    methods: {
      darEstrela(estrela, usuario) {
        this.estrela([estrela, usuario]);
      },
      ...mapActions({
        estrela: 'estrela',
      })
    }
  }
</script>

<style scoped>
  .titulo, .desc, .location {
    padding-right: 1rem;
    padding-left: 1rem;
    margin-top: 0.8rem;
  }
  .location p{
    margin-left: 1rem;
    font-size: 15px;
  }
  .location {
    color: #aeaaaa;
  }
  .desc {
    font-size: 14px;
    color: #aeaaaa;
  }
  .footer {
    border-top: 1px solid #ccc;
    margin-top: 1rem;
    height: 50px;
  }
  .icone-face{
    height: 100%;
    width: 30px;
    margin-right: 1rem;
  }
  .titulo {
    color: #777272;
  }
  .star-red {
    color: #B9CB41;
  }
  .stars {
    width: 70px;
    color: #ccc;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .card {
    margin: 1rem;
    background: white;
  }
  @media(min-width: 1200px) {
    .card {
      width: 250px;
      box-shadow: 1px -1px 3px 0px rgba(0, 0, 0, 0.28);
    }
    
    .desc-resume {
      height: 40px;
      background: inherit;
      overflow: hidden;
    }

    .card:hover {
      transition: all .2s ease-in-out;
      transform: scale(1.1);
      margin: 2rem;
    }
    .star:hover {
      color: #B9CB41;
    }
  }


</style>