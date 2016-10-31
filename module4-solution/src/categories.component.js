//categories.component.js

(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/component/categories.template.html',
  bindings: {
    items: '<'
  }
});

})();

