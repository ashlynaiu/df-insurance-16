'use strict';

angular.module('DF16Insurance')
	.controller('MainCtrl', function ($scope, $state, $timeout) {
		$scope.$state = $state;
		$scope.delayFade = false;

		$scope.slideShare = function() {
			$scope.imageStates[1].show = true;
		};

		$scope.goToInstagram = function() {
			$scope.imageStates[2].show = true;
			//Hide first camera view
			$scope.imageStates[0].show = false;
			//Start Animation
			$timeout(function() {
				$scope.delayFade = true;
			}, 100);
		};


	});
