'use strict';

/**
 * @ngdoc directive
 * @name restfulApp.directive:bundleSelect
 * @description
 * # inlineLabel
 */
angular.module('restfulApp')
  .directive('bundleSelect', function ($window, DrupalSettings, $log) {
    return {
      templateUrl: DrupalSettings.getBasePath() + 'profiles/drupal_angular/libraries/bower_components/restful-app/dist/directives/bundle-select/bundle-select.html',
      restrict: 'E',
      scope: {
        items: '=',
        bundleName: '=',
        onChange: '=onChange'
      },
      link: function postLink(scope) {
        scope.updateBundle = function(bundle, e) {
          return scope.onChange(bundle, e);
        }
      }
    };
  });
