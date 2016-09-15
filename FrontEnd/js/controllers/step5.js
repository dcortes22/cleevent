cleeventApp.controller('step5Ctrl', ['$scope', 'pageService',
  function ($scope, pageService) {
    var self = this;
    var PARENT = $scope.main;

    self.pageService = pageService;
    self.pageService.setTitle('Hola,');
    self.pageService.setSubTitle('¿Cuál es tu nombre?');
    self.pageService.setShowNavigation(false);
    self.pageService.setShowHeader(false);

    self.startOver = function () {
      //clear localstorage
      PARENT.removeFromLocalStorage();
      //go to home page
      PARENT.location.path('/');
    }
  }
])
