<!--Seccion para mostrar los proyectos Destacados-->
<template>
   <section class="servicios text-center" id="servicios">
		<div class="row">
			<div class="col-12 text-center">
				<div class="servicios-texto">
					<h2>
						Proyectos Destacados
					</h2>
					<div class="background-verde guion"></div>
					<p class="mt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserun
					</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<ServicioItem :item="item" v-for="(item, index) in proyectos" :key="index"  :invert="index % 2 !== 0 ? true: false" />
			</div>
		</div>
	</section>
</template>

<script>

import * as axios from 'axios';
import ServicioItem from '../components/ServicioItem.vue';
import config from '../config';

export default {
  name: 'servicios',
  components: {
	ServicioItem
  },
  data(){
	return {
		proyectos: []
	}
  },
  created: function(){
	//cuando se crea el componente llamo al servicio para cargar los proyectos desatacados
	axios
      .get(`${config.apiUrl}/proyectos`)
      .then(response => (this.proyectos = response.data.resp))
  }
}
</script>

<style scoped>
  .servicios{
		background-color: #2e363e;
	}
	.servicios p{
		color: rgba(255,255,255,.5); 
	}
	.servicios-texto{
		padding: 4rem;
	}
</style>
