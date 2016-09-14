cleeventApp.controller('step3Ctrl', ['apiService', 'pageService',
  function (apiService, pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('¡Gracias!');
    self.pageService.setSubTitle('Pronto estará tu bebida');
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);
  }
])
