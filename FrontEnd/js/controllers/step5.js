cleeventApp.controller('step5Ctrl', ['pageService',
  function (pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('Hola,');
    self.pageService.setSubTitle('¿Cuál es tu nombre?');
    self.pageService.setShowNavigation(false);
    self.pageService.setShowHeader(false);
  }
])
