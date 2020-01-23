angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuapp/templates/categoriesItems.template.html',
  bindings: {
    items: '<'
  }
});
