(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  // $scope.name = "Yaakov";
  // $scope.stateOfBeing = "hungry";
  //
  // $scope.sayMessage = function () {
  //   return "Yaakov likes to eat healthy snacks at night!";
  // };
  //
  $scope.inputText = "";
  $scope.checkIfTooMuch = function () {
        var texts =   $scope.inputText.split(",")
        if (texts[texts.length-1] == "") {
                texts = texts.pop();
        }
        if ($scope.inputText.length == 0) {
                $scope.message = "Please enter data first"
        }else if(texts.length <= 3){
                $scope.message = "Enjoy!"
        }else{
                $scope.message = "Too much!"
        }
  };
}
})();
