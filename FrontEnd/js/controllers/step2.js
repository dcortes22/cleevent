cleeventApp.controller('step2Ctrl', ['$scope', 'pageService',
  function ($scope, pageService) {
    var self = this;
    var PARENT = $scope.main;

    self.pageService = pageService;
    self.pageService.setTitle('Dame');
    self.pageService.setSubTitle('tu mail y podrás ganar una sorpresa');
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);

    self.personEmail = '';

    self.btnNext = function () {
      if (self.personEmail) {
        var data = PARENT.getFromLocalStorage(PARENT.lsVar);
        data.user.email = self.personEmail;
        PARENT.saveToLocalStorage(PARENT.lsVar, data);
        PARENT.btnNext();
      }
    }
  }
])
