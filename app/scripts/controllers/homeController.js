'use strict';

/**
 * @ngdoc function
 * @name Solidarize.controller:HomeController
 * @description
 * # HomeController
 */
angular.module('Solidarize')
    .controller('HomeController', function($scope, $location) {

        $scope.myHTML = null;
        $scope.$broadcast('scroll.refreshComplete');

        $scope.goBusca = function() {
            $location.path('app/busca');
        };
    });
