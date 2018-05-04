<template>
  <div id="app">
    <div class="container">
      <div class="container-menu">  
        <header>
          <menu-header> 
          </menu-header>
        </header>
      </div>  
    </div>
    <div class="container-conteudo">
      <div class="container-conteudo-wrapper">
        <main>
          <c-principal>
          </c-principal>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import MenuHeader from './components/shared/MenuHeader';
import ConteudoPrincipal from './components/ConteudoPrincipal';
export default {
  name: 'app',
  components: {
    'menu-header': MenuHeader,
    'c-principal': ConteudoPrincipal,
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
