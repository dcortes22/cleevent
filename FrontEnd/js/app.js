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
        controller: 'step1Ctrl as ctrl'
      })
      .when('/step1', {
        templateUrl: '../templates/step1.html',
        controller: 'step1Ctrl as ctrl'
      })
      .when('/step2', {
        templateUrl: '../templates/step2.html',
        controller: 'step2Ctrl as ctrl'
      })
      .when('/step3', {
        templateUrl: '../templates/step3.html',
        controller: 'step3Ctrl as ctrl'
      })
      .when('/step4', {
        templateUrl: '../templates/step4.html',
        controller: 'step4Ctrl as ctrl'
      })
      .when('/step5', {
        templateUrl: '../templates/step5.html',
        controller: 'step5Ctrl as ctrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
])
