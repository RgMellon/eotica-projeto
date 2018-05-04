<template>
  <div id="app">

    <div class="container">
      <header>
        <menu-header> 
        </menu-header>
      </header>
      <main>
          <c-principal>
          </c-principal>
      </main>
      <footer>
      </footer>

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
