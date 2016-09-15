cleeventApp.controller('mainCtrl', ['$location', 'pageService',
'navigationService', 'localStorageService',
  function ($location, pageService, navigationService,
    localStorageService) {
    var self = this;

    self.pageService = pageService;
    self.navigationService = navigationService;

    self.btnNext = function () {
      var path = $location.path();
      $location.path(navigationService.getNext(path));
    }

    self.btnBack = function () {
      var path = $location.path();
      $location.path(navigationService.getPrevious(path));
    }

    self.getCurrentPage = function() {
      var path = $location.path();
      return navigationService.getCurrent(path);
    }

    if (localStorageService.isSupported) {
      self.saveToLocalStorage = function (key, value) {
        localStorageService.set(key, value);
      }

      self.getFromLocalStorage = function (key) {
        return localStorageService.get(key);
      }

    } else {
      console.log('Local storage not supported');
    }
  }
])
