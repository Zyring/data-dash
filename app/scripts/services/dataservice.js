/**
 * Created by Fathalian on 4/13/15.
 */
angular.module('zyringApp')
    .factory('RawData', ['$resource', function ($resource) {
        return $resource('http://localhost:8006/fullEvents');
    }]);

