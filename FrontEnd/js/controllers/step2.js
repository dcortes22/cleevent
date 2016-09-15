cleeventApp.controller('step2Ctrl', ['$scope', 'apiService', 'pageService',
  function ($scope, apiService, pageService) {
    var self = this;

    self.pageService = pageService;
    self.pageService.setTitle('Decíme,');
    self.pageService.setSubTitle('¿Qué querés tomar?');
    self.pageService.setShowLogo(false);
    self.pageService.setShowNavigation(true);
    self.pageService.setShowHeader(true);

    self.collection = [];
    self.drinksOrder = [];

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

    apiService.get('drinks').then(function (data) {
      processDrinks(data)
    }, function (error) {
      //TODO: handle error
    }).finally(function () {
      //
    });

    self.btnNext = function () {
      self.drinksOrder = getOrder();
      if (Array.isArray(self.drinksOrder) && self.drinksOrder.length > 0) {
        // call local storage here
        $scope.main.btnNext();
      } else {
        console.log('Select at least one drink');
      }
    }
  }
])
