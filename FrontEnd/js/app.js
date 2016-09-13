var cleeventApp = angular.module("cleeventApp", []);

cleeventApp.constant('apiUrl', {
  'dev': 'http://localhost:3001',
  'prod': 'https://cleapi.herokuapp.com'
})
