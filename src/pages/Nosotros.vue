<!--seccion que habla de loos años de esperiencia y muestra  los 3 cuadros-->
<template>
	<section class="nosotros" id="nosotros" >
		<div class="col-12 text-center">
			<div class="nosotro-texto">
				<h2>
					17 Años de experiencia en Post de tu proyecto
				</h2>
				<div class="background-verde guion"></div>
				<p class="mt-5">
					Especializados desde 1996 en usabilidad, experiencia del  usaurio (UX) y diseño de experiencias de proyectos digitales. Aportamos estrategia de innovacion centrada en el usuario y los objetivos de negocios de tu proyecto. Cotrabajando mejorando tu tasa de conversion, KPI´s, ROI y los resultados de tu actual publiccidad PPC (pay per click).
				</p>
			</div>
		</div>
		<div class="nosotros-box">	
			<div class="nosotros-box-item primero text-center">
				<h4 class="text-verde">Estrategia Usabilidad</h4>
				<p>
					Te ofrecemos excelente usabilidad y experiencia del usuario en tu proyecto, junto a una vision innovadora
				</p>
			</div>
			<div class="nosotros-box-item segundo text-center">
				<h4 class="text-verde">Mejoramos la Experiencia</h4>
				<p>
					Tangibilizamos tu proyecto digital a través de un diseño centrado en el usuario y técnicas avanzadas
				</p>
			</div>
			<div class="nosotros-box-item tercero text-center">
				<h4 class="text-verde">Medición continua de Objetivos</h4>
				<p>
					implementación, testing con usuarios y medición continua son necesarias para garantizar el éxito de tu proyecto
				</p>
			</div>
		</div>
	</section>
</template>

<script>


export default {
  name: 'Nosotros',
}
</script>

<style scoped>
  .nosotros{
		background-color: #273138;
	}
	.nosotros p{
		color: rgba(255,255,255,.5); 
	}
	.nosotro-texto{
		padding: 4rem;
	}
	.nosotros-box {
		display: flex;
		flex-direction: row; 
	}
	@media (max-width: 600px){
		.nosotros-box{
			flex-direction: column;
		}
	}
	.nosotros-box .nosotros-box-item {
		padding: 5rem;
	}
	.nosotros-box .nosotros-box-item h5 {
		color: #008000 !important;
	}
	.nosotros-box > .primero{
		background-color: #3b4148;
	}
	.nosotros-box > .segundo{
		background-color: #161c21;
	}
	.nosotros-box > .tercero{
		background-color: #202a37;
	}
</style>

