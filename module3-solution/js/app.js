(function () {
'use strict';

angular.module('NarrowItDownApp', [])

.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
        var narrowItDownCtrl = this;
        narrowItDownCtrl.found = []
        narrowItDownCtrl.searchTerm = ""
        narrowItDownCtrl.search = function(searchTerm){
                var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                promise.then(function (result) {

                        var menu_items = result.data.menu_items;
                        console.log(menu_items);
                    // process result and only keep items that match
                    var foundItems = []
                    for (var i = 0; i < menu_items.length; i++) {
                            if (menu_items[i].description.includes(searchTerm)) {
                                    foundItems.push(menu_items[i])
                            }
                    }
                    console.log(foundItems);
                    // return processed items
                    narrowItDownCtrl.found = foundItems;
                });
                console.log("found=");
                console.log(narrowItDownCtrl.found);
        }
        narrowItDownCtrl.remove = function(index){
                narrowItDownCtrl.found.splice(index, 1)
        }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  service.getMatchedMenuItems = function(searchTerm){
          console.log(searchTerm);
        return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
        });
  }

}

function FoundItems(){
        var ddo = {
                templateUrl: 'foundItems.html',
                scope: {
                        items: "<"
                },
                controller: NarrowItDownController,
                controllerAs: 'ctrl'


        }
        return ddo;
}
})();
