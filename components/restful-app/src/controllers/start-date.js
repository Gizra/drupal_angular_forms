'use strict';

angular.module('restfulApp')
  .controller('startDateCtrl', function($scope) {
    // Date Calendar options.
    $scope.minDate = new Date();

    $scope.openStart = function($event) {
      $event.preventDefault();
      $event.stopPropagation();

      $scope.opened = true;
    };

    $scope.dateOptions = {
      formatYear: 'yyyy',
      startingDay: 1
    };
    // /Date Calendar options.

    // Time picker options
    $scope.startTime = new Date();

    $scope.hstep = 1;
    $scope.mstep = 1;
    // /Time picker options.
  });
