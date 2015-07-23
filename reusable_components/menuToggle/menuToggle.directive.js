/**
 * Created by Huy Nghi on 7/23/2015.
 */

(function () {
  angular.module('htl.com.reusableComponents')
    .directive('menuToggle', menuToggle)

  function menuToggle () {
    var directive = {
      restrict: 'EA',
      templateUrl: 'reusable_components/menuToggle/templates/template.directive.html',
      scope: {
        menuToggleOptions: '='
      },
      link: linkFunc,
      controller: MenuToggleController,
      controllerAs: menuToggleCtrl,
      bindToController: true
    };
    return directive;

    function linkFunc () {

    }
  }

  MenuToggleController.$inject = [];

  function MenuToggleController () {

  }
})();