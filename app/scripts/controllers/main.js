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

		$scope.showNotification = function() {
			//Hide old share screen
			$scope.imageStates[1].show = false;
			//Show notification
			$scope.imageStates[3].show = true;
		};

		$scope.showDetails = function() {
			//Reveal new details screen behind current
			$scope.imageStates[4].show = true;
			//Fade out notification
			$scope.imageStates[3].show = false;
			//Fade out instagram image
			$timeout(function() {
				$scope.delayFade = false;
				$timeout(function() {
					$scope.imageStates[2].show = false;
				}, 500);
			}, 500);
		};

		$scope.openCumulus = function() {
			$scope.imageStates[5].show = true;
			//Trigger the next stage automatically
			$timeout(function() {
				$scope.imageStates[6].show = true;
			}, 2000);
		};

		$scope.showRefOn = function() {
			$scope.imageStates[7].show = true;
			//Hide old screens
			$timeout(function() {
				$scope.imageStates[4].show = false;
				$scope.imageStates[5].show = false;
				$scope.imageStates[6].show = false;
			}, 500);
		};

		$scope.goToSuccess = function() {
			$scope.imageStates[8].show = true;
		};
	});
