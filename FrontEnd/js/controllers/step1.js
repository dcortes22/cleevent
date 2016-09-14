cleeventApp.controller('step1Ctrl', ['apiService', 'pageService',
  function (apiService, pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('Hola,');
    self.pageService.setSubTitle('¿Cuál es tu nombre?');
    self.pageService.setShowLogo(true);
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);
    // var self = this;
    //
    // self.getPerson = function() {
    //   apiService.get(1, '/users')
    //     .then(function (response) {
    //       console.log(response);
    //     }, function (error) {
    //       console.log(error);
    //     });
    // }
    //
    // self.postPerson = function() {
    //   apiService.post('/users', {
    //     'user': {
    //       'name':'Daniel',
    //       'last_name':'Cortes',
    //       'email':'dcortes92@hotmail.com',
    //       'drink_ids':[1]
    //     }
    //   }).then(function (response) {
    //     console.log(response);
    //   }, function (error) {
    //     console.log(error);
    //   });
    // }
    //
    // //self.getPerson();
    // self.postPerson();
  }
])

// {
//   'user': {
//     'name':'Daniel',
//     'last_name':'Cortes',
//     'email':'dcortes1892@gmail.com',
//     'drink_ids':[1, 4, 5, 12]
//   }
// }
