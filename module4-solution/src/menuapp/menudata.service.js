(function () {
'use strict';

angular.module('Data')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
        return $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
        })
  };


  service.getItemsForCategory = function (categoryShortName) {
        return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
        })
}
}

})();
