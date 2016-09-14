cleeventApp.controller('step2Ctrl', ['apiService', 'pageService',
  function (apiService, pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('Decíme,');
    self.pageService.setSubTitle('¿Qué querés tomar?');
    self.pageService.setShowLogo(false);
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);
  }
])
