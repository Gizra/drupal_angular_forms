'use strict';

angular.module('restfulApp')
  .controller('MainCtrl', function($scope, DrupalSettings, EntityResource, $log) {
    $scope.data = DrupalSettings.getData('entity');
    $scope.bundle = {};
    $scope.serverSide = {
      data: {}
    };

    /**
     * Submit form (even if not validated via client).
     */
    $scope.submitForm = function(isValid) {
      if(isValid) {
        // use POST to create them.
        var submitData = angular.copy($scope.data);
        // Cope the bundle name.
        var bundle = angular.copy($scope.bundle);

        EntityResource.createEntity(submitData, bundle)
          .success(function(data, status, headers, config) {
            $scope.serverSide.data = data;
            $scope.serverSide.status = status;
          })
          .error(function(data, status, headers, config) {
            $scope.serverSide.data = data;
            $scope.serverSide.status = status;
          });
      }
    };
  });
