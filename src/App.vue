<template>
  <div id="app">
    <Navbar />
    <Inicio />
    <Publicidad />
    <Nosotros />
    <Servicios />
    <section class="destacados">
        <button class="btn btn-verde py-3 px-5">
          HABLANOS DE TU PROYECTO
        </button>
    </section>
    <Footer />
  </div>
</template>

<script>
  //importacion de componentes y secciones a utilizar
  import Navbar from './components/Navbar.vue';
  import Publicidad from './components/Publicidad.vue';
  import Inicio from './pages/Inicio.vue';
  import Nosotros from './pages/Nosotros';
  import Servicios from './pages/Servicos';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Navbar,
      Inicio,
      Publicidad,
      Nosotros,
      Servicios,
      Footer
    }
  }
</script>

<style scoped>
  .destacados{
    display: flex;
    padding: 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
