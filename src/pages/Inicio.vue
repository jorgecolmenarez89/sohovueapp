<!--lo primero que se visualiza seccion que tinen una imagen de fondo-->
<template>
    <section class="inicio" id="inicio">
		<h1 class="text-big">Nos especializamos en</h1>
		<h1 class="text-verde text-big">interfaces digitales que los usuarios aman</h1>
		<button class="btn btn-verde py-3 px-5 mt-5">
			HABLEMOS DE TU PROYECTO
		</button>
    </section>
</template>

<script>

export default {
  name: 'inicio',
}
</script>

<style scoped>
    .inicio{
		background: url('../assets/home.jpg');
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.inicio{
		height: 100vh;
		width: 100%;
	}
</style>
