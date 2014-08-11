'use strict';

angular.module('restfulApp')
  .controller('MainCtrl', function($scope, DrupalSettings, EntityResource, $log) {
    $scope.data = DrupalSettings.getData('entity');
    $scope.bundleName = {};
    $scope.bundles = {
      'discussions': 'Discussion',
      'documents': 'Document',
      'events': 'Event'
    };
    $scope.serverSide = {
      data: {}
    };

    /**
     * Update the bundle of the entity to send to the right API.
     */
    $scope.updateBundle = function(bundle, e) {
      var elem = angular.element(e.srcElement);
      angular.element(".active").removeClass('active');
      elem.addClass( 'active' );
      $scope.bundleName = bundle;
    }

    /**
     * Submit form (even if not validated via client).
     */
    $scope.submitForm = function(isValid, data, bundle) {
      if(isValid) {
        // Cope data.
        var submitData = angular.copy(data);
        // Call the create entity function service.
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
