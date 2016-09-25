/*
app.js
*/
(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)

  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function ToBuyShoppingController($scope, ShoppingListCheckOffService) {
    var ctrlTobuyList = this;
    ctrlTobuyList.items = ShoppingListCheckOffService.getListToBuy();
    // console.log("itemstobuy", ctrlTobuyList.items);
    ctrlTobuyList.isToBuyEmpty = ShoppingListCheckOffService.isToBuyEmpty;

    $scope.buy = function (id) {
      //console.log("id", id);
    //  console.log("itemstobuy", showList.items[id]);
      ShoppingListCheckOffService.MoveToBought(id);
    }

  }

  AlreadyBoughtShoppingController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController($scope, ShoppingListCheckOffService) {
    var ctrlBoughtList = this;
    var listeBought = ShoppingListCheckOffService.getListBought();
    // console.log("listeBought: ", listeBought);

    ctrlBoughtList.liste  = listeBought;
    // ctrlBoughtList.msg = "msg : Nothing bought yet." + ctrlBoughtList.liste.length ;
    // ctrlBoughtList.len = ShoppingListCheckOffService.getListBought().length;

    // ctrlBoughtList.isEmpty = function() {
    //   return ctrlBoughtList.liste.length===0;
    // }

    ctrlBoughtList.isBoughtEmpty = ShoppingListCheckOffService.isBoughtEmpty;

    ctrlBoughtList.liste.msg = false;
    if (ctrlBoughtList.liste.length < 1) {
      ctrlBoughtList.msg = "Nothing bought yet."  ;
    }
    //
    $scope.liste = listeBought;
    $scope.msg = ctrlBoughtList.msg;
  }


  function ShoppingListCheckOffService() {
    var service = this;
    var itemsBought = [];

    service.addItem = function(name, quantity) {
      var last = itemstobuy.length;
      // console.log("taille", last);
      var item = {
      //  id : last,
        name : name,
        quantity : quantity
      };
      itemstobuy.push(item);
      // console.log("itemstobuy", itemstobuy);
    }

    var itemstobuy = [];
    service.addItem('cookies', "10");
    service.addItem('Chocolate', "5");
    service.addItem('Donuts', "15");
    service.addItem('Milk', "2");
    service.addItem('Bootle of water', "4");



    service.getListToBuy = function() {
      return itemstobuy;
    }

    service.getListBought = function() {
      //  console.log("itemsBought", itemsBought);
      return itemsBought;
    }

    service.MoveToBought = function(id)  {
      var item = itemstobuy[id];
      itemsBought.push(item);
      itemstobuy.splice(id, 1);
    }

    service.isToBuyEmpty = function() {
      return itemstobuy.length===0;
    }

    service.isBoughtEmpty = function() {
      return itemsBought.length===0;
    }

  }



})();
