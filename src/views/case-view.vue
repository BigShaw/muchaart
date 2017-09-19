
<template>
	<div class="bg">
		<mySwiper></mySwiper>
	</div>

</template>




<script>
import mySwiper from './components/my-swiper.vue'
export default {
	components:{ 
		mySwiper
	},
	data () {
		return {

		}
	},
	methods: {

	},
	mounted(){

	}

}
</script>

<style lang="scss">

.bg{
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: 3000;
	background-color: #222;
}


</style>