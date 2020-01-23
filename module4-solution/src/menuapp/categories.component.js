angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categories.html',
  controller: CategoriesComponentController,
  bindings: {
    items: '<'
  }
});
CategoriesComponentController.$inject = ['categories']
function CategoriesComponentController(categories) {
  var $ctrl = this;

  $ctrl.categories = categories ;



}
