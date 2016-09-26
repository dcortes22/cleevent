cleeventApp.controller('step4Ctrl', ['$scope', 'apiService', 'pageService',
  function ($scope, apiService, pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('¡Gracias!');
    self.pageService.setSubTitle('Pronto estará tu bebida');
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);

    self.btnNext = function () {
      $scope.main.btnNext();
    }
  }
])
