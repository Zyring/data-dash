/**
 * Created by Fathalian on 4/13/15.
 */
'use strict';
angular.module('zyringApp')
    .factory('RawData', ['$resource', function ($resource) {
        return $resource('http://micky.zyring.com/fullEvents');
    }]);

