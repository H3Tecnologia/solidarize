'use strict';

/**
 * @ngdoc function
 * @name Solidarize.controller:loginController
 * @description
 * # loginController
 */
angular.module('Solidarize')
    .controller('loginController', function($scope, $location) {

        $scope.init = function() {};
        $scope.login = function() {
            $location.path("app/home")
        }
    });
