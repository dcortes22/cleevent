cleeventApp.controller('step3Ctrl', ['$scope', 'apiService', 'pageService',
  function ($scope, apiService, pageService) {
    var self = this;
    var PARENT = $scope.main;
    var CACHED_USER = '';

    self.pageService = pageService;
    self.pageService.setTitle('Decíme,');
    self.pageService.setSubTitle('¿Qué querés tomar?');
    self.pageService.setShowLogo(false);
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);

    self.collection = [];
    self.drinksOrder = [];

    self.loading = true;

    var processDrinks = function (data) {
      var all = [];
      var categories = data.map(function (drink) {
        return {
          'id': drink.category.id,
          'name': drink.category.name,
          'drinks': []
        }
      })

      categories.forEach(function (category) {
        // find in array, only push unique ones
        var x = all.some(function (c) {
          return c.id === category.id;
        })

        if (!x) {
          all.push(category);
        }
      });

      var drinks = data.map(function (drink) {
        return {
          'drinkId': drink.id,
          'name': drink.name,
          'categoryId': drink.category.id,
          'selected': false
        }
      })

      all.forEach(function (category) {
        category.drinks = drinks.filter(function (drink) {
          return category.id === drink.categoryId
        })
      })

      self.drinks = drinks;
      self.collection = all;
    }

    var getOrder = function () {
      var order = []

      if (Array.isArray(self.drinks) && self.drinks.length > 0) {
        order = self.drinks.filter(function (drink) {
          return drink.selected
        }).map(function (drink) {
          return drink.drinkId;
        })
      }

      return order;
    }

    var getCachedUser = function () {
      CACHED_USER = PARENT.getFromLocalStorage(PARENT.lsVar);

      if (CACHED_USER.user.hasOwnProperty('name') && CACHED_USER.user.name !== '') {
        if (CACHED_USER.user.hasOwnProperty('email') && CACHED_USER.user.email !== '') {
          console.log('User Retrieved From Local Storage');
        } else {
          PARENT.location.path('step2'); // go and set email
        }
      } else {
        // no name set
        PARENT.location.path('/');
      }
    }

    getCachedUser();

    // read local storage

    apiService.get('drinks').then(function (data) {
      processDrinks(data)
    }, function (error) {
      console.log('Error getting drinks ', error);
    }).finally(function () {
      self.loading = false;
    });

    self.btnNext = function () {
      self.drinksOrder = getOrder();
      self.loading = true;
      if (Array.isArray(self.drinksOrder) && self.drinksOrder.length > 0) {
        var data =  CACHED_USER || PARENT.getFromLocalStorage(PARENT.lsVar);
        data.user.drink_ids = self.drinksOrder;
        PARENT.saveToLocalStorage(PARENT.lsVar, data);

        self.loading = true;

        apiService.post('users', data).then(function (response) {
          PARENT.btnNext();
        }, function (error) {
          console.log(error)
        }).finally(function () {
          self.loading = false;
        })

      } else {
        console.log('Select at least one drink');
      }
    }
  }
])
