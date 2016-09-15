cleeventApp.controller('step4Ctrl', ['$scope', 'apiService', 'pageService',
  function ($scope, apiService, pageService) {
    var self = this;
    var PARENT = $scope.main;

    self.pageService = pageService;
    self.pageService.setTitle('Dame');
    self.pageService.setSubTitle('tu mail y podrás ganar una sorpresa');
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);

    self.personEmail = '';

    self.loading = false;

    self.btnNext = function () {
      if (self.personEmail) {
        var data = PARENT.getFromLocalStorage(PARENT.lsVar);
        data.user.email = self.personEmail;
        PARENT.saveToLocalStorage(PARENT.lsVar, data);

        self.loading = true;

        apiService.post('users', data).then(function (response) {
          PARENT.removeFromLocalStorage();
          PARENT.btnNext();
        }, function (error) {
          console.log(error)
        }).finally(function () {
          self.loading = false;
        })
      }
    }
  }
])
