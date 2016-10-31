//  menuapp.routes.js
(function () {
  'use strict';
  angular.module('MenuApp').config(RoutesConfig);
  
 RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/home');

  // Set up UI states
  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: 'src/template/home.html'
    })
	
	.state('home', {
      url: '/home',
      templateUrl: 'src/template/home.html'
    })

    .state('cat', {
      url: '/cat',
      templateUrl: 'src/component/categories.template.html',
	  controller: 'MenuAppCategoriesController as catctrl',
	  resolve: {
		categories:['MenuDataService', 
			function(MenuDataService){
			//	console.log('MenuDataService ', MenuDataService);
			/*
				return MenuDataService.getAllCategories()
					.then(function(response) {
						console.log('response ', response);
						return response.data;
					});
				
		    }]
			*/
			MenuDataService.getAllCategories();
			//console.log('MenuDataService  items', MenuDataService.items);
			return MenuDataService.items;
			}]
		}
    })
	
	.state('items', {
      url: '/items/{itemId}',
      templateUrl: 'src/component/items.template.html',
	  controller:'MenuAppItemsController as itemctrl',
	  resolve: {
		myitems:['$stateParams', 'MenuDataService', 
			function($stateParams, MenuDataService) {
				console.log('id [' +  $stateParams.itemId + ']');	
				console.log('MenuDataService ', MenuDataService);
				MenuDataService.getItemsForCategory($stateParams.itemId);
				console.log('MenuDataService items2', MenuDataService.items2);
				return MenuDataService.items2;
				/*
				  .then(function(items) {
					return items[$stateParams.itemId];
				  });
				  */
		    }]
	  }
    });
	
}


})();