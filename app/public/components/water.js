/* global angular controller */

(function () {
  console.log('water');
  'use strict';
  angular.module('app', [])
    .component('water', {
      controller: ['$scope', '$http', function ($scope, $http) {
        const vm = this;
      }],
      templateUrl: './components/water.html',
    });
}());
