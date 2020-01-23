angular.module('MenuApp')
.component('item', {
  templateUrl: 'item.html',
  bindings: {
    items: '<'
  }
});
