<template>
	<swiper :options="swiperOption" class="carouselWrapper">
		<swiper-slide class="slide" v-for="banner in banners">
			<img :src="banner">
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
<!-- 	<div v-swiper:mySwiper="swiperOption">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="banner in banners">
				<img :src="banner">
			</div>
		</div>
		<div class="swiper-pagination swiper-pagination-bullets"></div>
	</div> -->
</template>

<script>

export default {
	data () {
		return {
			banners: [ 
			'./src/img/cases/NEW_BALANCE/1.jpg', 
			'./src/img/cases/KNORR/ALL.png', 
			'./src/img/cases/MT_INTERACTIVE/59aed631b51c6.jpg' ,
			'./src/img/cases/NEW_BALANCE/5.jpg',
			'./src/img/cases/NEW_BALANCE/6.jpg',
			'./src/img/cases/NEW_BALANCE/7.jpg'
			],
			swiperOption: {
				pagination: '.swiper-pagination',
				direction: 'vertical',
				slidesPerView: 1,
				paginationClickable: true,
				spaceBetween: 10,
				mousewheelControl: true
			}
		}
	},
	computed: {
	},
	mounted() {
  }
}
</script>


<style type="text/css" lang="scss">

.carouselWrapper{
	width: 55vw;
	top: 50%;
	margin-top: -40vh;
	position: absolute;
	left: 5vw;
	right: 40vw;


	.slide{
		text-align: center;
		img {
			max-width: 100%;
			height: 80vh;
			object-fit: contain;
		}
	}
}

</style>