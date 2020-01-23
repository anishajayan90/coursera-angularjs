angular.module('MenuApp')
.component('item', {
  templateUrl: 'src/menuapp/templates/item.template.html',
  bindings: {
    items: '<'
  }
});
