var cleeventApp = angular.module("cleeventApp", ['ngRoute']);

cleeventApp.constant('apiUrl', {
  'dev': 'http://localhost:3001',
  'prod': 'https://cleapi.herokuapp.com'
})

cleeventApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../templates/step1.html',
        controller: 'mainCtrl as ctrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
])
