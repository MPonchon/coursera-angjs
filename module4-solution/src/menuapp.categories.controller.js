//menuapp.categories.controller.js

(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('MenuAppCategoriesController', MenuAppCategoriesController);

MenuAppCategoriesController.$inject = ['categories'];
function MenuAppCategoriesController(categories) {
	var catctrl = this;
	//console.log('catctrl ', catctrl);
	console.log('categories ', categories);
	catctrl.categories = categories;
	
	catctrl.getCat = function(id) {
		if (categories[id] && categories[id].short_name) {
			return categories[id].short_name;
		}
	}
}
})();