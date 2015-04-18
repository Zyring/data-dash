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


        function calculateData() {
            calculateCityData();
        }

        function calculateCityData() {
            var cityData = _.countBy($scope.currentData, function (elem) {
                return elem.country;

            });

            $scope.cityLabels = _.keys(cityData);
            $scope.cityData = _.values(cityData);

        }


        RawData.query().$promise.then(function (result) {
            $scope.allData = result;
            $scope.currentData = $scope.allData;
            calculateData();

        });

        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };


        $scope.openStart = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.openedStart = true;
        };

        $scope.openEnd = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.openedEnd = true;
        };

        $scope.$watch("endDate", function (newEnd) {

            if ($scope.allData) {
                var newEndTimestamp = new Date(newEnd).getTime() / 1000;
                $scope.currentData = _.filter($scope.allData, function (elem) {
                    return elem.timestamp <= newEndTimestamp;
                });
                console.log($scope.currentData.length);
                calculateData();
            }

        });
        $scope.$watch("startDate", function (newStart) {
            if ($scope.allData) {
                var newStartTimeStamp = new Date(newStart).getTime() / 1000;
                $scope.currentData = _.filter($scope.allData, function (elem) {
                    return elem.timestamp >= newStartTimeStamp;
                });
                console.log($scope.currentData.length);
                calculateData();
            }
        });

    }]);
