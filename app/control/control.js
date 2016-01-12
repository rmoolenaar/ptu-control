'use strict';

angular.module('myPTU.control', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/control', {
    templateUrl: 'control/control.html',
    controller: 'ControlCtrl'
  });
}])

.controller('ControlCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.goLeft = function() {
        $http({
          url: 'http://localhost:8080/left',
          method: "GET"
         });
    };

    $scope.goRight = function() {
        $http({
          url: 'http://localhost:8080/right',
          method: "GET"
         });
    };

    $scope.goStop = function() {
        $http({
          url: 'http://localhost:8080/stop',
          method: "GET"
         });
    };

}]);
