(function () {
"use strict";

angular.module('public')
.controller('myinfoController', myinfoController);

myinfoController.$inject = ['shortname','user'];
function myinfoController(shortname, user) {
  var $ctrl = this;
  $ctrl.shortname = shortname;
  $ctrl.fname = fname;
  $ctrl.lname = lname;
  $ctrl.email = email;
  $ctrl.phone = phone;
  $ctrl.dish = dish;
  console.log("myinfoController::shortname", $ctrl.shortname);
  console.log("myinfoController::dish",  user.dish);
  $ctrl.master = {};

  // submit
  $ctrl.update = function(user) {
    console.log("upade ! :", user);
  //  $scope.master = angular.copy(user);
    console.log("myinfoController::fname", user.fname);
    console.log("myinfoController::lname", user.lname);
    console.log("myinfoController::email", user.email);
    console.log("myinfoController::phone", user.phone);
    console.log("myinfoController::dish",  user.dish);
    /*
    if (user.fname == undefined) {  return; }
    if (user.lname == undefined) {  return; }
    if (user.email == undefined) {  return; }
    if (user.phone == undefined) {  return; }
    if (user.dish  == undefined) {  return; }
    // recherche menu short name user.dish
    console.log(" recherche menu short name user.dish");
    //var v =
    */
  };

  $ctrl.reset = function(form) {
    if (form) {
      form.$setPristine();
      form.$setUntouched();
    }
    $ctrl.master = {};
    $ctrl.user = {}; // angular.copy($scope.master);
  };

  $ctrl.reset();

}

})();
