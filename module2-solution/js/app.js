(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();
        toBuy.removeToBuyItem = function (itemIndex, itemName, quantity) {
            ShoppingListCheckOffService.removeToBuyItem(itemIndex, itemName, quantity);
        }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;
        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [{ name: "cookies", quantity: 10 },
                  { name: "chocolates", quantity: 6 },
                  { name: "candies", quantity: 3 },
                  { name: "pastries", quantity: 5 },
                  { name: "cupcakes", quantity: 10 }];
  var alreadyBoughtItems = [];

  service.addAlreadyBoughtItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    alreadyBoughtItems.push(item);
  };

  service.removeToBuyItem = function (itemIdex, itemName, quantity) {
          console.log(quantity);
    toBuyItems.splice(itemIdex, 1);
    service.addAlreadyBoughtItem(itemName, quantity);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}
})();
