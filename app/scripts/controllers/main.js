'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('MainCtrl', ['$scope', 'RawData', function ($scope, RawData) {

        RawData.query().$promise.then(function(result){
            $scope.data = _.countBy(result, function(elem) {
                return elem.country;

            });

            $scope.cityLabels = _.keys($scope.data);
            $scope.cityData = _.values($scope.data);
        });

  }]);
