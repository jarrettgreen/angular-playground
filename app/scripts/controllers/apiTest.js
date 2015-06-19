'use strict';

/**
 * @ngdoc function
 * @name angularPlaygroundApp.controller:ApiTest
 * @description
 * # ApiTest
 * Controller of the angularPlaygroundApp
 */
angular.module('angularPlaygroundApp')
  .controller('ApiTest', function ($scope, $http) {
    $scope.test = 'hello';
    $http.get('http://api.openweathermap.org/data/2.5/group?id=4281730,4347778,4273837&units=metric&units=imperial')
    .success(function(response){$scope.weatherData = response;});

  });
