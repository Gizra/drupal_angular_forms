'use strict';

angular.module('restfulApp', [
    'ngPrettyJson',
    'ui.select2',
    'ui.bootstrap.datetimepicker'
  ], function($httpProvider) {

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

});
