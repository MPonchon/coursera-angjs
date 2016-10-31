//menuapp.items.controller.js

(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('MenuAppItemsController', MenuAppItemsController);

MenuAppItemsController.$inject = ['myitems'];
function MenuAppItemsController(myitems) {
	var itemctrl = this;
	console.log('myitems ', myitems);
	itemctrl.items = myitems;

	

}
})();