
var LoadGrid = {};

LoadGrid.install = function(Vue, options){
	var reLoadIsoGrid = {
		reLoad(){
			imagesLoaded( document.querySelectorAll(".grid"), function() {
				function getRandomInt(min, max) {
					return Math.floor(Math.random() * (max - min + 1)) + min;
				}

				[].slice.call(document.querySelectorAll('.isolayer')).forEach(function(el) {
					new IsoGrid(el, {
						type : 'scrollable',
						transform : 'translateX(-15vw) translateY(275px) rotateX(45deg) rotateZ(45deg)',
						stackItemsAnimation : {
							properties : function(pos) {
								return {
									rotateZ: getRandomInt(-3, 3),
									translateZ: (pos+1) * 50
								};
							},
							options : function(pos, itemstotal) {
								return {
									type: dynamics.bezier,
									duration: 800,
									points: [{"x":0,"y":0,"cp":[{"x":0.2,"y":1}]},{"x":1,"y":1,"cp":[{"x":0.3,"y":1}]}],
									delay: (itemstotal-pos-1)*40
								};
							}
						},
						onGridLoaded : function() {
							classie.add(document.body, 'grid-loaded');
						}
					});
				});

			})
		}
	}
	Vue.prototype.$reLoadIsoGrid = reLoadIsoGrid;

	
	var clearIsoGrid = {
		clearGrid(){
			var elems = document.querySelectorAll(".pseudo-scroller");
			elems.forEach(function(element) {
				element.parentNode.removeChild(element);
			});
			classie.remove(document.body, 'grid-loaded');
		},
	}
	Vue.prototype.$clearIsoGrid = clearIsoGrid;
};


// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(LoadGrid)
}


export default LoadGrid;
