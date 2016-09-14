cleeventApp.controller('navigationCtrl', ['$location',
  function ($location) {
    var self = this;

    self.btnNext = function () {
      var path = $location.path();
      $location.path(getNextPage(path));
    }

    self.btnBack = function () {
      var path = $location.path();
      $location.path(getPreviousPage(path));
    }

    self.getCurrentPage = function() {
      var path = $location.path();
      var currentPage = getPageNumber(path);

      if (currentPage) {
        currentPage = parseInt(currentPage);
      } else {
        currentPage = 1;
      }

      return currentPage;
    }

    // Navigation logic
    var getPreviousPage = function(path) {
      var currentPage = getPageNumber(path);
      var previousPage = 0;

      if (currentPage) {
        currentPage = parseInt(currentPage);
      } else {
        currentPage = 1;
      }

      if (currentPage === 1) {
        previousPage = 1;
      } else {
        previousPage = currentPage - 1;
      }

      return getPath(previousPage);
    }

    var getNextPage = function(path) {
      var currentPage = getPageNumber(path);
      var nextPage = 0;

      if (currentPage) {
        currentPage = parseInt(currentPage);
      } else {
        currentPage = 1;
      }

      nextPage = currentPage + 1;

      return getPath(nextPage);
    }

    var getPageNumber = function(path) {
      return path.replace( /^\D+/g, '');
    }

    var getPath = function(pageNumber) {
      var str = '' + pageNumber;
      return '/step' + str;
    }
  }
])
