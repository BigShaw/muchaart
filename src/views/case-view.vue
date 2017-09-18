
<template>
	<div class="bg">
		
		<div class="carouselWrapper">
			<div class="owl-carousel">
				<div class="item"><img src="./../img/cases/NEW_BALANCE/1.jpg"></div>
				<div class="item"><img src="./../img/cases/KNORR/ALL.png"></div>
				<div class="item"><img src="./../img/cases/MT_INTERACTIVE/59aed631b51c6.jpg"></div>
				<div class="item"><img src="./../img/cases/NEW_BALANCE/5.jpg"></div>
				<div class="item"><img src="./../img/cases/NEW_BALANCE/6.jpg"></div>
				<div class="item"><img src="./../img/cases/NEW_BALANCE/7.jpg"></div>
			</div>
		</div>

	</div>

</template>




<script>

export default {
	data () {
		return {

		}
	},
	methods: {
		// installOwlCarousel: function(){
		// 	$('.owl-carousel').owlCarousel({
		// 	});
		// }
	},
	mounted(){
		var $ = window.jQuery = require('jquery') 
		require('./../js/owl.carousel.min.js');
		$(".owl-carousel").owlCarousel({
			center: true,
			items:1,
			loop:true,
			margin:10,
			nav: true,
			autoplayHoverPause: true,
			animateOut: 'slideOutUp',
			animateIn: 'slideInUp'
		});
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

.carouselWrapper{
    width: 55vw;
    top: 50%;
    margin-top: -40vh;
    position: absolute;
    left: 5vw;
    right: 40vw;


    .item{
    	img {
    		max-width: 100%;
    		height: 80vh;
    		object-fit: contain;
    	}
    }
}


</style>