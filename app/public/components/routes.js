const app = angular.module('mainApp', ['ngRoute']);

app.config(($routeProvider) => {
  $routeProvider
    .when('/', {
      template: 'welcome!',
    });
})
;