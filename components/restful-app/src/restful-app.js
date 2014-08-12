'use strict';

angular.module('restfulApp', [
    'ngPrettyJson',
    'ui.select2',
    'ui.bootstrap.datepicker',
    'template/datepicker/day.html',
    'template/datepicker/month.html',
    'template/datepicker/year.html',
    'template/datepicker/datepicker.html',
    'template/datepicker/popup.html'
  ], function($httpProvider) {

    // Use x-www-form-urlencoded Content-Type
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

});
