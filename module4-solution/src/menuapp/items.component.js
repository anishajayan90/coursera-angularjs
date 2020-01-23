angular.module('MenuApp')
.component('item', {
  templateUrl: 'item.html',
  controller: ItemComponentController,
  bindings: {
    items: '<'
  }
});
ItemComponentController.$inject = ['items']
function ItemComponentController(items) {
  var $ctrl = this;
  $ctrl.items = items;



}
