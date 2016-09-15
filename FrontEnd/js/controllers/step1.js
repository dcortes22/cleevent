cleeventApp.controller('step1Ctrl', ['$scope', 'pageService',
  function ($scope, pageService) {
    var self = this;
    var PARENT = $scope.main;

    self.pageService = pageService;
    self.pageService.setTitle('Hola,');
    self.pageService.setSubTitle('¿Cuál es tu nombre?');
    self.pageService.setShowLogo(true);
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);

    self.personName = '';

    var getNameParts = function (name) {
      var arr = name.split(' ');
      return {
        'first': arr[0],
        'last': arr[1]
      }
    }

    self.btnNext = function () {
      if (self.personName) {
        var nameObj = getNameParts(self.personName);
        var data = PARENT.getFromLocalStorage(PARENT.lsVar);

        data.user.name = nameObj.first;
        data.user.last_name = nameObj.last;
        
        PARENT.saveToLocalStorage(PARENT.lsVar, data);
        PARENT.btnNext();
      } else {
        console.log('Undefined name value');
      }
    }

    // initial object for local storage
    PARENT.saveToLocalStorage(PARENT.lsVar, {
      'user': {
        'name': '',
        'last_name': '',
        'email': '',
        'drink_ids': []
      }
    })
  }
])
