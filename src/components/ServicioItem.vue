<!-- componente para mostrar los proyectos destacados -->
<template>
    <div class="work" :style="{ 'background-color': item.backgroundColor }" >
        <div class="row" v-if="!invert">
            <div class="col-1 col-sm-1 col-md-1"></div>
            <div class="col-12 col-sm-6 col-md-6">
                <img :src="getImgUrl(item.poster)"  width="100%" height="400" />
            </div>
            <div class="col-12 col-sm-6 col-md-5">
                <div class="servicio-info">
                    <div class="text-left">
                        <img :src="getImgUrl(item.logo)" width="150" height="80" />
                        <h1 class="mt-3" :style="{ 'color': item.titleColor }" ><b>{{ item.title }}</b></h1>
                        <p class="text-justify mt-3" :style="{ 'color': item.textColor }" >
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-if="invert">
            <div class="col-12 col-sm-6 col-md-5">
                <div class="servicio-info">
                    <div class="text-left">
                        <img :src="getImgUrl(item.logo)" width="150" height="80" />
                        <h2 class="mt-3" :style="{ 'color': item.titleColor }" >{{ item.title }}</h2>
                        <p class="text-justify mt-3" :style="{ 'color': item.textColor }" >
                            {{ item.text }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6">
                <img :src="getImgUrl(item.poster)"  width="100%" height="400" />
            </div>
            <div class="col-1 col-sm-1 col-md-1"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ServicioItem',
        props: {
            item: Object,
            invert: Boolean
        },
        methods:{
            getImgUrl(image) {
                return require('../assets/'+image)
            }
        }
    }
</script>

<style scoped>
    .work {
		width: 100%;
		padding-top: 2rem;
	}
	.servicio-info{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 3rem;
	}
</style>
