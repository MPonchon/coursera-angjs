(function () {
"use strict";

angular.module('common',[])
.service('myinfoService', myinfoService);


myinfoService.$inject = ['$http', 'ApiPath'];
function myinfoService($http, ApiPath) {
  var service = this;
  console.log("service : ", service);

  service.getFavoriteDish = function (dish) {

    console.log("myinfoService::dish ", dish);
    var config = {};
    if (dish) {
      config.params = {'short_name': dish};
    }
    else {
      config.params = {'short_name': 'A1'};
    }
    console.log("myinfoService::config ", config.params);
    return true;
    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log("myinfoService::response ", response.data);
      return response.data;
    });
  };
/*
service.getFavoriteDish = function (dish) {

  console.log("myinfoService::dish ", dish);
  var config = {};
  if (dish) {
    config.params = {'short_name': dish};
  }
  else {
    config.params = {'short_name': 'A1'};
  }
  if (dish == undefined) {
    dish = 'A1';
  }

  var url = ApiPath + '/menu_items/' + dish + '.json';

  //console.log("myinfoService::config ", config.params);
  return $http.get(url).then(function (response) {
    console.log("myinfoService::response ", response.data);
    return response.data;
  });
};
*/
}



})();
