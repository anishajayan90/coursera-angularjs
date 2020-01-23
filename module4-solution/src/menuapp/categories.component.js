angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categoriesItems.html',
  bindings: {
    items: '<'
  }
});
