(function () {
'use strict';

angular.module('NarrowItDownApp', [])

.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
        var narrowItDownCtrl = this;

        narrowItDownCtrl.searchTerm = ""
        narrowItDownCtrl.search = function(searchTerm){
                if (true) {
                        var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
                        promise.then(function (result) {

                                var menu_items = result.data.menu_items;
                                console.log("total: "+menu_items);
                            // process result and only keep items that match
                            var foundItems = []
                            for (var i = 0; i < menu_items.length; i++) {
                                    if (menu_items[i].description.includes(searchTerm)) {
                                            foundItems.push(menu_items[i])
                                    }
                            }
                            console.log("foundItems: "+foundItems);
                            // return processed items
                            narrowItDownCtrl.found = foundItems;
                        });
                }else {
                        narrowItDownCtrl.found = []
                }

                console.log("found=");
                console.log(narrowItDownCtrl.found);
        }
        narrowItDownCtrl.remove = function(index){
                console.log("remove index: "+index);
                narrowItDownCtrl.found.splice(index, 1)
        }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;
  service.getMatchedMenuItems = function(searchTerm){
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
                        items: "<",
                        onRemove: "&"
                },
                controller: NarrowItDownController,
                controllerAs: 'ctrl',
                bindToController: true
        }
        return ddo;
}
})();
