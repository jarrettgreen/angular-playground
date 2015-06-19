'use strict';

/**
 * @ngdoc overview
 * @name angularPlaygroundApp
 * @description
 * # angularPlaygroundApp
 *
 * Main module of the application.
 */
angular
  .module('angularPlaygroundApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/api-test', {
        templateUrl: 'views/api-test.html',
        controller: 'ApiTest'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
