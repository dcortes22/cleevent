cleeventApp.factory('navigationService', [
  function () {

    // returns path
    var getNext = function (path) {
      return getNextPage(path);
    }

    // returns path
    var getPrevious = function (path) {
      return getPreviousPage(path);
    }

    // returns int
    var getCurrent = function (path) {
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

    return  {
      getNext: getNext,
      getPrevious: getPrevious,
      getCurrent: getCurrent
    }
  }
])
