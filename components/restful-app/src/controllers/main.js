'use strict';

angular.module('restfulApp')
  .controller('MainCtrl', function($scope, DrupalSettings, ArticlesResource, FileUpload, $http, $log) {
    $scope.data = DrupalSettings.getData('article');
    $scope.serverSide = {};
    $scope.tagsQueryCache = [];

    /**
     * Get matching tags.
     *
     * @param query
     *   The query string.
     */
    $scope.tagsQuery = function (query) {
      var url = DrupalSettings.getBasePath() + 'api/v1/tags';
      var terms = {results: []};

      var lowerCaseTerm = query.term.toLowerCase();
      if (angular.isDefined($scope.tagsQueryCache[lowerCaseTerm])) {
        // Add caching.
        terms.results = $scope.tagsQueryCache[lowerCaseTerm];
        query.callback(terms);
        return;
      }

      $http.get(url, {
        params: {
          string: query.term
        }
      }).success(function(data) {

        if (data.length == 0) {
          terms.results.push({
            text: query.term,
            id: query.term,
            isNew: true
          });
        }
        else {
          angular.forEach(data, function (label, id) {
            terms.results.push({
              text: label,
              id: id,
              isNew: false
            });
          });
          $scope.tagsQueryCache[lowerCaseTerm] = terms;
        }

        query.callback(terms);
      });
    };

    /**
     * Submit form (even if not validated via client).
     */
    $scope.submitForm = function() {
      // Prepare the tags, by removing the IDs that are not integer, so it will
      // use POST to create them.
      var submitData = angular.copy($scope.data);

      ArticlesResource.createArticle(submitData)
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
