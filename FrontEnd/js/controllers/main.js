cleeventApp.controller('mainCtrl', ['$location', 'pageService', 'navigationService',
  function ($location, pageService, navigationService) {
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
  }
])
