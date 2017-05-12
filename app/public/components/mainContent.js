/* global angular controller */

(function () {
  console.log('main');
  'use strict';
  angular.module('app', [])
    .component('mainContent', {
      controller: ['$scope', '$http', function ($scope, $http) {
        const vm = this;
        vm.$onInit = function () {
          vm.pipe = '../images/pipe.png'
          vm.starry = '../images/starry.png'
        }
        vm.starfish = function () {
          vm.pipe = '../images/pipstar.png'
          vm.starry = '../images/nostarry.png'
        }
        vm.morestar = function () {
          vm.pipe = '../images/pipe.png'
          vm.starry = '../images/starry.png'
        }
      }],
      templateUrl: './components/mainContent.html',
    });
}());
