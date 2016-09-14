cleeventApp.factory('pageService', [
  function() {
    var title = 'Hola,'
        subtitle = '¿Cuál es tu nombre?'
        showLogo = true,
        showNavigation = true,
        showHeader = true;

    var getTitle = function() {
      return title;
    }

    var setTitle = function(newTitle) {
      title = newTitle;
    }

    var getSubTitle = function() {
      return subtitle;
    }

    var setSubTitle = function(newTitle) {
      subtitle = newTitle;
    }

    var isShowLogo = function() {
      return showLogo;
    }

    var setShowLogo = function(newStatus) {
      showLogo = newStatus;
    }

    var isShowNavigation = function () {
      return showNavigation;
    }

    var setShowNavigation = function (newStatus) {
      showNavigation = newStatus;
    }

    var isShowHeader = function () {
      return showHeader;
    }

    var setShowHeader = function (newStatus) {
      showHeader = newStatus;
    }

    return {
      getTitle: getTitle,
      getSubTitle: getSubTitle,
      setTitle: setTitle,
      setSubTitle: setSubTitle,
      isShowLogo: isShowLogo,
      setShowLogo: setShowLogo,
      isShowHeader: isShowHeader,
      setShowHeader: setShowHeader,
      isShowNavigation: isShowNavigation,
      setShowNavigation: setShowNavigation
    }
  }
])
