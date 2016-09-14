cleeventApp.controller('step4Ctrl', ['apiService', 'pageService',
  function (apiService, pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('Dame');
    self.pageService.setSubTitle('tu mail y podrás ganar una sorpresa');
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);
  }
])
