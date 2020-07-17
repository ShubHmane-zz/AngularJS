(function () {
  'use strict';
  angular.module('LunchCheck', [])

    .controller('LunchCheckController', function ($scope) {
      $scope.items = " ";
      $scope.message = " ";



      $scope.fun = function () {
        var ip = $scope.items.split(',').length;

        if ($scope.items.trim().length === 0) {
          $scope.message = "Please enter data first"
        }
        else if ((1 <= ip) && (3 >= ip)) {
          $scope.message = "Enjoy!"
        }
        else {
          $scope.message = "Too much!"
        }
      }

    });

})(); 