'use strict';

/**
 * @ngdoc overview
 * @name happyToStudyApp
 * @description
 * # happyToStudyApp
 *
 * Main module of the application.
 */
angular
  .module('happyToStudyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/english', {
        templateUrl: 'scripts/english/templates/english.html',
        controller: 'EnglishController',
        controllerAs: 'englishCtrl'
      })
      .when('/entertainment', {
        templateUrl: 'scripts/entertainment/templates/entertainment.html',
        controller: 'EntertainmentController',
        controllerAs: 'entertainmentCtrl'
      })
      .otherwise({
        redirectTo: '/english'
      });
  });
