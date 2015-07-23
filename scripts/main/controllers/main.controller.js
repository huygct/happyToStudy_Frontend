'use strict';

(function () {
  angular.module('happyToStudyApp')
    .controller('MainController', ['$mdSidenav', function ($mdSidenav) {
      var self = this;

      self.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
      }

    }])

})();
    