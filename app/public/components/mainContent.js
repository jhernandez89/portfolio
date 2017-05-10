/* global angular controller */

(function () {
  console.log('main');
  'use strict';
  angular.module('app', [])
    .component('mainContent', {
      controller: ['$scope', '$http', function ($scope, $http) {
        const vm = this;
      }],
      templateUrl: './components/mainContent.html',
    });
}());
