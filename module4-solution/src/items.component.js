//items.component.js

(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/component/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
