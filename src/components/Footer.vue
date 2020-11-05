<!--componente footer color negro-->
<template>
    <footer class="footer">
        <div class="footer-section">
            <span>© SOHO internet + humana</span>
        </div>
        <div class="footer-section">
            <a href="#" class="text-verde">Visítanos</a>
            <a href="#" class="ml-5 text-verde">Escríbenos</a>
            <a href="#" class="ml-5 text-verde">Llámanos</a>
        </div>
        <div class="footer-section">
			<a href="#" class="text-facebook">Facebook</a>
            <a href="#" class="ml-3 text-twitter">Twiter</a>
            <a href="#" class="ml-3 text-linkedin">Linkedin</a>
			<a href="#" class="ml-3 text-youtube">Youtube</a>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer{
		background-color: #000000;
		padding: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	@media (max-width: 600px){
		.footer{
			flex-direction: column;
		}
	}
	.footer-section{
		display: flex;
		flex: 1;
		flex-direction: row;
		justify-content: center;
	}
</style>
