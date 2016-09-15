cleeventApp.controller('step3Ctrl', ['$scope', 'pageService',
  function ($scope, pageService) {
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
