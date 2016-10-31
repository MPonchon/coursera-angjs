/*
app.js

https://mponchon.github.io/coursera-angjs/module3-solution/index.html


*/
(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('afficheItemsDescription', afficheItemsDescriptionDirective)
  .directive('foundItems', foundItemsDirective);

  
  
function afficheItemsDescriptionDirective() {
	var ddo = {
		template: 'DESCRIPTION {{ elem.description }} NAME {{ elem.name }}  INDEX {{ $index + 1 }} , ID :{{ elem.id }} .',
		restrict: 'E'	//element
	};
	return ddo;
}
  
// directive : <found-items></found-items>
//foundItemsDirective.$inject = ['$scope']
function foundItemsDirective() {
	var ddo = {
		templateUrl: 'liste.html',
		scope : {
			ctrlNarrow: '<found',
			onRemove:'='
		},
		/*
		controller: foundItemsDirectiveController,
		controllerAs:'ctrlNarrow2',
		bindToController: true
		*/
	};
	//console.log("ddo: ",ddo);
	return ddo;
}	


function foundItemsDirectiveController() {
  var ctrl2 = this;
	//console.log("this is .", this);
  //list.found = ctrlNarrow2.removeItem;
  ctrl2.list = ctrl2.ctrlNarrow.list;
  ctrl2.onRemove = ctrl2.ctrlNarrow.removeItem;
}


NarrowItDownController.$inject = [ 'MenuSearchService'];
function NarrowItDownController( MenuSearchService) {
	var narrow = this;
	var search = "";
	//console.log("search.", search);
	//console.log("scope.btSearch", $scope.btSearch);
	
	narrow.rafraichir = function () {
		search = narrow.btSearch;
		console.log("rafraichir search.", search);
		var promise = MenuSearchService.getMatchedMenuItems(search);
		promise.then(function (response) {
			narrow.list = response.data['menu_items'];
		})
		.catch(function (error) {
			console.log("Something went terribly wrong.");
		});		
		
	};
  
	narrow.removeItem = function(item) {
		console.log("removeItem item.", item);
		MenuSearchService.removeItem(narrow.list, item);
	};

}
 
//https://davids-restaurant.herokuapp.com/menu_items.json
MenuSearchService.$inject = ['$http','$q']
function MenuSearchService($http, $q) {
	var service = this;
	
	service.getMatchedMenuItems = function (searchItem) {
		var response = $http({
			method: "GET",
			url : "https://davids-restaurant.herokuapp.com/menu_items.json"
		});
		
		if (searchItem==undefined || searchItem.length==undefined || searchItem.length<1) {
			return response;
		}

		return response.then(function (result) {
				// process result and only keep items that match
			var foundItems = [];
			angular.forEach(result.data['menu_items'], function(element) {
				//console.log("element ", element);
				if (element.name.indexOf(searchItem) > 0 
					|| element.description.indexOf(searchItem) > 0) {
					foundItems.push(element);
					//console.log("element ", element);
				}
			})
			result.data['menu_items'] = foundItems;
			return response;
		});
	}
	
	service.removeItem = function(list, item) {
		list.splice(item, 1);
	
	};
} // MenuSearchService
	


  
})();