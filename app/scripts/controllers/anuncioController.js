'use strict';

/**
 * @ngdoc function
 * @name Solidarize.controller:loginController
 * @description
 * # loginController
 */
angular.module('Solidarize')
    .controller('anuncioController', function($scope, $ionicSlideBoxDelegate,$ionicModal) {

        $scope.template = '<div class="modal image-modal transparent"ng-click="closeModal()"><ion-slide-box on-slide-changed="slideChanged(index)"show-pager="false"><ion-slide ng-repeat="oImage in aImages"><img ng-src="{{oImage.src}}" class="fullscreen-image" /><p class="info">{{oImage.msg}}</p></ion-slide></ion-slide-box></div>';
        $scope.aImages = [{
            'src': 'http://ionicframework.com/img/ionic-logo-blog.png',
            'msg': 'Swipe me to the left. Tap/click to close'
        }, {
            'src': 'http://ionicframework.com/img/ionic_logo.svg',
            'msg': ''
        }, {
            'src': 'http://ionicframework.com/img/homepage/phones-weather-demo@2x.png',
            'msg': ''
        }];

        $scope.modal = $ionicModal.fromTemplate($scope.template, {
            scope: $scope,
            animation: 'slide-in-up'
        });

        $scope.openModal = function() {
            $ionicSlideBoxDelegate.slide(0);
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        // Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });
        // Execute action on hide modal
        $scope.$on('modal.hide', function() {
            // Execute action
        });
        // Execute action on remove modal
        $scope.$on('modal.removed', function() {
            // Execute action
        });
        $scope.$on('modal.shown', function() {
            console.log('Modal is shown!');
        });

        $scope.next = function() {
            $ionicSlideBoxDelegate.next();
        };

        $scope.previous = function() {
            $ionicSlideBoxDelegate.previous();
        };

        $scope.goToSlide = function(index) {
            $scope.modal.show();
            $ionicSlideBoxDelegate.slide(index);
        }

        // Called each time the slide changes
        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
        };
    });
