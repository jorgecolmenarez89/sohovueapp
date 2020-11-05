<!--Barra de Navegacion-->
<template>
    <header>
      <b-navbar toggleable="sm" type="dark" variant="dark" fixed="top" >
        <b-navbar-brand href="#">
          <img src="../assets/logo-soho.png" alt="logo">
        </b-navbar-brand>
        <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
                <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
        </b-navbar-toggle>
        <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" v-scroll-to="'#inicio'" class="ml-3" :active='opcion =="inicio"' @click="setOption('inicio')" >inicio</b-nav-item>
            <b-nav-item href="#" v-scroll-to="'#nosotros'" class="ml-3" :active='opcion =="nosotros"' @click="setOption('nosotros')">nosotros</b-nav-item>
            <b-nav-item href="#" v-scroll-to="'#servicios'" class="ml-3" :active='opcion =="servicios"' @click="setOption('servicios')">servicios</b-nav-item>
            <b-nav-item href="#" class="ml-3" :active='opcion =="exitos"' @click="setOption('exitos')">casos de éxito</b-nav-item>
            <b-nav-item href="#" class="ml-3" :active='opcion =="unete"' @click="setOption('unete')">únete al equipo</b-nav-item>
            <b-nav-item href="#" class="ml-3" :active='opcion =="contacto"' @click="setOption('contacto')">contacto</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
</template>

<script>
export default {
  name: 'NavBar',
  data: function () {
    return {
      expanded: false,
      opcion: 'inicio'
    }
  },
  methods: { //metodo para setear la clase active de un item del navbar
    setOption: function (name){
      this.opcion = name;
    }
  }
}
</script>

<style scoped>
  .bg-light, .bg-dark{
		background-color: transparent !important; 
  }
  .navbar-dark .navbar-nav .active>.nav-link, .navbar-dark .navbar-nav .nav-link.active, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .show>.nav-link {
    color: #fff;
    border-bottom: 5px solid #04a700;
  }
</style>
