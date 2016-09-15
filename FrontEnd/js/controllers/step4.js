cleeventApp.controller('step4Ctrl', ['$scope', 'apiService', 'pageService',
  function ($scope, apiService, pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('Dame');
    self.pageService.setSubTitle('tu mail y podrás ganar una sorpresa');
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);

    self.personEmail = ''

    self.btnNext = function () {
      if (self.personEmail) {
        // call local storage
      }

      $scope.main.btnNext();
    }
  }
])
