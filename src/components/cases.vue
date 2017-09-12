<template>
	<ul class="grid grid--effect-flip">

            <li class="grid__item" v-for="item in filterItems" >
              <a class="grid__link">
                <img class="grid__img layer" src="src/img/advertising.png" v-if="item.caseType == 'advertising'" alt="Advertising" />
                <img class="grid__img layer" src="src/img/games.png" v-if="item.caseType == 'games'" alt="Games" />
                <img class="grid__img layer" src="src/img/others.png" v-if="item.caseType == 'others'" alt="Others" />

                <img class="grid__img layer" src="src/img/wireframe.png" alt="Wireframe Dummy" />

                <img class="grid__img layer" :src="item.imgSource" alt="032" />
                <span class="grid__title">{{item.title}}</span>
              </a>
            </li>
	</ul>

</template>


<script type="text/javascript">
	export default{
		data(){
			return { 
				currentCaseType: '',
				items: [
				{ title: '百事饮品体验中心H5插画', imgSource: 'src/img/cases/pepsi/thumbnail.jpg', caseType:'advertising', },
				{ title: '2016夏练国度曼联新球衣发布会', imgSource: 'src/img/cases/ADIDAS/thumbnail.jpg', caseType:'advertising',},
				{ title: '别克君威TVC脚本', imgSource: 'src/img/cases/BUICK/thumbnail.jpg', caseType:'advertising',},
				{ title: '家乐煎鱼帮手TVC脚本', imgSource: 'src/img/cases/KNORR/thumbnail.jpg', caseType:'advertising',},
				{ title: '麦当劳参赛TVC脚本', imgSource: 'src/img/cases/MCDONALDs/thumbnail.jpg', caseType:'advertising',},
				{ title: '神域默示录', imgSource: 'src/img/cases/MT_INTERACTIVE/thumbnail.jpg', caseType:'games',},
				{ title: '2016中国大学生校园路跑接力赛', imgSource: 'src/img/cases/NEW_BALANCE/thumbnail.jpg', caseType:'advertising',},
				{ title: '末日之城 City of the Undead', imgSource: 'src/img/cases/OURPALM-City_of_the Undead/thumbnail.jpg', caseType:'games',},
				{ title: '百事饮品体验中心H5插画', imgSource: 'src/img/cases/PERRIER/thumbnail.jpg', caseType:'advertising',},
				{ title: '口袋幻兽POKER CITY', imgSource: 'src/img/cases/POKER_CITY/thumbnail.jpg', caseType:'games',},
				{ title: '盟军守卫战', imgSource: 'src/img/cases/SHANGGAME-Allied_defense/thumbnail.jpg', caseType:'games',},
				{ title: '驯龙消消乐', imgSource: 'src/img/cases/SHANGGAME-dragons/thumbnail.jpg', caseType:'games',},
				{ title: 'SLG', imgSource: 'src/img/cases/SHANGGAME-SLG/thumbnail.jpg', caseType:'games',},
				{ title: '僵尸英雄', imgSource: 'src/img/cases/SHANGGAME-zombie_heros/thumbnail.jpg', caseType:'games',},
				{ title: '淘宝年货大街', imgSource: 'src/img/cases/Taobao-Spring_festival/thumbnail.jpg', caseType:'advertising',},
				{ title: '九牛与二虎', imgSource: 'src/img/cases/Tmall-jiuniuerhu/thumbnail.jpg', caseType:'advertising',}
				]
			};
		},
		computed: {
			filterItems: function() {
				if (this.currentCaseType == 'advertising'){
					return this.items.filter(function(item) {
						return item.caseType == 'advertising';
					})
				}else if(this.currentCaseType == 'games'){
					return this.items.filter(function(item) {
						return item.caseType == 'games';
					})
				}else if(this.currentCaseType == 'others'){
					return this.items.filter(function(item) {
						return item.caseType == 'others';
					})
				}else {
					return this.items
				}
			}
		},
		methods: {
			// changeType(){
			// 	this.currentCaseType = 'games';
			// }
		},
		created(){
			Event.$on('changeType',(value) => this.currentCaseType = value.toLowerCase());
			// alert(this.currentCaseType)
			// Event.$on('changeType',(value) => alert(value) );
			// load(window);
		}

	}
</script>


<style type="text/css">
	

</style>