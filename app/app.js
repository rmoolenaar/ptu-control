'use strict';

// Declare app level module which depends on views, and components
angular.module('myPTU', [
  'ngRoute',
  'myPTU.control',
  'myPTU.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/control'});
}]);
