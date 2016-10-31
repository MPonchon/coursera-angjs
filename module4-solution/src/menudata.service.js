// menudata.service.js

(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
	var service = this;
	var items = [];
	var items2 = [];
	service.items = items;
	service.items2 = items2;
	
	service.getAllCategories = function() {
		var promise = $http({
			method: "GET",
			url : (ApiBasePath + '/categories.json'),
		})
		.then( function(resp){ 
			if (resp != undefined ) {
				//console.log('getAllCategories resp :', resp);
				items = resp.data;
				//console.log('MenuDataService  items1', items);
				service.items = items;
				//console.log('MenuDataService  items2', service.items);
			}
		})
		;
		//console.log('MenuDataService  items3', items);
		//console.log('MenuDataService  items4', service.items);
		return items; //promise;
	}

	service.getItemsForCategory = function(categoryShortName) {
		console.log('getItems categoryShortName :', categoryShortName);
		var response = $http({
			method: "GET",
			url : (ApiBasePath + '/menu_items.json?category=' + categoryShortName),
		})
		.then( function(resp){ 
			if (resp != undefined ) {
				//console.log('getAllCategories resp :', resp);
				items2 = resp.data;
				//console.log('MenuDataService  items1', items);
				service.items2 = items2.menu_items;;
				//console.log('MenuDataService  items2', service.items);
			}
		})
		;
		console.log('getItems items2 :', items2);
		return items2;
	}
	
}

})();