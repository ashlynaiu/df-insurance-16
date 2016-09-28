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
			$scope.imageStates[3].show = true;
		};

		$scope.showDetails = function() {
			//Fade out notification
			$scope.imageStates[3].show = false;
			//Hide Share Screen
			$scope.imageStates[1].show = false;
			//Reveal new details screen behind current
			$scope.imageStates[4].show = true;
			//Fade out instagram image out
			$scope.delayFade = false;
			//Hide instagram
			$timeout(function() {
				$scope.imageStates[2].show = false;
			}, 1000);
		};

		$scope.openCumulus = function() {
			$scope.imageStates[5].show = true;
			//Trigger the next stage automatically
			$timeout(function() {
				$scope.imageStates[6].show = true;
			}, 2000);
			//Nice, let's turn some layers off
			$timeout(function() {
				$scope.imageStates[4].show = false;
			}, 500);
		};
	});
