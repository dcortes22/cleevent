cleeventApp.factory('apiService', ['$http', '$q', 'apiUrl',
  function($http, $q, apiUrl) {
    var BASE_URL = apiUrl.prod; //change to apiUrl.dev for development

    var get = function (endpoint) {
      var deferred = $q.defer();
      $http.get(BASE_URL + endpoint + '.json').then(function (response) {
        console.log(response);
        deferred.resolve(response.data);
      }, function (error) {
        console.log(error);
        deferred.reject(error);
      });

      return deferred.promise;
    }

    var post = function (endpoint, data) {
      var deferred = $q.defer();
      $http.post(BASE_URL + endpoint + '.json', data).then(function (response) {
        console.log(response);
        deferred.resolve(response.data);
      }, function (error) {
        console.log(error);
        deferred.reject(error);
      });

      return deferred.promise;
    }

    return {
      get: get,
      post: post
    }
  }
])
