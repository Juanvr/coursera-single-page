(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishList = "";
    $scope.color = "white";

    $scope.refresh = function (){
      var count = countDishes($scope.dishList);
      if ($scope.dishList === ""){
        $scope.message = "Please, enter data first";
        $scope.color = "red";
      } else if (count > 3) {
        $scope.message = "Too much!";
        $scope.color = "green";
      } else {
        $scope.message = "Enjoy!";
        $scope.color = "green";
      }
    }

    function countDishes (dishString){
      var dishList = dishString.split(',');
      var numberDishes = dishList.length;
      for (var i = 0; i < dishList.length; i++) {
        if (dishList[i] ==="" ||dishList[i] && dishList[i].trim().length === 0) {
          numberDishes--;
        }
      }
      return numberDishes;
    }

  }

})();
