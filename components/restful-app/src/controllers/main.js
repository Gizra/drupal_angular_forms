'use strict';

angular.module('restfulApp')
  .controller('MainCtrl', function($scope, DrupalSettings, EntityResource, $log) {
    $scope.data = DrupalSettings.getData('entity');
    $scope.bundleName = '';
    $scope.bundles = {
      'discussions': 'Discussion',
      'documents': 'Document',
      'events': 'Event'
    };
    $scope.selection = {
      ids: {}
    };
    $scope.serverSide = {
      data: {}
    };

    /**
     * Update the bundle of the entity to send to the right API.
     */
    $scope.updateBundle = function(bundle, e) {
      // Get element clicked in the event.
      var elem = angular.element(e.srcElement);
      // Remove class "active" from all elements.
      angular.element( ".active" ).removeClass( "active" );
      // Add class "active" to clicked element.
      elem.addClass( "active" );
      // Update Bundle.
      $scope.bundleName = bundle;
    }

    /**
     * Submit form (even if not validated via client).
     */
    $scope.submitForm = function(isValid, data, bundle) {
      // Angular checks if form is valid.
      if(isValid) {
        // Cope data.
        var submitData = angular.copy(data);
        // Add selected categories to data.
        var categories = [];
        var id = 0;
        angular.forEach($scope.selection.ids, function (name, termId) {
          categories[id] = termId;
          id++;
        });

        submitData.categories = categories;

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
