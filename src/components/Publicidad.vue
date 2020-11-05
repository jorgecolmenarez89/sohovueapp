<!--componente para mostrar la secion publicitaria  color negro-->
<template>
    <section class="publicidad" id="publicidad">
		<img src="../assets/signal.png" alt="signal" width="40" height="30" >
		<span class="ml-3">
			<b>EN DIRECTO</b> - SOHO esta presente en el <b>DIGITALBANKC MONTEVIDEO</b>, "experiencia de usuario" por Alvaro Añon (Seo de Soho)
		</span>	
		<button class="btn btn-verde ml-1">
			Ver Evento
		</button>
		<button class="btn btn-outline-success ml-1">
			PROXIMOS EVENTOS
		</button>
	</section>
</template>

<script>
export default {
  name: 'Publicidad',
}
</script>

<style scoped>
    .publicidad{
		background-color: #000000;
		padding: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	@media (max-width: 600px) {
		.publicidad{
			flex-direction: column;
		}
	}
</style>