/*
app.js
*/
(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
      $scope.placeholder = "list comma separated dishes you usually have for lunch";
      $scope.message = "";

      $scope.btCheck = function () {
      //  $scope.placeholder ="check";
          //console.log("msg");
        //  alert($scope.coucou);
        //var msg = $scope.message.prototype.trim();
        // console.log("hello" );
        //  console.log(msg);
        $scope.message = responseToLunch($scope.ingredient);

      //
      // $scope.saisieChange = function() {
      //   $scope.message = "saisieChange";
      };

      /**
       * Return the right String
       * @praram message is the value described by ng-model : ingredient
       * return String
       */
      function responseToLunch(message) {
        //alert("[" + message +")");
        if ( message == undefined) {
          return "Please enter data first";
        }
        var msg = message.trim();
        //  alert("[ msg " + msg +")");
        //console.log(msg);
        if (msg.length <1 || message == undefined) {
          return "Please enter data first";
        }
        //alert(message);
        var array = msg.split(',');
        if (array.length <= 3) {
            return "Enjoy!";
        }
        else {
          return "Too much!";
        }
      };


}

})();
