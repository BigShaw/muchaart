<template>
	<main>
		<header class="header">
			<h1>MUCH<span style="color:#D0021B">A</span><span style="font-size: 1.5rem;margin-left: 20px;letter-spacing: 5px;font-weight: 300;">/ 墨夏</span></h1>
			<p>An Illustration &amp; Design Studio.<p>
				<nav class="filter">
					<span 
					v-for="filter in filters" 
					:class="{ 'is-active': filter.selected }" 
					class="ease" 
					@click="selectFilter(filter)">
					{{filter.name}}
				</span>
			</nav>
			<div class="codrops-links">
				<router-link class="codrops-icon" to="/about-us">
					<span>About Us</span>
				</router-link>
				<router-link class="codrops-icon" to="/contact-us">
					<span>Contact Us</span>
				</router-link>
			</div>

<!--           <button class="button-menu">
            <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 67.75 43.63"><rect width="67.75" height="8.38"/><rect x="4.15" y="17.63" width="59.45" height="8.38" /><rect y="35.25" width="67.75" height="8.38"/></svg>
        </button> -->

    </header>
	<router-view></router-view>

    <div class="isolayer isolayer--scroll1 isolayer--shadow">
    	<caseitem></caseitem>
    </div>

</main>



<!--       <a class="pater" href="https://goo.gl/k3vxNx">
        <h2 class="pater__title" aria-label="PageCloud"><img src="src/img/PageCloud_logo.svg" alt="PageCloud Logo"/></h2>
        <p class="pater__desc">Take control of your website with features you won't find anywhere else. Find out why PageCloud is the world's most advanced website creator today!</p>
    </a> -->

</template>




<script>
import caseitem from './components/case-item.vue'


export default {
	components:{ 
		caseitem
	},
	data () {
		return {
			filters:[
			{name: 'ALL' , selected: true },
			{name: 'ADVERTISING' , selected: false },
			{name: 'GAMES' , selected: false },
			{name: 'OTHERS' , selected: false }
			]
		}
	},
	methods: {
		selectFilter(selectFilter){
			this.filters.forEach(filter => {
				filter.selected = (filter.name == selectFilter.name)
			}),
			Event.$emit('changeType', selectFilter.name);
			Event.$clearIsoGrid.clearGrid() 
			Event.$reLoadIsoGrid.reLoad() 
			
		}

	}
}
</script>

<style lang="scss">

</style>