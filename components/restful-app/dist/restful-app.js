/**
 * restful-app
 * @version v0.0.1 - 2014-08-10
 * @link 
 * @author  <>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';

angular.module('restfulApp', [
    'ngPrettyJson',
    'ui.select2'
  ], function($httpProvider) {

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

});

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
    $scope.submitForm = function() {
      // Prepare the tags, by removing the IDs that are not integer, so it will
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
        })
      ;
    };
  });

'use strict';

angular.module('restfulApp')
  .service('DrupalSettings', function($window) {
    var self = this;

    /**
     * Wraps inside AngularJs Drupal settings global object.
     *
     * @type {Drupal.settings}
     */
    this.settings = $window.Drupal.settings;


    /**
     * Get the base path of the Drupal installation.
     */
    this.getBasePath = function() {
      return (angular.isDefined(self.settings.drupalAngular.basePath)) ? self.settings.drupalAngular.basePath : undefined;
    };

    /**
     * Get the base path of the Drupal installation.
     */
    this.getCsrfToken = function() {
      return (angular.isDefined(self.settings.drupalAngular.csrfToken)) ? self.settings.drupalAngular.csrfToken : undefined;
    };

    /**
     * Return the form schema.
     *
     * @param int id
     *   The form ID.
     *
     * @returns {*}
     *   The form schema if exists, or an empty object.
     */
    this.getData = function(id) {
      return (angular.isDefined(self.settings.drupalAngular.data[id])) ? self.settings.drupalAngular.data[id] : {};
    }
  });

'use strict';

angular.module('restfulApp')
  .service('EntityResource', function(DrupalSettings, $http, $log) {

    /**
     * Create a new article.
     *
     * @param data
     *   The data object to POST.
     *
     * @returns {*}
     *   JSON of the newley created article.
     */
    this.createEntity = function(data, bundle) {
      return $http({
        method: 'POST',
        url: DrupalSettings.getBasePath() + 'api/v1/' + bundle.name,
        data: jQuery.param(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "X-CSRF-Token": DrupalSettings.getCsrfToken(),
          // Call the correct resource version (v1.5) that has the "body" and
          // "image" fields exposed.
          "X-Restful-Minor-Version": 5
        },
        withCredentials: true,
        serverPredefined: true
      });
    }
  });
